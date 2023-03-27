import React from 'react';
import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';

import { COLORS, SIZES, FONTS, SHADOWS, assets} from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components';

// as it is just used in here we can create the DetailsHeader component within the Details.js
const DetailsHeader = ({data, navigation}) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image} 
      reziseMode="cover"
      style={{ width: "100%", height:"100%"}}
    />
    {/* left button */}
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={10}
      top={StatusBar.currentHeight + 10}
    />
    {/* right button */}
    <CircleButton
      imgUrl={assets.heart}
      handlePress={() => navigation.goBack()}
      right={10}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

// Details component
const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.5)",
        zIndex: 1,
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      {/* a list of all people who bid on this nft */}
      <FlatList 
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3}}
        // appears on the top
        ListHeaderComponent={() => (
          <React.Fragment>
            {/* passing in the props to the Detailsheader from above! */}
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font}}>
              <DetailsDesc data={data} />

            </View>
          </React.Fragment>
        )}
      />

    </SafeAreaView>
  );
};

export default Details;