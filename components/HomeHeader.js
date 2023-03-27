import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center"
      }}>
        {/* the logo on the top left corner of the screen */}
        <Image
          source={assets.logo}
          reziseMode= "contain"
          style={{ width: 110, height: 30 }}
        />
        <View style={{ width: 45, height: 45}}>
          {/* the little image in the middle with the avatar in it */}
            <Image 
              source={assets.person03}
              reziseMode="contain"
              style={{ width: "100%", height: "100%"}}
            />
            {/* the little badge with the checkmark in it */}
            <Image
            source={assets.badge}
            reziseMode="contain"
            style={{ position:"absolute", width: 15, height:15, bottom:0, right: 0}} />
        </View>
      </View>
      {/* the name underneath the logo */}
      <View style={{ marginVertical: SIZES.font * 1.5 }}>
          <Text style={{ fontSize:SIZES.small, color: COLORS.white}}>
            Hello, <Text style={{ fontWeight: "bold" }}>'Username'</Text>
          </Text>
          <Text style={{ fontFamily:FONTS.bold, fontSize:SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2}}>
            Let's find a masterpiece
          </Text>
        </View>
        {/* the View with a search icon and a textinput field */}
        <View style={{ marginTop: SIZES.font}}>
          <View 
            style={{ width:"100%", 
            borderRadius: SIZES.font, 
            backgroundColor: COLORS.gray, 
            flexDirection: "row", 
            alignItems:"center", 
            paddingHorizontal:SIZES.font, 
            paddingVertical: SIZES.small - 2}}>
            <Image
              source={assets.search}
              reziseMode="contain"
              style={{ width:20, height:20, marginRight: SIZES.base}} 
            />
            <TextInput
            placeholder="Search NFT's"
            style={{ flex: 1}}
            onChangeText={onSearch}
            />
          </View>
        </View>
    </View>
  )
}

export default HomeHeader