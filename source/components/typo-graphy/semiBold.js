import React from 'react';
import fonts from '@config/fonts';
import {Text} from 'react-native';

const SemiBold = ({label, custTextStyle = {}, ...props}) => {
  return (
    <Text style={{fontFamily: fonts.latoSemiBold, ...custTextStyle}} {...props}>
      {label}
    </Text>
  );
};

export default React.memo(SemiBold);
