import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CircleButton, RectButton } from './Button';
import { SubInfo, EthPrice, NFTTitle } from './SubInfo';

import { COLORS, SIZES, SHADOWS, assets } from '../constants';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    // prepared styles in dummy.js as CSS in JS
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: "100%", height: 250 }}>
        <Image
        source={data.image}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: SIZES.font,
          borderTopRightRadius: SIZES.font,
        }} />

        {/* passing the props imgUrl, right and top to the Button component */}
        <CircleButton imgUrl={assets.heart}  />
      </View>

      <SubInfo />

      <View style={{width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small} />
      

        <View style={{
          marginTop:SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            // instead of the URL like in React we have the name of our stack ("Details")
            handlePress={() => navigation.navigate("Details", { data })} />
        </View>
      </View>
    </View>
  )
}

export default NFTCard