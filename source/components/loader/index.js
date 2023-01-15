import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { mvs } from '../../config/metrices'
import PALETTE from '../../config/palette'

const Loader = ({ ...props }) => {
    return (
        <ActivityIndicator size={'small'} color={PALETTE.black} />
    )
}
export default React.memo(Loader);
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: mvs(20),
        height: mvs(55),
        alignItems: 'center',
        backgroundColor: PALETTE.F2F2F2,
    },
    barImg: {
        height: mvs(30),
        width: mvs(30),
    },
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flex: {
        flex: 1,
    }
});

