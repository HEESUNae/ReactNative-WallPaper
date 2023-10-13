import React, { useCallback, useState } from 'react';
import { Animated, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RemoteImage from './RemoteImage';
import Button from './Button';

export default function PhotoListItem({ url }) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const [animValue] = useState(new Animated.Value(0));

  const onPressItem = useCallback(() => {
    navigation.navigate('ImageDetail', { url: url });
  }, []);

  const onPressIn = useCallback(() => {
    Animated.timing(animValue, {
      duration: 200,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  const onPressOut = useCallback(() => {
    Animated.timing(animValue, {
      duration: 200,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  const scale = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1.0, 0.95],
  });
  return (
    <Button onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPressItem}>
      <Animated.View style={{ transform: [{ scale: scale }] }}>
        <RemoteImage url={url} width={width - 40} height={width * 1.2} />
      </Animated.View>
    </Button>
  );
}
