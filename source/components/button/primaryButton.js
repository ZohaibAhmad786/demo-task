import * as common from '@assets/common';
import Bold from '@components/typo-graphy/bold';
import { mvs } from '@config/metrices';
import PALETTE from '@config/palette';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Chase } from 'react-native-animated-spinkit';
class PrimaryButton extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.disabled !== this.props.disabled;
  // }

  render() {
    const {
      btnStyle,
      btnLabel,
      btnLabelStyle,
      onPress = () => { },
      disabled = false,
      allowIcon = false,
      iconName,
      loading = false,
      iconStyle = {},
    } = this.props;
    const Icon = allowIcon ? common[iconName] : null;
    // btnLabelStyle={{ color: btnDisable ? PALETTE['#AFAFAF'] : PALETTE.white }}
    // btnStyle={{ backgroundColor: btnDisable ? PALETTE['#F6F6F6'] : PALETTE.CF2D39, borderColor: btnDisable ? PALETTE['#F6F6F6'] : PALETTE.CF2D39 }}
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={{ ...styles.BTN_CONTAINER, ...btnStyle }}>
        {loading ?
          <Chase size={mvs(20)} color={PALETTE.white} /> :
          <React.Fragment>
            <Bold label={btnLabel} custTextStyle={btnLabelStyle} />
            {allowIcon && (
              <View style={iconStyle}>
                <Icon height={mvs(22)} width={mvs(22)} fill={PALETTE.white} />
              </View>
            )}
          </React.Fragment>
        }
      </Pressable>
    );
  }
}

export default PrimaryButton; //React.memo(PrimaryButton);

const styles = StyleSheet.create({
  BTN_CONTAINER: {
    borderWidth: mvs(1),
    borderColor: PALETTE.CF2D39,
    height: mvs(48),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
