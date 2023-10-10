import React from 'react';
import Button from '../Button';
import Icon from '../Icon';

export default function HeaderIcon({ onPress, iconName }) {
  return (
    <Button onPress={onPress}>
      <Icon name={iconName} size={28} />
    </Button>
  );
}
