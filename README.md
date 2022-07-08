# react-native-healthier

The healthiest way to interact with HealthKit in React Native.

## Warning: Don't use this yet. The API isn't totally settled yet and the code is a dumpster fire.

Healthier is different than other React Native libraries for Apple Health because Healthier provides an API that closely resembles the native HealthKit API. Ultimately Healthier allows you (when it's finished) to query any HealthKit data without the need to define new data accessor methods.

```TypeScript
import Healthier, {
  DeviceProperty,
  QuantityTypeIdentifier,
  Query,
  SortIdentifier,
  ignite
} from 'react-native-healthier';

// Example: read HRV data from HealthKit
async function readHRVData(startDate: Date, limit?: number) {
  // Check for Apple Health availability
  const isAvailable = await Healthier.isAvailable();
  if (!isAvailable) return;

  const sampleType = QuantityTypeIdentifier.HeartRateVariabilitySDNN;

  // Request read authorization.
  await Healthier.requestAuthorization({ read: [sampleType] });

  // Define a predicate to limit the result set.
  const predicate = Query.compoundPredicate({
    type: 'And', 
    subpredicates: [
      Query.predicateForSamples({
        start: startDate
        options: ['StrictStartDate'],
      }),
      Query.predicateForObjectsWithDeviceProperty({
        key: DeviceProperty.Manufacturer,
        value: 'Apple Inc.',
      }),
      Query.predicateForObjectsWithDeviceProperty({
        key: DeviceProperty.Model,
        value: 'Watch',
      }),
      Query.predicateForObjectsWithDeviceProperty({
        key: DeviceProperty.HardwareVersion,
        // Apple Watch 4
        value: ["Watch4,1", "Watch4,2", "Watch4,3", "Watch4,4"]
      }),
    ]
  });

  // Build a HeakthKit query.
  const query = Query.sampleQuery({
    sampleType,
    predicate,
    limit, 
    sortDescriptors: [
      Query.createSortDescriptor({key: SortIdentifier.SampleStartDate, ascending: false}),
    ],
  });

  // Execute the query and await the results.
  const data = await Healthier.execute(query);
  return data;
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
