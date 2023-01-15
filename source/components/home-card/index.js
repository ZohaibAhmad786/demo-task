import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { mvs } from '../../config/metrices';
import PALETTE from '../../config/palette';
import { UserPng } from '../../resources/assets';
import Bold from '../typo-graphy/bold';
import Medium from '../typo-graphy/medium';
import Regular from '../typo-graphy/regular';
const HomeCard = ({
    item,
    ...props
}) => {
    return (<TouchableOpacity onPress={() => props?.navigation?.navigate('studentDetails', { user: item })} style={styles.container}>
        <Image source={UserPng} style={styles.img} />
        <Bold label={item?.name} />
        <Regular label={item?.id} />
        <Medium label={item?.grade} />
    </TouchableOpacity>)
};
export default HomeCard;
const styles = StyleSheet.create({
    container: {
        width: '47%',
        paddingHorizontal: mvs(20),
        paddingTop: mvs(30),
        paddingBottom: mvs(15),
        borderWidth: 0.7,
        borderColor: PALETTE[707070],
        borderRadius: mvs(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: mvs(15),

    },
    img: {
        height: mvs(40),
        width: mvs(40),
        marginBottom: mvs(15)
    }
});