import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import React, { useEffect } from 'react';

const FocusedStatusBar = (props) => {
    
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar animated={true}  {...props} /> : null;


  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}

export default FocusedStatusBar