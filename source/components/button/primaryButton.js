import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Chase } from 'react-native-animated-spinkit';
import { mvs } from '../../config/metrices';
import PALETTE from '../../config/palette';
import Bold from '../typo-graphy/bold';
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
      loading = false,
    } = this.props;
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
          </React.Fragment>
        }
      </Pressable>
    );
  }
}

export default PrimaryButton; //React.memo(PrimaryButton);

const styles = StyleSheet.create({
  BTN_CONTAINER: {
    height: mvs(48),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PALETTE.F2F2F2,
    borderRadius: mvs(10)
  },
});
