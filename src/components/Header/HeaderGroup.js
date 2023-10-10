import React from 'react';
import { View } from 'react-native';

export default function HeaderGroup({ children }) {
  return <View style={{ flexDirection: 'row', alignItems: 'center' }}>{children}</View>;
}
