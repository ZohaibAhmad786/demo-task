import React from 'react';
import fonts from '@config/fonts';
import {Text} from 'react-native';

const Medium = ({label, custTextStyle = {}, ...props}) => {
  return (
    <Text style={{fontFamily: fonts.latoMedium, ...custTextStyle}} {...props}>
      {label}
    </Text>
  );
};

export default Medium
