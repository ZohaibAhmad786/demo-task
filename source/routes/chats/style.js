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
        padding: mvs(20),
    }
})