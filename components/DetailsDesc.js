import { View, Text } from 'react-native';
import React from 'react';

import { useState } from 'react';

import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, SHADOWS, FONTS } from '../constants';
// details description
const DetailsDesc = ({ data }) => {

const [text, setText] = useState(data.description.slice(0, 100));
const [readMore, setReadMore] = useState(false)

  return (
    /* Das Rendern von Elementen innerhalb von Fragmenten (<>) ist eine gängige Praxis in React, 
    um mehrere Elemente zu gruppieren, ohne dass eine zusätzliche HTML-Struktur erstellt wird */ 
    <> 
      <View style={{
        width:"100%", 
        flexDirection:"row", 
        justifyContent:"space-between", 
        alignItems:"center" }}>
        <NFTTitle 
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5}}>
        <Text style={{ 
          fontSize: SIZES.font, 
          fontFamily: FONTS.semiBold, 
          colors:COLORS.primary}}
        >
            Description
        </Text>
        <View style={{ marginTop:SIZES.base}}>
          <Text style={{ 
          fontSize: SIZES.small, 
          fontFamily: FONTS.regular, 
          colors: COLORS.secondary,
          lineHeight: SIZES.large
        }}>
          {text}

          {!readMore && "..."}

          {/* clickable "read more" and "show less" logic here */}
          <Text style={{
            fontSize: SIZES.small, 
            fontFamily: FONTS.semiBold, 
            colors: COLORS.primary
          }}
            // this turns it into a "button"
            onPress= {() => {
              if(!readMore) {
                setText(data.description)
                setReadMore(true)
              } else {
                // shortens the description back into 100 characters
                setText(data.description.slice(0, 100))
                setReadMore(false)
              }
            }}>
              {/* if the readMore state is set to true then show "Show less" otherwise show "Read More" */}
            {readMore ? " Show less" : " Read more"}
          </Text>

        </Text>
        </View>
      </View>
    </>
  )
}

export default DetailsDesc