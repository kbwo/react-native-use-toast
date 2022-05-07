import { StyleSheet } from 'react-native';

export const popupStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 8,
  },
  bottom: {
    bottom: 15,
  },
  left: {
    left: 10,
  },
  top: {
    top: 15,
  },
  right: {
    right: 10,
  },
  defaultHeight: {
    height: 50,
  },
  z: {
    zIndex: 10,
    elevation: 10,
  },
  success: {
    backgroundColor: '#579F6E',
  },
  error: {
    backgroundColor: '#D34C46',
  },
  warning: {
    backgroundColor: '#CF7135',
  },
  info: {
    backgroundColor: '#4880C8',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
  },
});
