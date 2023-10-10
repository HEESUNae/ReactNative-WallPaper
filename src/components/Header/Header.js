import React, { Children } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import Spacer from '../Spacer';
import HeaderTitle from './HeaderTitle';
import HeaderIcon from './HeaderButton';
import HeaderGroup from './HeaderGroup';
const { width } = Dimensions.get('window');

export default function Header({ children }) {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={{ paddingTop: insets.top }}>
          <View
            style={{
              width: width,
              flexDirection: 'row',
              height: 56,
              borderBlockColor: 'gray',
              borderBottomWidth: 1,
              alignItems: 'center',
            }}
          >
            <Spacer horizontal space={12} />
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>{children}</View>
            <Spacer horizontal space={12} />
          </View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
}

Header.Title = HeaderTitle;
Header.Icon = HeaderIcon;
Header.Group = HeaderGroup;
