import React from 'react';
import { Text } from 'react-native';
import { fonts } from '../../resources/fonts';

const Regular = ({ label, custTextStyle = {}, ...props }) => {
  return (
    <Text style={{
      fontFamily: fonts.regular,
      ...custTextStyle
    }} {...props}>
      {label}
      {props.children}
    </Text>
  );
};

export default React.memo(Regular);
