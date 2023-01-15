import React from 'react';
import fonts from '@config/fonts';
import {Text} from 'react-native';

const Bold = ({label, custTextStyle = {}, ...props}) => {
  return (
    <Text style={{fontFamily: fonts.latoBold, ...custTextStyle}} {...props}>
      {label}
      {props.children}
    </Text>
  );
};

export default React.memo(Bold);
