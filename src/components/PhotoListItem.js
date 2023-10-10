import React, { useCallback } from 'react';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RemoteImage from './RemoteImage';
import Button from './Button';

export default function PhotoListItem({ url }) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const onPressItem = useCallback(() => {
    navigation.navigate('ImageDetail', { url: url });
  }, []);

  return (
    <Button onPress={onPressItem}>
      <RemoteImage url={url} width={width - 40} height={width * 1.2} />
    </Button>
  );
}
