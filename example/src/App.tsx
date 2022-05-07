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
            status: 'success',
          });
        }}
      />
      <Button
        title="bottom left"
        onPress={() => {
          toast({
            title: 'Info',
            description: 'This is description',
            duration: 3000,
            position: 'bottom-left',
            status: 'info',
          });
        }}
      />
      <Button
        title="bottom right"
        onPress={() => {
          toast({
            title: 'Warning',
            description: 'This is description',
            duration: 3000,
            position: 'bottom-right',
            status: 'warning',
          });
        }}
      />
      <Button
        title="top"
        onPress={() => {
          toast({
            title: 'Error',
            description: 'This is description',
            duration: 3000,
            position: 'top',
            status: 'error',
          });
        }}
      />
      <Button
        title="top left"
        onPress={() => {
          toast({
            title: 'Info',
            description: 'This is description',
            duration: 3000,
            position: 'top-left',
            status: 'info',
          });
        }}
      />
      <Button
        title="top right"
        onPress={() => {
          toast({
            title: 'Warning',
            description: 'This is description',
            duration: 3000,
            position: 'top-right',
            status: 'warning',
          });
        }}
      />
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ToastProvider>
        <Component />
      </ToastProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
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
