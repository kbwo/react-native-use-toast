import React, { useEffect, useRef } from 'react';
import { Animated, Text, useWindowDimensions, ViewStyle } from 'react-native';
import { popupStyles } from './popup.style';

type Position =
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'top'
  | 'top-left'
  | 'top-right';

type Status = 'info' | 'warning' | 'success' | 'error';

export type PopupProps = {
  containerStyle?: ViewStyle;
  description?: string;
  duration?: number;
  id?: number;
  onCloseComplete?: () => void;
  position?: Position;
  status?: Status;
  title: string;
  onClose?: () => void;
};

export const Popup: React.FC<PopupProps> = ({
  containerStyle,
  description,
  duration,
  id,
  // onCloseComplete,
  position,
  // status,
  title,
  onClose,
}) => {
  const openAnim = useRef(
    new Animated.Value(position?.includes('top') ? -10 : 10)
  ).current;

  const { width: windowWidth } = useWindowDimensions();
  const horizontalMargin = windowWidth * 0.1;
  const positionStyles: ViewStyle =
    position === 'top-right'
      ? { ...popupStyles.top, ...popupStyles.right }
      : position === 'bottom-left'
      ? { ...popupStyles.bottom, ...popupStyles.left }
      : position === 'bottom-right'
      ? { ...popupStyles.bottom, ...popupStyles.right }
      : position === 'top'
      ? { ...popupStyles.top, left: horizontalMargin }
      : position === 'top-left'
      ? { ...popupStyles.top, ...popupStyles.left }
      : {
          ...popupStyles.bottom,
          left: horizontalMargin,
        };

  const zVec: ViewStyle = id
    ? {
        zIndex: popupStyles.z.zIndex + id,
        elevation: popupStyles.z.elevation + id,
      }
    : {
        zIndex: popupStyles.z.zIndex,
        elevation: popupStyles.z.elevation,
      };

  useEffect(() => {
    const fadeIn = () => {
      // Will change fadeAnim value to 1 in 5 seconds
      Animated.timing(openAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    fadeIn();
  }, [openAnim]);

  useEffect(() => {
    if (duration && onClose) {
      setTimeout(onClose, duration);
    }
  }, [onClose, duration]);

  return (
    <Animated.View
      style={[
        popupStyles.container,
        positionStyles,
        zVec,
        { width: windowWidth * 0.8, transform: [{ translateY: openAnim }] },
        popupStyles.defaultHeight,
        containerStyle,
        popupStyles.success,
      ]}
    >
      <Text style={popupStyles.title}>{title}</Text>
      {description ? (
        <Text style={popupStyles.description}>{description}</Text>
      ) : null}
    </Animated.View>
  );
};
