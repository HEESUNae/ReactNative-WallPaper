import React from 'react';
import { Image as RNImage } from 'react-native';

export default function RemoteImage({ url, style, width, height }) {
  return <RNImage source={{ uri: url }} style={[style, { width: width, height: height }]} />;
}
