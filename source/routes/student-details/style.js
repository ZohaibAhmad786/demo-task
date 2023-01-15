import { StyleSheet } from 'react-native'
import { mvs } from '../../config/metrices'
import PALETTE from '../../config/palette'


export const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: PALETTE.FFFFFF
    },
    body: {
        flex: 1,
        paddingHorizontal: mvs(20),
        paddingVertical: mvs(50),
    },
    contentContainerStyle: {
        flexGrow: 1,
        padding: mvs(20),
    },
    columnWrapperStyle: {
        justifyContent: 'space-between'
    },
    imgContainer: {
        backgroundColor: PALETTE.F2F2F2,
        height: mvs(130),
        alignSelf: 'center',
        width: mvs(130),
        borderRadius: mvs(130 / 2),
        justifyContent: 'center',
        alignItems: 'center',
    },
    grade: {
        marginTop: mvs(20),
        marginHorizontal: mvs(15)
    },
    row: {
        alignItems: 'center',
        marginTop: mvs(20),
        width: mvs(250),
    },
    btn: { alignSelf: 'center', paddingHorizontal: mvs(50), marginTop: mvs(170) }

})