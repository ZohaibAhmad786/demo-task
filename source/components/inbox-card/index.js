import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { mvs } from '../../config/metrices';
import PALETTE from '../../config/palette';
import { UserPng } from '../../resources/assets';
import TouchableRow from '../touchable-row';
import Medium from '../typo-graphy/medium';
const InboxCard = ({
    item,
    onPress = () => { },
    ...Props
}) => {
    return (<TouchableRow onPress={onPress} style={styles.container}>
        <View style={styles.imgContainer}>
            <Image source={UserPng} style={styles.img} />
        </View>
        <Medium label={item?.name} style={styles.name} />
    </TouchableRow>)
};
export default InboxCard;
const styles = StyleSheet.create({
    container: {
        marginBottom: mvs(10),
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: PALETTE.F2F2F2,
        padding: mvs(10),
        borderRadius: mvs(10)
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: mvs(15),
        height: mvs(30),
        width: mvs(30),
        backgroundColor: PALETTE.FFFFFF
    },
    img: {
        height: mvs(20),
        width: mvs(20),
    },
    name: {
        marginLeft: mvs(12)
    }
});