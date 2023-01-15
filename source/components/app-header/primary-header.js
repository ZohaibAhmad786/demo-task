import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { mvs } from '../../config/metrices'
import PALETTE from '../../config/palette'
import { DrawerBar } from '../../resources/assets'
import Row from '../row'
import Bold from '../typo-graphy/bold'
import Medium from '../typo-graphy/medium'

const PrimaryHeader = ({ back = false, title = 'Home', ...props }) => {
    return (
        <Row style={styles.container}>
            <TouchableOpacity
                style={styles.flex}
                onPress={() => back ? props?.navigation?.goBack() : props?.navigation?.toggleDrawer()}
            >
                {back ?
                    <Medium label={'<-'} style={styles.back} /> :
                    <Image
                        source={back ? DrawerBar : DrawerBar}
                        style={styles.barImg}
                    />}
            </TouchableOpacity>
            <View style={styles.title} >
                <Bold label={title} style={styles.back} />
            </View>
            <View style={styles.flex} />
        </Row>
    )
}
export default React.memo(PrimaryHeader);
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
    },
    back: { fontSize: mvs(20) }
});

