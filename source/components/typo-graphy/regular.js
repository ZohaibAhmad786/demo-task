import React from 'react';
import fonts from '@config/fonts';
import {Text} from 'react-native';

const Regular = ({label, custTextStyle = {}, ...props}) => {
  return (
    <Text style={{fontFamily: fonts.latoRegular, ...custTextStyle}} {...props}>
      {label}
      {props.children}
    </Text>
  );
};

export default React.memo(Regular);
