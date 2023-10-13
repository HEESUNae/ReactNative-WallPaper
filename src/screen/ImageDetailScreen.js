import React, { useCallback, useState } from 'react';
import { ActivityIndicator, View, useWindowDimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Typography from '../components/Typography';
import Header from '../components/Header/Header';
import RemoteImage from '../components/RemoteImage';
import Button from '../components/Button';
import Icon from '../components/Icon';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { useDispatch, useSelector } from 'react-redux';
import { onClickFavorite } from '../redux/actions/favorite';

export default function ImageDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [downloading, setDownloading] = useState(false);
  const dispatch = useDispatch();

  // 스토어에 이미지 저장
  const onPressFavorite = useCallback(() => {
    dispatch(onClickFavorite(route.params.url));
  }, []);

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  // 디바이스 크기
  const { width } = useWindowDimensions();

  // 좋아요 버튼 활성화
  const isFavorite = useSelector((state) => {
    return state.favorite.favoriteList.filter((item) => item === route.params.url).length > 0;
  });

  const onPressDownload = useCallback(async () => {
    setDownloading(true);
    const downloadResumable = FileSystem.createDownloadResumable(
      route.params.url, // 이미지 경로
      `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
    );

    try {
      // 파일다운로드
      const { uri } = await downloadResumable.downloadAsync();

      // 라이브러리 접근권한 확인
      const permissionResult = await MediaLibrary.getPermissionsAsync(true);
      // 권한없음
      if (permissionResult.status === 'denied') {
        setDownloading(false);
        return;
      }

      // 아직 권한을 부여하거나 거부하지않음
      if (permissionResult.status === 'undetermined') {
        const requestResult = await MediaLibrary.requestPermissionsAsync();
        if (requestResult.status === 'denied') {
          setDownloading(false);
          return;
        }
      }

      // asset 생성
      const asset = await MediaLibrary.createAssetAsync(uri);
      // album 생성
      const album = await MediaLibrary.createAlbumAsync('MyFirstAlbum', asset, false);
      console.log('album', album);
    } catch (e) {
      console.error(e);
    }
    setDownloading(false);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon iconName={'arrow-back'} onPress={onPressBack} />
          <Header.Title title="IMAGE DETAIL" />
        </Header.Group>
        <Header.Icon iconName={isFavorite ? 'heart' : 'heart-outline'} onPress={onPressFavorite} />
      </Header>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <RemoteImage url={route.params.url} width={width} height={width * 1.5} />
      </View>
      <Button onPress={onPressDownload}>
        {downloading ? (
          <View style={{ height: 52, flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={{ paddingBottom: 24, backgroundColor: 'black' }}>
            <View style={{ height: 52, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Typography color="white">DOWNLOAD</Typography>
              <Icon name="download" size={24} color="white" />
            </View>
          </View>
        )}
      </Button>
    </View>
  );
}
