import { StyleSheet } from 'react-native'
import { mvs } from '../../config/metrices'
import PALETTE from '../../config/palette'


export const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: PALETTE.FFFFFF
    },
    body: {
        flex: 1,
    },
    contentContainerStyle: {
        flex: 1,
        paddingVertical: mvs(20),
    },
    toolbarContainer: {
        backgroundColor: PALETTE.FFFFFF,
        alignItems: 'center',
        height: mvs(45),
        borderWidth: 0.7,
        borderColor: PALETTE[707070],
        borderRadius: mvs(10),
        marginHorizontal: mvs(10),
        marginVertical: mvs(10),
    },
    messageContainer: {
        width: '70%',
        backgroundColor: PALETTE.F2F2F2,
        borderRadius: mvs(10),
        minHeight: mvs(60),
        marginBottom: mvs(10),
        padding: mvs(10),
    },
    avatarContainer: {
        height: mvs(30),
        borderRadius: mvs(15),
        width: mvs(30),
        overflow: 'hidden',
        backgroundColor: PALETTE[707070],
    },
    img: { height: '100%', width: '100%' }
})