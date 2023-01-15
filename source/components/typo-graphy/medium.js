import React from 'react';
// import fonts from '@config/fonts';
import { Text } from 'react-native';
import { fonts } from '../../resources/fonts';

const Medium = ({ label, custTextStyle = {}, ...props }) => {
  return (
    <Text style={{
      fontFamily: fonts.medium,
      ...custTextStyle
    }} {...props}>
      {label}
    </Text>
  );
};

export default Medium
