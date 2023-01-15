import Bold from '@components/typo-graphy/bold';
import React from 'react';
import { Pressable, View } from 'react-native';

import * as common from '@assets/common';
import { mvs } from '@config/metrices';

class TextButton extends React.Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.disabled !== this.props.disabled;
  // }

  render() {

    const {
      btnLabel = '',
      btnLabelStyle = '',
      allowIcon = false,
      iconName = '',
      style = {},
      onPress = () => { },
      disabled = false,
    } = this.props;
    const Icon = allowIcon ? common[iconName] : null;

    return (
      <Pressable hitSlop={{ bottom: 10, left: 10, top: 10, right: 10 }} onPress={onPress} disabled={disabled} style={style}>
        {allowIcon ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon marginRight={mvs(10)} height={mvs(22)} width={mvs(22)} />
            <Bold label={btnLabel} custTextStyle={btnLabelStyle} />
          </View>
        ) : (
          <Bold label={btnLabel} custTextStyle={btnLabelStyle} />
        )}
      </Pressable>
    );
  }
}

export default TextButton

