import React from 'react';
import { FlatList, View } from 'react-native';
import Typography from '../components/Typography';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import PhotoListItem from '../components/PhotoListItem';

export default function FavoriteImageListScreen() {
  const imageList = useSelector((state) => state.favorite.favoriteList);
  console.log('imageList', imageList);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="FAVORITE"></Header.Title>
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={imageList}
        renderItem={({ item }) => {
          return <PhotoListItem url={item} />;
        }}
      />
    </View>
  );
}
