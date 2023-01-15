import * as Common from '@assets/common';
import { mvs } from '@config/metrices';
import React from 'react';
import { Pressable } from 'react-native';

export const IconButton = (props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.disabled !== this.props.disabled;
  // }

  const {
    iconName = '',
    onPress = () => { },
    style = {},
    disabled = false,
    height = mvs(22),
    width = mvs(22),

  } = props;
  const Icon = Common[iconName];
  return (
    <Pressable hitSlop={{
      bottom: 20,
      left: 20,
      right: 20,
      top: 20
    }} disabled={disabled} onPress={onPress} style={{ ...style }}>
      <Icon height={height} width={width} />
    </Pressable>
  );

}

export default IconButton;
