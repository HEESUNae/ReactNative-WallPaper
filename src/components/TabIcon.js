import React from 'react';
import { View } from 'react-native';
import Bedge from './Bedge';
import Icon from './Icon';

export default function TabIcon({ iconName, visibleBedge, color }) {
  if (visibleBedge) {
    return (
      <View>
        <Bedge fontSize={10}>
          <Icon name={iconName} size={20} color={color} />
        </Bedge>
      </View>
    );
  }
  return (
    <View>
      <Icon name={iconName} size={20} color={color} />
    </View>
  );
}
