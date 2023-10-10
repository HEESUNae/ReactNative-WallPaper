import React from 'react';
import { FlatList, View } from 'react-native';
import { IMAGE_LIST } from '../constants';
import Header from '../components/Header/Header';
import PhotoListItem from '../components/PhotoListItem';

export default function ImageListScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="IMAGE LIST" />
        </Header.Group>
      </Header>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <FlatList
          style={{ flex: 1 }}
          data={IMAGE_LIST}
          contentContainerStyle={{ marginTop: 10 }}
          ItemSeparatorComponent={<View style={{ height: 20 }} />}
          renderItem={({ item }) => {
            return <PhotoListItem url={item} />;
          }}
        />
      </View>
    </View>
  );
}
