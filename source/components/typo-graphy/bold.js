import React from 'react';
import { Text } from 'react-native';
import { fonts } from '../../resources/fonts';

const Bold = ({ label, custTextStyle = {}, ...props }) => {
  return (
    <Text style={{
      fontFamily: fonts.bold,
      ...custTextStyle
    }} {...props}>
      {label}
      {props.children}
    </Text>
  );
};

export default React.memo(Bold);
