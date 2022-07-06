import Foundation
import HealthKit

// TODO: SHOULD I MOVE ALL TYPE CONVERSION LOGIC TO STORE????

@objc(RNHealthierModule)
class RNHealthierModule : NSObject {
    // Required React Native Setup.
    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }
    
    // Determine if apple health is available on this device.
    @objc(isAvailable:rejecter:)
    func isAvailable(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping  RCTPromiseRejectBlock) -> Void {
        resolve(RNHealthierStore.isAvailable())
    }
    
    // Determine if health records are available on this device.
    @objc(supportsHealthRecords:rejecter:)
    func supportsHealthRecords(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping  RCTPromiseRejectBlock) -> Void {
        resolve(RNHealthierStore.shared.supportsHealthRecords())
    }
    
    // Request authorization for any data types we want to read or write.
    // This MUST to be called BEFORE any queries or observers.
    @objc(requestAuthorization:resolver:rejecter:)
    func requestAuthorization(_ permissions: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        guard let permissions = permissions as? [String: Any] else {
            // TODO: error!
            reject("", "Permissions should be a dict." , nil)
            return;
        }
        
        var writePermissions: Set<HKSampleType>? = nil;
        var readPermissions: Set<HKObjectType>? = nil;
        
        if let writeTypeIdentifiers = permissions["toShare"] as? [String] {
            // Convert the strings to the healthier object type identifier enum,
            // filtering out any strings that we don't have a match for.
            let writeTypeIdentifierEnums = writeTypeIdentifiers.compactMap { objectTypeString in
                RNHealthierObjectTypeIdentifier.init(rawValue: objectTypeString)
            }
            // Now convert the enum values to the real HealthKit types.
            // Again we filter out nil. If the os version doesn't support the requested type
            // we'll just omit it from the request.
            let writeSampleTypes: [HKSampleType] = writeTypeIdentifierEnums.compactMap { objectTypeIdentifier in
                // Get the object type and try to convert to a sample.
                let objectType = RNHealthierUtils.getObjectType(forIdentifier: objectTypeIdentifier)
                if let sampleType = objectType as? HKSampleType {
                    return sampleType
                }
                return nil;
            }
            // Finally, populate the set of object types we want to request from HealthKit.
            if !writeSampleTypes.isEmpty {
                writePermissions = Set(writeSampleTypes);
            }
        }
        
        if let readTypeIdentifiers = permissions["read"] as? [String] {
            // Convert the strings to the healthier object type identifier enum,
            // filtering out any strings that we don't have a match for.
            let readTypeIdentifierEnums = readTypeIdentifiers.compactMap { objectTypeString in
                RNHealthierObjectTypeIdentifier.init(rawValue: objectTypeString)
            }
            // Now convert the enum values to the real HealthKit types.
            // Again we filter out nil. If the os version doesn't support the requested type
            // we'll just omit it from the request.
            let readObjectTypes = readTypeIdentifierEnums.compactMap { objectTypeIdentifier in
                RNHealthierUtils.getObjectType(forIdentifier: objectTypeIdentifier)
            }
            // Finally, populate the set of object types we want to request from HealthKit.
            if !readObjectTypes.isEmpty {
                readPermissions = Set(readObjectTypes);
            }
        }
        
        // TODO: Test this error!
        RNHealthierStore.shared.requestAuthorization(toShare: writePermissions, read: readPermissions) { success, error in
            if !success {
                reject("", "\(String(describing: error))", nil)
                return;
            }
            resolve(nil)
        }
    }
    
    // Query HealthKit.
    @objc(execute:resolver:rejecter:)
    func execute(_ queryDescriptor: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        guard let queryType = queryDescriptor["type"] as? String else {
            // TODO: error!
            return;
        }
        
        guard let sampleTypeString = queryDescriptor["sampleType"] as? String else {
            // TODO: error!
            return;
        }
        
        if queryType == "SampleQuery" {
            guard let predicate = queryDescriptor["predicate"] as? [String: Any],
                  let limit = queryDescriptor["limit"] as? Int,
                  let sortDescriptors = queryDescriptor["sortDescriptors"] as? [[String: Any]] else {
                // TODO: error!
                return;
            }
            // Run the sample query.
            RNHealthierStore.shared.sampleQuery(sampleTypeString: sampleTypeString, predicate: RNHealthierUtils.buildPredicate(descriptor: predicate), limit: limit, sortDescriptors: RNHealthierUtils.buildSortDescriptors(descriptors: sortDescriptors)) {
                data, err in
                
                if err != nil {
                    // TODO: error
                    reject("", "", nil);
                    return;
                }
                // Alright, we have data, send it back.
                resolve(data)
            }
        }
    }
    
    
    @objc(enableBackgroundDelivery:updateFrequency:resolver:rejecter:)
    func enableBackgroundDelivery(_ dataTypeIdentifier: NSString, updateFrequency: NSString, resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        let dataTypeIdentifierString = dataTypeIdentifier as String;
        let updateFrequencyString = updateFrequency as String;
        // If the data type identifier is valid, continue with enabling for background delivery
        if RNHealthierObjectTypeIdentifier.init(rawValue: dataTypeIdentifierString) != nil{
            let defaults = UserDefaults.standard
            var backgroundTypes = defaults.stringArray(forKey: "RNHealthier_BackgroundDelivery") ?? [String]()
            
            if !backgroundTypes.contains(dataTypeIdentifierString) {
                RNHealthierStore.shared.enableBackgroundDelivery(sampleTypeString: dataTypeIdentifierString, updateFrequencyString: updateFrequencyString) { success, error in
                    if !success {
                        reject("", "\(String(describing: error))", nil)
                        return;
                    }
                    backgroundTypes.append(dataTypeIdentifierString)
                    defaults.set(backgroundTypes, forKey: "RNHealthier_BackgroundDelivery")
                    resolve(nil)
                }
            }
            // We already have this as a background delivery type, just resolve.
            resolve(nil)
        }
        // TODO: REJECT BAD KEY
        resolve(nil)
    }
    
    @objc(disableBackgroundDelivery:resolver:rejecter:)
    func disableBackgroundDelivery(_ dataTypeIdentifier: NSString, resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        let dataTypeIdentifierString = dataTypeIdentifier as String;
        // If the data type identifier is valid, continue with disabling for background delivery
        if RNHealthierObjectTypeIdentifier.init(rawValue: dataTypeIdentifierString) != nil{
            let defaults = UserDefaults.standard
            var backgroundTypes = defaults.stringArray(forKey: "RNHealthier_BackgroundDelivery") ?? [String]()
            
            if backgroundTypes.contains(dataTypeIdentifierString) {
                RNHealthierStore.shared.disableBackgroundDelivery(sampleTypeString: dataTypeIdentifierString) { success, error in
                    if !success {
                        reject("", "\(String(describing: error))", nil)
                        return;
                    }
                    backgroundTypes = backgroundTypes.filter { $0 != dataTypeIdentifierString }
                    defaults.set(backgroundTypes, forKey: "RNHealthier_BackgroundDelivery")
                    resolve(nil)
                }
            }
            // We don't have this as a background delivery type, just resolve.
            resolve(nil)
        }
        // TODO: REJECT BAD KEY
        resolve(nil)
    }
    
    @objc(disableAllBackgroundDelivery:rejecter:)
    func disableAllBackgroundDelivery(resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
        let defaults = UserDefaults.standard
        defaults.set([], forKey: "RNHealthier_BackgroundDelivery");
        RNHealthierStore.shared.disableAllBackgroundDelivery() { success, error in
            if !success {
                reject("", "\(String(describing: error))", nil)
                return;
            }
            resolve(nil)
        }
    }
}
