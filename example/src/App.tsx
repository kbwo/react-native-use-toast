import * as React from 'react';

import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { ToastProvider, useToast } from 'react-native-use-toast';

const Component = () => {
  const { toast } = useToast();
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Show toast"
        onPress={() => {
          toast({
            title: 'Success',
            description: 'This is description',
          });
        }}
      />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <ToastProvider>
      <Component />
    </ToastProvider>
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
