import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Healthier, {
  Query,
  ignite,
  TypeIdentifier,
} from 'react-native-healthier';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    (async () => {
      const isAvailable = await Healthier.isAvailable();
      if (isAvailable) {
        await Healthier.requestAuthorization({
          read: [
            // TODO: I Don't like the .code...
            TypeIdentifier.HeartRate.code,
            TypeIdentifier.HeartRateVariabilitySDNN.code,
          ],
        });

        const descriptor = Query.sampleQuery({
          sampleType: TypeIdentifier.HeartRate.code,
          predicate: Query.compoundPredicate({
            type: 'And',
            subpredicates: [
              Query.predicateForObjectsWithDeviceProperty({
                key: 'Manufacturer',
                value: 'Apple Inc.',
              }),
              Query.predicateForObjectsWithDeviceProperty({
                key: 'Model',
                value: 'Watch',
              }),
            ],
          }),
          sortDescriptors: [
            Query.createSortDescriptor('SampleStartDate', true),
          ],
          resultOptions: { includeDevice: true },
        });

        const resultes = await Healthier.execute(descriptor);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
