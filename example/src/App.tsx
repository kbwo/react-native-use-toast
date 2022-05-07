import * as React from 'react';

import { StyleSheet, SafeAreaView, Button } from 'react-native';
import { ToastProvider, useToast } from 'react-native-use-toast';

const Component = () => {
  const { toast } = useToast();
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="bottom"
        onPress={() => {
          toast({
            title: 'Success',
            description: 'This is description',
            duration: 3000,
            position: 'bottom',
          });
        }}
      />
      <Button
        title="bottom left"
        onPress={() => {
          toast({
            title: 'Success',
            description: 'This is description',
            duration: 3000,
            position: 'bottom-left',
          });
        }}
      />
      <Button
        title="bottom right"
        onPress={() => {
          toast({
            title: 'Success',
            description: 'This is description',
            duration: 3000,
            position: 'bottom-right',
          });
        }}
      />
      <Button
        title="top"
        onPress={() => {
          toast({
            title: 'Success',
            description: 'This is description',
            duration: 3000,
            position: 'top',
          });
        }}
      />
      <Button
        title="top left"
        onPress={() => {
          toast({
            title: 'Success',
            description: 'This is description',
            duration: 3000,
            position: 'top-left',
          });
        }}
      />
      <Button
        title="top right"
        onPress={() => {
          toast({
            title: 'Success',
            description: 'This is description',
            duration: 3000,
            position: 'top-right',
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
