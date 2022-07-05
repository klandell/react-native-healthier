import Foundation
import HealthKit

class RNHealthierUtils {
    static func getQuantityType(forIdentifier: HKQuantityTypeIdentifier) -> HKQuantityType? {
        if #available(iOS 15.0, *) {
            return HKQuantityType.init(forIdentifier)
        } else {
            return HKObjectType.quantityType(forIdentifier: forIdentifier)
        }
    }
    
    static func getCategoryType(forIdentifier: HKCategoryTypeIdentifier) -> HKCategoryType? {
        if #available(iOS 15.0, *) {
            return HKCategoryType.init(forIdentifier)
        } else {
            return HKObjectType.categoryType(forIdentifier: forIdentifier)
        }
    }
    
    static func getCharacteristicType(forIdentifier: HKCharacteristicTypeIdentifier) -> HKCharacteristicType? {
        if #available(iOS 15.0, *) {
            return HKCharacteristicType.init(forIdentifier)
        } else {
            return HKObjectType.characteristicType(forIdentifier: forIdentifier)
        }
    }
    
    @available(iOS 12.0, *)
    static func getClinicalType(forIdentifier: HKClinicalTypeIdentifier) -> HKClinicalType? {
        if #available(iOS 15.0, *) {
            return HKClinicalType.init(forIdentifier)
        } else {
            return HKObjectType.clinicalType(forIdentifier: forIdentifier)
        }
    }
    
    static func getCorrelationType(forIdentifier: HKCorrelationTypeIdentifier) -> HKCorrelationType? {
        if #available(iOS 15.0, *) {
            return HKCorrelationType.init(forIdentifier)
        } else {
            return HKObjectType.correlationType(forIdentifier: forIdentifier)
        }
    }
    
    static func getObjectType(forIdentifier: RNHealthierObjectTypeIdentifier) -> HKObjectType? {
        typealias TypeIdentifier = RNHealthierObjectTypeIdentifier;
        
        switch forIdentifier {
        case TypeIdentifier.BodyMassIndex:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.bodyMassIndex)
        case TypeIdentifier.BodyFatPercentage:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.bodyMassIndex)
        case TypeIdentifier.Height:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.height)
        case TypeIdentifier.BodyMass:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.bodyMass)
        case TypeIdentifier.LeanBodyMass:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.leanBodyMass)
        case TypeIdentifier.WaistCircumference:
            if #available(iOS 11.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.waistCircumference)
            } else {
                return nil
            }
        case TypeIdentifier.StepCount:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.stepCount)
        case TypeIdentifier.DistanceWalkingRunning:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.distanceWalkingRunning)
        case TypeIdentifier.DistanceCycling:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.distanceCycling)
        case TypeIdentifier.DistanceWheelchair:
            if #available(iOS 10.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.distanceWheelchair)
            } else {
                return nil
            }
        case TypeIdentifier.BasalEnergyBurned:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.basalEnergyBurned)
        case TypeIdentifier.ActiveEnergyBurned:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.activeEnergyBurned)
        case TypeIdentifier.FlightsClimbed:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.flightsClimbed)
        case TypeIdentifier.NikeFuel:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.nikeFuel)
        case TypeIdentifier.AppleExerciseTime:
            if #available(iOS 9.3, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.appleExerciseTime)
            } else {
                return nil
            }
        case TypeIdentifier.PushCount:
            if #available(iOS 10.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.pushCount)
            } else {
                return nil
            }
        case TypeIdentifier.DistanceSwimming:
            if #available(iOS 10.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.distanceSwimming)
            } else {
                return nil
            }
        case TypeIdentifier.SwimmingStrokeCount:
            if #available(iOS 10.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.swimmingStrokeCount)
            } else {
                return nil
            }
        case TypeIdentifier.Vo2Max:
            if #available(iOS 11.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.vo2Max)
            } else {
                return nil
            }
        case TypeIdentifier.DistanceDownhillSnowSports:
            if #available(iOS 11.2, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.distanceDownhillSnowSports)
            } else {
                return nil
            }
        case TypeIdentifier.AppleStandTime:
            if #available(iOS 13.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.appleStandTime)
            } else {
                return nil
            }
        case TypeIdentifier.WalkingSpeed:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.walkingSpeed)
            } else {
                return nil
            }
        case TypeIdentifier.WalkingDoubleSupportPercentage:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.walkingDoubleSupportPercentage)
            } else {
                return nil
            }
        case TypeIdentifier.WalkingAsymmetryPercentage:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.walkingAsymmetryPercentage)
            } else {
                return nil
            }
        case TypeIdentifier.WalkingStepLength:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.walkingStepLength)
            } else {
                return nil
            }
        case TypeIdentifier.SixMinuteWalkTestDistance:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.sixMinuteWalkTestDistance)
            } else {
                return nil
            }
        case TypeIdentifier.StairAscentSpeed:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.stairAscentSpeed)
            } else {
                return nil
            }
        case TypeIdentifier.StairDescentSpeed:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.stairDescentSpeed)
            } else {
                return nil
            }
        case TypeIdentifier.AppleMoveTime:
            if #available(iOS 14.5, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.appleMoveTime)
            } else {
                return nil
            }
        case TypeIdentifier.AppleWalkingSteadiness:
            if #available(iOS 15.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.appleWalkingSteadiness)
            } else {
                return nil
            }
        case TypeIdentifier.HeartRate:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.heartRate)
        case TypeIdentifier.BodyTemperature:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.bodyTemperature)
        case TypeIdentifier.BasalBodyTemperature:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.basalBodyTemperature)
        case TypeIdentifier.BloodPressureSystolic:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.bloodPressureSystolic)
        case TypeIdentifier.BloodPressureDiastolic:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.bloodPressureDiastolic)
        case TypeIdentifier.RespiratoryRate:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.respiratoryRate)
        case TypeIdentifier.RestingHeartRate:
            if #available(iOS 11.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.restingHeartRate)
            } else {
                return nil
            }
        case TypeIdentifier.WalkingHeartRateAverage:
            if #available(iOS 11.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.walkingHeartRateAverage)
            } else {
                return nil
            }
        case TypeIdentifier.HeartRateVariabilitySDNN:
            if #available(iOS 11.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.heartRateVariabilitySDNN)
            } else {
                return nil
            }
        case TypeIdentifier.OxygenSaturation:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.oxygenSaturation)
        case TypeIdentifier.PeripheralPerfusionIndex:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.peripheralPerfusionIndex)
        case TypeIdentifier.BloodGlucose:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.bloodGlucose)
        case TypeIdentifier.NumberOfTimesFallen:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.numberOfTimesFallen)
        case TypeIdentifier.ElectrodermalActivity:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.electrodermalActivity)
        case TypeIdentifier.InhalerUsage:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.inhalerUsage)
        case TypeIdentifier.InsulinDelivery:
            if #available(iOS 11.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.insulinDelivery)
            } else {
                return nil
            }
        case TypeIdentifier.BloodAlcoholContent:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.bloodAlcoholContent)
        case TypeIdentifier.ForcedVitalCapacity:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.forcedVitalCapacity)
        case TypeIdentifier.ForcedExpiratoryVolume1:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.forcedExpiratoryVolume1)
        case TypeIdentifier.PeakExpiratoryFlowRate:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.peakExpiratoryFlowRate)
        case TypeIdentifier.EnvironmentalAudioExposure:
            if #available(iOS 13.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.environmentalAudioExposure)
            } else {
                return nil
            }
        case TypeIdentifier.HeadphoneAudioExposure:
            if #available(iOS 13.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.headphoneAudioExposure)
            } else {
                return nil
            }
        case TypeIdentifier.NumberOfAlcoholicBeverages:
            if #available(iOS 15.0, *) {
                return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.numberOfAlcoholicBeverages)
            } else {
                return nil
            }
        case TypeIdentifier.DietaryFatTotal:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryFatTotal)
        case TypeIdentifier.DietaryFatPolyunsaturated:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryFatPolyunsaturated)
        case TypeIdentifier.DietaryFatMonounsaturated:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryFatMonounsaturated)
        case TypeIdentifier.DietaryFatSaturated:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryFatSaturated)
        case TypeIdentifier.DietaryCholesterol:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryCholesterol)
        case TypeIdentifier.DietarySodium:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietarySodium)
        case TypeIdentifier.DietaryCarbohydrates:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryCarbohydrates)
        case TypeIdentifier.DietaryFiber:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryFiber)
        case TypeIdentifier.DietarySugar:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietarySugar)
        case TypeIdentifier.DietaryEnergyConsumed:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryEnergyConsumed)
        case TypeIdentifier.DietaryProtein:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryProtein)
        case TypeIdentifier.DietaryVitaminA:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryVitaminA)
        case TypeIdentifier.DietaryVitaminB6:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryVitaminB6)
        case TypeIdentifier.DietaryVitaminB12:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryVitaminB12)
        case TypeIdentifier.DietaryVitaminC:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryVitaminC)
        case TypeIdentifier.DietaryVitaminD:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryVitaminD)
        case TypeIdentifier.DietaryVitaminE:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryVitaminE)
        case TypeIdentifier.DietaryVitaminK:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryVitaminK)
        case TypeIdentifier.DietaryCalcium:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryCalcium)
        case TypeIdentifier.DietaryIron:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryIron)
        case TypeIdentifier.DietaryThiamin:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryThiamin)
        case TypeIdentifier.DietaryRiboflavin:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryRiboflavin)
        case TypeIdentifier.DietaryNiacin:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryNiacin)
        case TypeIdentifier.DietaryFolate:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryFolate)
        case TypeIdentifier.DietaryBiotin:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryBiotin)
        case TypeIdentifier.DietaryPantothenicAcid:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryPantothenicAcid)
        case TypeIdentifier.DietaryPhosphorus:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryPhosphorus)
        case TypeIdentifier.DietaryIodine:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryIodine)
        case TypeIdentifier.DietaryMagnesium:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryMagnesium)
        case TypeIdentifier.DietaryZinc:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryZinc)
        case TypeIdentifier.DietarySelenium:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietarySelenium)
        case TypeIdentifier.DietaryCopper:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryCopper)
        case TypeIdentifier.DietaryManganese:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryManganese)
        case TypeIdentifier.DietaryChromium:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryChromium)
        case TypeIdentifier.DietaryMolybdenum:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryMolybdenum)
        case TypeIdentifier.DietaryChloride:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryChloride)
        case TypeIdentifier.DietaryPotassium:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryPotassium)
        case TypeIdentifier.DietaryCaffeine:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryCaffeine)
        case TypeIdentifier.DietaryWater:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.dietaryWater)
        case TypeIdentifier.UvExposure:
            return RNHealthierUtils.getQuantityType(forIdentifier: HKQuantityTypeIdentifier.uvExposure)
        case TypeIdentifier.SleepAnalysis:
            return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.sleepAnalysis)
        case TypeIdentifier.AppleStandHour:
            return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.appleStandHour)
        case TypeIdentifier.CervicalMucusQuality:
            return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.cervicalMucusQuality)
        case TypeIdentifier.OvulationTestResult:
            return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.ovulationTestResult)
        case TypeIdentifier.PregnancyTestResult:
            if #available(iOS 15.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.pregnancyTestResult)
            } else {
                return nil
            }
        case TypeIdentifier.ProgesteroneTestResult:
            if #available(iOS 15.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.progesteroneTestResult)
            } else {
                return nil
            }
        case TypeIdentifier.MenstrualFlow:
            return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.menstrualFlow)
        case TypeIdentifier.IntermenstrualBleeding:
            return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.intermenstrualBleeding)
        case TypeIdentifier.SexualActivity:
            return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.sexualActivity)
        case TypeIdentifier.MindfulSession:
            if #available(iOS 10.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.mindfulSession)
            } else {
                return nil
            }
        case TypeIdentifier.HighHeartRateEvent:
            if #available(iOS 12.2, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.highHeartRateEvent)
            } else {
                return nil
            }
        case TypeIdentifier.LowHeartRateEvent:
            if #available(iOS 12.2, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.lowHeartRateEvent)
            } else {
                return nil
            }
        case TypeIdentifier.IrregularHeartRhythmEvent:
            if #available(iOS 12.2, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.irregularHeartRhythmEvent)
            } else {
                return nil
            }
        case TypeIdentifier.ToothbrushingEvent:
            if #available(iOS 13.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.toothbrushingEvent)
            } else {
                return nil
            }
        case TypeIdentifier.Pregnancy:
            if #available(iOS 14.3, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.pregnancy)
            } else {
                return nil
            }
        case TypeIdentifier.Lactation:
            if #available(iOS 14.3, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.lactation)
            } else {
                return nil
            }
        case TypeIdentifier.Contraceptive:
            if #available(iOS 14.3, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.contraceptive)
            } else {
                return nil
            }
        case TypeIdentifier.EnvironmentalAudioExposureEvent:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.environmentalAudioExposureEvent)
            } else {
                return nil
            }
        case TypeIdentifier.HeadphoneAudioExposureEvent:
            if #available(iOS 14.2, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.headphoneAudioExposureEvent)
            } else {
                return nil
            }
        case TypeIdentifier.HandwashingEvent:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.handwashingEvent)
            } else {
                return nil
            }
        case TypeIdentifier.LowCardioFitnessEvent:
            if #available(iOS 14.3, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.lowCardioFitnessEvent)
            } else {
                return nil
            }
        case TypeIdentifier.AppleWalkingSteadinessEvent:
            if #available(iOS 15.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.appleWalkingSteadinessEvent)
            } else {
                return nil
            }
        case TypeIdentifier.AbdominalCramps:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.abdominalCramps)
            } else {
                return nil
            }
        case TypeIdentifier.Acne:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.acne)
            } else {
                return nil
            }
        case TypeIdentifier.AppetiteChanges:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.appetiteChanges)
            } else {
                return nil
            }
        case TypeIdentifier.BladderIncontinence:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.bladderIncontinence)
            } else {
                return nil
            }
        case TypeIdentifier.Bloating:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.bloating)
            } else {
                return nil
            }
        case TypeIdentifier.BreastPain:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.breastPain)
            } else {
                return nil
            }
        case TypeIdentifier.ChestTightnessOrPain:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.chestTightnessOrPain)
            } else {
                return nil
            }
        case TypeIdentifier.Chills:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.chills)
            } else {
                return nil
            }
        case TypeIdentifier.Constipation:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.constipation)
            } else {
                return nil
            }
        case TypeIdentifier.Coughing:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.coughing)
            } else {
                return nil
            }
        case TypeIdentifier.Diarrhea:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.diarrhea)
            } else {
                return nil
            }
        case TypeIdentifier.Dizziness:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.dizziness)
            } else {
                return nil
            }
        case TypeIdentifier.DrySkin:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.drySkin)
            } else {
                return nil
            }
        case TypeIdentifier.Fainting:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.fainting)
            } else {
                return nil
            }
        case TypeIdentifier.Fatigue:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.fatigue)
            } else {
                return nil
            }
        case TypeIdentifier.Fever:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.fever)
            } else {
                return nil
            }
        case TypeIdentifier.GeneralizedBodyAche:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.generalizedBodyAche)
            } else {
                return nil
            }
        case TypeIdentifier.HairLoss:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.hairLoss)
            } else {
                return nil
            }
        case TypeIdentifier.Headache:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.headache)
            } else {
                return nil
            }
        case TypeIdentifier.Heartburn:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.heartburn)
            } else {
                return nil
            }
        case TypeIdentifier.LossOfSmell:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.lossOfSmell)
            } else {
                return nil
            }
        case TypeIdentifier.LossOfTaste:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.lossOfTaste)
            } else {
                return nil
            }
        case TypeIdentifier.LowerBackPain:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.lowerBackPain)
            } else {
                return nil
            }
        case TypeIdentifier.MemoryLapse:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.memoryLapse)
            } else {
                return nil
            }
        case TypeIdentifier.MoodChanges:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.moodChanges)
            } else {
                return nil
            }
        case TypeIdentifier.Nausea:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.nausea)
            } else {
                return nil
            }
        case TypeIdentifier.NightSweats:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.nightSweats)
            } else {
                return nil
            }
        case TypeIdentifier.PelvicPain:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.pelvicPain)
            } else {
                return nil
            }
        case TypeIdentifier.RapidPoundingOrFlutteringHeartbeat:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.rapidPoundingOrFlutteringHeartbeat)
            } else {
                return nil
            }
        case TypeIdentifier.RunnyNose:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.runnyNose)
            } else {
                return nil
            }
        case TypeIdentifier.ShortnessOfBreath:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.shortnessOfBreath)
            } else {
                return nil
            }
        case TypeIdentifier.SinusCongestion:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.sinusCongestion)
            } else {
                return nil
            }
        case TypeIdentifier.SkippedHeartbeat:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.skippedHeartbeat)
            } else {
                return nil
            }
        case TypeIdentifier.SleepChanges:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.sleepChanges)
            } else {
                return nil
            }
        case TypeIdentifier.SoreThroat:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.soreThroat)
            } else {
                return nil
            }
        case TypeIdentifier.VaginalDryness:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.vaginalDryness)
            } else {
                return nil
            }
        case TypeIdentifier.Vomiting:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.vomiting)
            } else {
                return nil
            }
        case TypeIdentifier.Wheezing:
            if #available(iOS 13.6, *) {
                return RNHealthierUtils.getCategoryType(forIdentifier: HKCategoryTypeIdentifier.wheezing)
            } else {
                return nil
            }
        case TypeIdentifier.BiologicalSex:
            return RNHealthierUtils.getCharacteristicType(forIdentifier: HKCharacteristicTypeIdentifier.biologicalSex)
        case TypeIdentifier.BloodType:
            return RNHealthierUtils.getCharacteristicType(forIdentifier: HKCharacteristicTypeIdentifier.bloodType)
        case TypeIdentifier.DateOfBirth:
            return RNHealthierUtils.getCharacteristicType(forIdentifier: HKCharacteristicTypeIdentifier.dateOfBirth)
        case TypeIdentifier.FitzpatrickSkinType:
            return RNHealthierUtils.getCharacteristicType(forIdentifier: HKCharacteristicTypeIdentifier.fitzpatrickSkinType)
        case TypeIdentifier.WheelchairUse:
            if #available(iOS 10.0, *) {
                return RNHealthierUtils.getCharacteristicType(forIdentifier: HKCharacteristicTypeIdentifier.wheelchairUse)
            } else {
                return nil
            }
        case TypeIdentifier.ActivityMoveMode:
            if #available(iOS 14.0, *) {
                return RNHealthierUtils.getCharacteristicType(forIdentifier: HKCharacteristicTypeIdentifier.activityMoveMode)
            } else {
                return nil
            }
        case TypeIdentifier.Food:
            return RNHealthierUtils.getCorrelationType(forIdentifier: HKCorrelationTypeIdentifier.food)
        case TypeIdentifier.Workout:
            return HKObjectType.workoutType()
        case TypeIdentifier.WorkoutRoute:
            if #available(iOS 11.0, *) {
                return HKSeriesType.workoutRoute()
            } else {
                return nil
            }
        case TypeIdentifier.HeartbeatSeries:
            if #available(iOS 13.0, *) {
                return HKSeriesType.heartbeat()
            } else {
                return nil
            }
        case TypeIdentifier.Audiogram:
            if #available(iOS 13.0, *) {
                return HKSeriesType.audiogramSampleType()
            } else {
                return nil
            }
        case TypeIdentifier.Electrocardiogram:
            if #available(iOS 14.0, *) {
                return HKSeriesType.electrocardiogramType()
            } else {
                return nil
            }
        case TypeIdentifier.AllergyRecord:
            if #available(iOS 12, *) {
                return RNHealthierUtils.getClinicalType(forIdentifier: HKClinicalTypeIdentifier.allergyRecord)
            } else {
                return nil
            }
        case TypeIdentifier.ConditionRecord:
            if #available(iOS 12, *) {
                return RNHealthierUtils.getClinicalType(forIdentifier: HKClinicalTypeIdentifier.conditionRecord)
            } else {
                return nil
            }
        case TypeIdentifier.ImmunizationRecord:
            if #available(iOS 12, *) {
                return RNHealthierUtils.getClinicalType(forIdentifier: HKClinicalTypeIdentifier.immunizationRecord)
            } else {
                return nil
            }
        case TypeIdentifier.LabResultRecord:
            if #available(iOS 12, *) {
                return RNHealthierUtils.getClinicalType(forIdentifier: HKClinicalTypeIdentifier.labResultRecord)
            } else {
                return nil
            }
        case TypeIdentifier.MedicationRecord:
            if #available(iOS 12, *) {
                return RNHealthierUtils.getClinicalType(forIdentifier: HKClinicalTypeIdentifier.medicationRecord)
            } else {
                return nil
            }
        case TypeIdentifier.ProcedureRecord:
            if #available(iOS 12, *) {
                return RNHealthierUtils.getClinicalType(forIdentifier: HKClinicalTypeIdentifier.procedureRecord)
            } else {
                return nil
            }
        case TypeIdentifier.VitalSignRecord:
            if #available(iOS 12, *) {
                return RNHealthierUtils.getClinicalType(forIdentifier: HKClinicalTypeIdentifier.vitalSignRecord)
            } else {
                return nil
            }
        case TypeIdentifier.CoverageRecord:
            if #available(iOS 14, *) {
                return RNHealthierUtils.getClinicalType(forIdentifier: HKClinicalTypeIdentifier.coverageRecord)
            } else {
                return nil
            }
        default:
            return nil;
        }
    }
    
    static func getDefaultUnit(forIdentifier: RNHealthierObjectTypeIdentifier) -> String? {
        typealias TypeIdentifier = RNHealthierObjectTypeIdentifier;
        
        switch forIdentifier {
        case TypeIdentifier.AppleWalkingSteadiness,
            TypeIdentifier.BodyFatPercentage,
            TypeIdentifier.OxygenSaturation,
            TypeIdentifier.PeripheralPerfusionIndex,
            TypeIdentifier.WalkingDoubleSupportPercentage,
            TypeIdentifier.WalkingAsymmetryPercentage:
            return "%"
        case TypeIdentifier.BodyMass,
            TypeIdentifier.LeanBodyMass:
            return "kg"
        case TypeIdentifier.DietaryCarbohydrates,
            TypeIdentifier.DietaryFatMonounsaturated,
            TypeIdentifier.DietaryFatPolyunsaturated,
            TypeIdentifier.DietaryFatSaturated,
            TypeIdentifier.DietaryFatTotal,
            TypeIdentifier.DietaryFiber,
            TypeIdentifier.DietaryProtein,
            TypeIdentifier.DietarySugar:
            return "g"
        case TypeIdentifier.DietaryCaffeine,
            TypeIdentifier.DietaryCalcium,
            TypeIdentifier.DietaryChloride,
            TypeIdentifier.DietaryCholesterol,
            TypeIdentifier.DietaryCopper,
            TypeIdentifier.DietaryIron,
            TypeIdentifier.DietaryManganese,
            TypeIdentifier.DietaryPotassium,
            TypeIdentifier.DietaryZinc,
            TypeIdentifier.DietaryMagnesium,
            TypeIdentifier.DietaryNiacin,
            TypeIdentifier.DietaryPhosphorus,
            TypeIdentifier.DietaryPantothenicAcid,
            TypeIdentifier.DietaryRiboflavin,
            TypeIdentifier.DietarySodium,
            TypeIdentifier.DietaryThiamin,
            TypeIdentifier.DietaryVitaminB6,
            TypeIdentifier.DietaryVitaminC,
            TypeIdentifier.DietaryVitaminE:
            return "mg"
        case TypeIdentifier.DietaryBiotin,
            TypeIdentifier.DietaryChromium,
            TypeIdentifier.DietaryFolate,
            TypeIdentifier.DietaryMolybdenum,
            TypeIdentifier.DietarySelenium,
            TypeIdentifier.DietaryIodine,
            TypeIdentifier.DietaryVitaminA,
            TypeIdentifier.DietaryVitaminB12,
            TypeIdentifier.DietaryVitaminD,
            TypeIdentifier.DietaryVitaminK:
            return "mcg"
        case TypeIdentifier.ForcedExpiratoryVolume1,
            TypeIdentifier.ForcedVitalCapacity:
            return "L"
        case TypeIdentifier.DietaryWater:
            return "mL"
        case TypeIdentifier.BodyMassIndex,
            TypeIdentifier.InhalerUsage,
            TypeIdentifier.NikeFuel,
            TypeIdentifier.StepCount,
            TypeIdentifier.FlightsClimbed,
            TypeIdentifier.NumberOfAlcoholicBeverages,
            TypeIdentifier.NumberOfTimesFallen,
            TypeIdentifier.PushCount,
            TypeIdentifier.SwimmingStrokeCount,
            TypeIdentifier.UvExposure:
            return "count"
        case TypeIdentifier.DistanceWalkingRunning,
            TypeIdentifier.DistanceCycling,
            TypeIdentifier.DistanceWheelchair,
            TypeIdentifier.DistanceDownhillSnowSports:
            return "km"
        case TypeIdentifier.DistanceSwimming,
            TypeIdentifier.SixMinuteWalkTestDistance:
            return "m"
        case TypeIdentifier.Height,
            TypeIdentifier.WalkingStepLength,
            TypeIdentifier.WaistCircumference:
            return "cm"
        case TypeIdentifier.ActiveEnergyBurned,
            TypeIdentifier.BasalEnergyBurned,
            TypeIdentifier.DietaryEnergyConsumed:
            return "kcal"
        case TypeIdentifier.AppleExerciseTime,
            TypeIdentifier.AppleStandTime,
            TypeIdentifier.AppleMoveTime:
            return "min"
        case TypeIdentifier.HeartRateVariabilitySDNN:
            return "ms"
        case TypeIdentifier.ElectrodermalActivity:
            return "mcS"
        case TypeIdentifier.Vo2Max:
            return "mL/(kg.min)"
        case TypeIdentifier.BloodGlucose:
            return "mg/dL"
        case TypeIdentifier.WalkingSpeed:
            return "km/hr"
        case TypeIdentifier.StairAscentSpeed,
            TypeIdentifier.StairDescentSpeed:
            return "m/s"
        case TypeIdentifier.HeartRate,
            TypeIdentifier.RestingHeartRate,
            TypeIdentifier.WalkingHeartRateAverage,
            TypeIdentifier.RespiratoryRate:
            return "count/min"
        case TypeIdentifier.PeakExpiratoryFlowRate:
            return "L/min"
        case TypeIdentifier.BodyTemperature,
            TypeIdentifier.BasalBodyTemperature:
            return "degC"
        case TypeIdentifier.BloodPressureSystolic,
            TypeIdentifier.BloodPressureDiastolic:
            return "mmHg"
        case TypeIdentifier.EnvironmentalAudioExposure,
            TypeIdentifier.HeadphoneAudioExposure:
            return "dBASPL"
        case TypeIdentifier.InsulinDelivery:
            return "IU"
        default:
            return nil;
        }
    }
    
    static func getMetadataKey(forString: String) -> String? {
        switch forString {
            /* ** GENERAL KEYS ** */
        case "ExternalUUID":
            return HKMetadataKeyExternalUUID
        case "TimeZone":
            return HKMetadataKeyTimeZone
        case "WasUserEntered":
            return HKMetadataKeyWasUserEntered
            /* ** ESTIMATE KEYS ** */
        case "DateOfEarliestDataUsedForEstimate":
            if #available(iOS 15.0, *) {
                return HKMetadataKeyDateOfEarliestDataUsedForEstimate
            } else {
                return nil
            }
            /* ** DEVICE INFORMATION KEYS ** */
        case "DeviceSerialNumber":
            return HKMetadataKeyDeviceSerialNumber
        case "UDIDeviceIdentifier":
            return HKMetadataKeyUDIDeviceIdentifier
        case "UDIProductionIdentifier":
            return HKMetadataKeyUDIProductionIdentifier
        case "DigitalSignature":
            return HKMetadataKeyDigitalSignature
        case "DeviceName":
            return HKMetadataKeyDeviceName
        case "DeviceManufacturerName":
            return HKMetadataKeyDeviceManufacturerName
        case "DevicePlacementSide":
            if #available(iOS 14.0, *) {
                return HKMetadataKeyDevicePlacementSide
            } else {
                return nil
            }
        case "AppleDeviceCalibrated":
            if #available(iOS 14.0, *) {
                return HKMetadataKeyAppleDeviceCalibrated
            } else {
                return nil
            }
            /* ** SYNC KEYS ** */
        case "SyncIdentifier":
            if #available(iOS 11.0, *) {
                return HKMetadataKeySyncIdentifier
            } else {
                return nil
            }
        case "SyncVersion":
            if #available(iOS 11.0, *) {
                return HKMetadataKeySyncVersion
            } else {
                return nil
            }
            /* ** LAB KEYS ** */
        case "WasTakenInLab":
            return HKMetadataKeyWasTakenInLab
        case "ReferenceRangeLowerLimit":
            return HKMetadataKeyReferenceRangeLowerLimit
        case "ReferenceRangeUpperLimit":
            return HKMetadataKeyReferenceRangeUpperLimit
            /* ** WEATHER KEYS ** */
        case "WeatherCondition":
            if #available(iOS 10.0, *) {
                return HKMetadataKeyWeatherCondition
            } else {
                return nil
            }
        case "WeatherTemperature":
            if #available(iOS 10.0, *) {
                return HKMetadataKeyWeatherTemperature
            } else {
                return nil
            }
        case "WeatherHumidity":
            if #available(iOS 10.0, *) {
                return HKMetadataKeyWeatherHumidity
            } else {
                return nil
            }
        case "BarometricPressure":
            if #available(iOS 14.0, *) {
                return HKMetadataKeyBarometricPressure
            } else {
                return nil
            }
            /* ** WORKOUT KEYS ** */
        case "WorkoutBrandName":
            return HKMetadataKeyWorkoutBrandName
        case "GroupFitness":
            return HKMetadataKeyGroupFitness
        case "IndoorWorkout":
            return HKMetadataKeyIndoorWorkout
        case "CoachedWorkout":
            return HKMetadataKeyCoachedWorkout
        case "AverageSpeed":
            if #available(iOS 11.2, *) {
                return HKMetadataKeyAverageSpeed
            } else {
                return nil
            }
        case "MaximumSpeed":
            if #available(iOS 11.2, *) {
                return HKMetadataKeyMaximumSpeed
            } else {
                return nil
            }
        case "AverageMETs":
            if #available(iOS 13.0, *) {
                return HKMetadataKeyAverageMETs
            } else {
                return nil
            }
        case "SwimmingLocationType":
            if #available(iOS 10.0, *) {
                return HKMetadataKeySwimmingLocationType
            } else {
                return nil
            }
        case "SwimmingStrokeStyle":
            if #available(iOS 10.0, *) {
                return HKMetadataKeySwimmingStrokeStyle
            } else {
                return nil
            }
        case "LapLength":
            if #available(iOS 10.0, *) {
                return HKMetadataKeyLapLength
            } else {
                return nil
            }
        case "AlpineSlopeGrade":
            if #available(iOS 11.2, *) {
                return HKMetadataKeyAlpineSlopeGrade
            } else {
                return nil
            }
        case "ElevationAscended":
            if #available(iOS 11.2, *) {
                return HKMetadataKeyElevationAscended
            } else {
                return nil
            }
        case "ElevationDescended":
            if #available(iOS 11.2, *) {
                return HKMetadataKeyElevationDescended
            } else {
                return nil
            }
        case "FitnessMachineDuration":
            if #available(iOS 12.0, *) {
                return HKMetadataKeyFitnessMachineDuration
            } else {
                return nil
            }
        case "CrossTrainerDistance":
            if #available(iOS 12.0, *) {
                return HKMetadataKeyCrossTrainerDistance
            } else {
                return nil
            }
        case "IndoorBikeDistance":
            if #available(iOS 12.0, *) {
                return HKMetadataKeyIndoorBikeDistance
            } else {
                return nil
            }
            /* ** CARDIO FITNESS KEYS ** */
        case "VO2MaxValue":
            if #available(iOS 14.3, *) {
                return HKMetadataKeyVO2MaxValue
            } else {
                return nil
            }
        case "LowCardioFitnessEventThreshold":
            if #available(iOS 14.3, *) {
                return HKMetadataKeyLowCardioFitnessEventThreshold
            } else {
                return nil
            }
            /* ** NUTRITION KEYS ** */
        case "FoodType":
            return HKMetadataKeyFoodType
            /* ** VITAL SENSORS KEYS ** */
        case "BodyTemperatureSensorLocation":
            return HKMetadataKeyBodyTemperatureSensorLocation
        case "HeartRateSensorLocation":
            return HKMetadataKeyHeartRateSensorLocation
        case "HeartRateMotionContext":
            if #available(iOS 11.0, *) {
                return HKMetadataKeyHeartRateMotionContext
            } else {
                return nil
            }
        case "KeyPathAverageHeartRate":
            if #available(iOS 13.0, *) {
                return HKPredicateKeyPathAverage
            } else {
                return nil
            }
        case "VO2MaxTestType":
            if #available(iOS 11.0, *) {
                return HKMetadataKeyVO2MaxTestType
            } else {
                return nil
            }
            /* ** AUDIO EVENT KEYS ** */
        case "AudioExposureLevel":
            if #available(iOS 13.0, *) {
                return HKMetadataKeyAudioExposureLevel
            } else {
                return nil
            }
        case "AudioExposureDuration":
            if #available(iOS 14.2, *) {
                return HKMetadataKeyAudioExposureDuration
            } else {
                return nil
            }
            /* ** BLOOD GLUCOSE KEYS ** */
        case "BloodGlucoseMealTime":
            if #available(iOS 11.0, *) {
                return HKMetadataKeyBloodGlucoseMealTime
            } else {
                return nil
            }
        case "InsulinDeliveryReason":
            if #available(iOS 11.0, *) {
                return HKMetadataKeyInsulinDeliveryReason
            } else {
                return nil
            }
            /* ** REPRODUCTIVE HEALTH KEYS ** */
        case "MenstrualCycleStart":
            return HKMetadataKeyMenstrualCycleStart
        case "SexualActivityProtectionUsed":
            return HKMetadataKeySexualActivityProtectionUsed
            /* ** ALGORITHM KEYS ** */
        case "AlgorithmVersion":
            if #available(iOS 15.0, *) {
                return HKMetadataKeyAlgorithmVersion
            } else {
                return nil
            }
        case "AppleECGAlgorithmVersion":
            if #available(iOS 14.0, *) {
                return HKMetadataKeyAppleECGAlgorithmVersion
            } else {
                return nil
            }
        case "KeyPathECGClassification":
            if #available(iOS 14.0, *) {
                return HKPredicateKeyPathECGClassification
            } else {
                return nil
            }
        case "KeyPathECGSymptomsStatus":
            if #available(iOS 14.0, *) {
                return HKPredicateKeyPathECGSymptomsStatus
            } else {
                return nil
            }
        default:
            return nil
        }
    }
    
    static func getComparisonOperator(forString: String) -> NSComparisonPredicate.Operator? {
        switch forString {
        case "LessThan":
            return NSComparisonPredicate.Operator.lessThan
        case "LessThanOrEqualTo":
            return NSComparisonPredicate.Operator.lessThanOrEqualTo
        case "GreaterThan":
            return NSComparisonPredicate.Operator.greaterThan
        case "GreaterThanOrEqualTo":
            return NSComparisonPredicate.Operator.greaterThanOrEqualTo
        case "EqualTo":
            return NSComparisonPredicate.Operator.equalTo
        case "NotEqualTo":
            return NSComparisonPredicate.Operator.notEqualTo
        case "Matches":
            return NSComparisonPredicate.Operator.matches
        case "Like":
            return NSComparisonPredicate.Operator.like
        case "BeginsWith":
            return NSComparisonPredicate.Operator.beginsWith
        case "EndsWith":
            return NSComparisonPredicate.Operator.endsWith
        case "In":
            return NSComparisonPredicate.Operator.in
        case "Contains":
            return NSComparisonPredicate.Operator.contains
        case "Between":
            return NSComparisonPredicate.Operator.between
        default:
            return nil
        }
    }
    
    static func getSortIdentifier(forString: String) -> String? {
        switch forString {
        case "SampleStartDate":
            return HKSampleSortIdentifierStartDate
        case "SampleEndDate":
            return HKSampleSortIdentifierEndDate
        case "WorkoutDuration":
            return HKWorkoutSortIdentifierDuration
        case "WorkoutTotalDistance":
            return HKWorkoutSortIdentifierTotalDistance
        case "WorkoutTotalFlightsClimbed":
            if #available(iOS 11.0, *) {
                return HKWorkoutSortIdentifierTotalFlightsClimbed
            } else {
                return nil
            }
        case "WorkoutTotalEnergyBurned":
            return HKWorkoutSortIdentifierTotalEnergyBurned
        case "WorkoutTotalSwimmingStrokeCount":
            if #available(iOS 10.0, *) {
                return HKWorkoutSortIdentifierTotalSwimmingStrokeCount
            } else {
                return nil
            }
        default:
            return nil
        }
    }
    
    static func getDevicePropertyKey(forString: String) -> String? {
        switch forString {
        case "Name":
            return HKDevicePropertyKeyName
        case "Manufacturer":
            return HKDevicePropertyKeyManufacturer
        case "Model":
            return HKDevicePropertyKeyModel
        case "HardwareVersion":
            return HKDevicePropertyKeyHardwareVersion
        case "FirmwareVersion":
            return HKDevicePropertyKeyFirmwareVersion
        case "SoftwareVersion":
            return HKDevicePropertyKeySoftwareVersion
        case "LocalIdentifier":
            return HKDevicePropertyKeyLocalIdentifier
        case "UDIDeviceIdentifier":
            return HKDevicePropertyKeyUDIDeviceIdentifier
        default:
            return nil
        }
    }
    
    static func buildPredicate(descriptor: [String: Any]) -> NSPredicate? {
        let invalidPredicate: NSPredicate? = nil;
        
        guard let predicateType = descriptor["type"] as? String else {
            return invalidPredicate;
        }
        
        // First, we'll handle the None predicate.
        if (predicateType == "Nil") {
            return nil;
        }
        
        // Next, we'll handle the Compound predicate types.
        if (predicateType == "And" || predicateType == "Or") {
            guard let subpredicateDescriptors = descriptor["subpredicates"] as? [[String: Any]] else {
                return invalidPredicate
            }
            
            var subpredicates = [NSPredicate]();
            // Build each of the subpredicates in the subpredicate array.
            for subpredicateDescriptor in subpredicateDescriptors {
                if let subpredicate = buildPredicate(descriptor: subpredicateDescriptor) {
                    subpredicates.append(subpredicate)
                }
            }
            
            if (subpredicates.isEmpty) {
                return nil;
            }
            
            // Now construct the compound predicate based on the compound type.
            if (predicateType == "And") {
                return NSCompoundPredicate.init(andPredicateWithSubpredicates: subpredicates)
            }
            // Otherwise, it's an or, build that compoundpredicate instead.
            return NSCompoundPredicate.init(orPredicateWithSubpredicates: subpredicates)
        }
        
        if (predicateType == "Not") {
            guard let subpredicateDescriptor = descriptor["subpredicate"] as? [String: Any] else {
                return invalidPredicate
            }
            
            guard let subpredicate = buildPredicate(descriptor: subpredicateDescriptor) else {
                return nil
            }
            
            return NSCompoundPredicate.init(notPredicateWithSubpredicate: subpredicate)
        }
        
        // Handle the rest of the predicate types.
        guard let query = descriptor["query"] as? [String: Any],
              let queryType = query["type"] as? String,
              let queryData = query["data"] as? [String: Any] else {
            return invalidPredicate
        };
        
        // Build an HKQuery.predicateForObject predicate.
        if (predicateType == "ForObject") {
            if (queryType == "UUID") {
                guard let uuidString = queryData["uuid"] as? String,
                      let uuid = UUID(uuidString: uuidString) else {
                    return invalidPredicate
                }
                return HKQuery.predicateForObject(with: uuid)
            }
            // We've covered all possibilities for this predicate type.
            // If we still haven't returned, it means there is a configuration
            // problem with the predicate descriptor.
            return invalidPredicate
        }
        
        // Build an HKQuery.predicateForObjects predicate.
        if (predicateType == "ForObjects") {
            if (queryType == "UUID") {
                guard let uuidStrings = queryData["uuid"] as? [String],
                      let uuidSet = Set(uuidStrings.map { UUID(uuidString: $0) }) as? Set<UUID> else {
                    return invalidPredicate
                }
                return HKQuery.predicateForObjects(with: uuidSet)
            }
            if (queryType == "DeviceProperty") {
                guard let devicePropertyString = queryData["key"] as? String,
                      let allowedValues = queryData["value"] as? [String],
                      let allowedValuesSet = Set(allowedValues) as? Set<String> else {
                    return invalidPredicate
                }
                guard let deviceProperty = RNHealthierUtils.getDevicePropertyKey(forString: devicePropertyString) else { return nil };
                return HKQuery.predicateForObjects(withDeviceProperty: deviceProperty, allowedValues: allowedValuesSet)
            }
            if (queryType == "MetadataKey") {
                guard let metadataKeyString = queryData["key"] as? String else {
                    return invalidPredicate;
                }
                
                guard let metadataKey = RNHealthierUtils.getMetadataKey(forString: metadataKeyString) else { return nil };
                
                if let allowedValues = queryData["value"] as? [Any] {
                    return HKQuery.predicateForObjects(withMetadataKey: metadataKey, allowedValues: allowedValues)
                }
                
                if let operatorTypeString = queryData["operator"] as? String {
                    guard let operatorType = RNHealthierUtils.getComparisonOperator(forString: operatorTypeString),
                          let value = queryData["value"] else {
                        return invalidPredicate
                    }
                    return HKQuery.predicateForObjects(withMetadataKey: metadataKey, operatorType: operatorType, value: value)
                }
                
                return HKQuery.predicateForObjects(withMetadataKey: metadataKey);
            }
        }
        
        // Build an HKQuery.predicateForSamples predicate.
        if (predicateType == "ForSamples") {
            if (queryType == "DateRange") {
                let dateFormatter = DateFormatter()
                dateFormatter.calendar = Calendar(identifier: .iso8601)
                dateFormatter.locale = Locale(identifier: "en_US_POSIX")
                dateFormatter.timeZone = TimeZone(secondsFromGMT: 0)
                dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX"
                
                let start = queryData["start"] as? String;
                let startDate = (start != nil) ? dateFormatter.date(from: start!) : nil;
                
                if let blahDate = dateFormatter.date(from: start!) {
                    NSLog(dateFormatter.string(from: blahDate))
                }
                
                let end = queryData["end"] as? String;
                let endDate = (end != nil) ? dateFormatter.date(from: end!) : nil;
                
                let options = queryData["options"] as? [String];
                
                if (options != nil) {
                    var opt: HKQueryOptions? = nil
                    
                    if options!.contains("StrictStartDate") {
                        opt = HKQueryOptions.strictStartDate
                    }
                    
                    if options!.contains("StrictEndDate") {
                        if (opt != nil) {
                            opt = opt?.union(HKQueryOptions.strictEndDate)
                        } else {
                            opt = HKQueryOptions.strictEndDate;
                        }
                    }
                    return HKQuery.predicateForSamples(withStart: startDate, end: endDate, options: opt ?? [])
                } else {
                    return HKQuery.predicateForSamples(withStart: startDate, end: endDate)
                }
            }
        }
        // If we get here it means that we don't have the logic to build
        // the requested predicate. This likely means that either the descriptor
        // is invalid, or new features were added to HealthKit that we haven't
        // implemented yet.
        return invalidPredicate;
    }
    
    static func buildSortDescriptors(descriptors: [[String: Any]]) -> [NSSortDescriptor]? {
        var sortDescriptors = [NSSortDescriptor]()
        
        for descriptor in descriptors {
            guard let id = descriptor["type"] as? String,
                  let data = descriptor["data"] as? [String: Bool],
                  let ascending = data["ascending"] else {
                // Just continue if the configuration is bar, we just won't add this sort to the array.
                continue
            }
            sortDescriptors.append(
                NSSortDescriptor.init(key: RNHealthierUtils.getSortIdentifier(forString: id), ascending: ascending)
            )
        }
        return sortDescriptors.count > 0 ? sortDescriptors : nil;
    }
}
