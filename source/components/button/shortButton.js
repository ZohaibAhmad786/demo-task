import Bold from '@components/typo-graphy/bold';
import { mvs } from '@config/metrices';
import PALETTE from '@config/palette';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

class ShortButton extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.disabled !== this.props.disabled;
  // }

  render() {
    const { btnStyle, btnLabel, btnLabelStyle, onPress = () => { } ,disbaled=false} = this.props
    return (
      <Pressable disbaled={disbaled} onPress={onPress} style={{ ...styles.BTN_CONTAINER, ...btnStyle }}>
        <Bold label={btnLabel} custTextStyle={btnLabelStyle} />
      </Pressable>
    );
  }
}

export default ShortButton//React.memo(ShortButton);

const styles = StyleSheet.create({
  BTN_CONTAINER: {
    borderWidth: mvs(1),
    borderColor: PALETTE.CF2D39,
    width: '47%',
    height: mvs(48),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
