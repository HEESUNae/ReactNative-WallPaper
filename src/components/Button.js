import React from 'react';
import { Pressable } from 'react-native';

export default function Button({ onPressIn, onPressOut, onPress, hitSlop, children }) {
  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      hitSlop={hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
    >
      {children}
    </Pressable>
  );
}
