import React from 'react';
import { Dimensions, View } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import Spacer from './Spacer';
import Button from './Button';
import Icon from './Icon';
import Typography from './Typography';

const { width } = Dimensions.get('window');

export default function HeaderWithoutCompound({ leftIcon, rightIcon, title }) {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={{ paddingTop: insets.top }}>
          <View
            style={{ width: width, height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'gray' }}
          >
            <Spacer horizontal space={12} />
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              {leftIcon && (
                <Button onPress={leftIcon.onPress}>
                  <Icon iconName={leftIcon.icoName} size={20} />
                </Button>
              )}
              <Typography size={18}>{title}</Typography>
              {rightIcon && (
                <Button onPress={rightIcon.onPress}>
                  <Icon iconName={rightIcon.icoName} size={20} />
                </Button>
              )}
            </View>
            <Spacer horizontal space={12} />
          </View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
}
