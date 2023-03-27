import { useState } from 'react';
// SafeArea makes sure the content is in the bondaries of the device
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';


const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        {/* This View will contain and render the NFT List */}
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            // unique identifier for each item in our list
            keyExtractor={(item ) => item.id}
            showsVerticalScrollIndicator={false}
            // always appears on top of the page
            ListHeaderComponent={<HomeHeader/>}
          />
        </View>
        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex:-1,
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary}} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home