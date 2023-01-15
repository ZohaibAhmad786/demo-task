import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { mvs } from '../../config/metrices';
import PALETTE from '../../config/palette';
const SearchInput = ({
    onChangeText = (text) => { },
    value,
    style,
    placeholder = 'Search ...',
    containerStyle,
    editable = true
}) => {

    return (
        <>
            <View
                style={[
                    styles.searchContainer,
                    containerStyle,
                ]}>
                <TextInput
                    editable={editable}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={`${PALETTE[707070]}`}
                    onChangeText={onChangeText}
                    style={[styles.searchTextInput, style]}
                />
                <TouchableOpacity
                    style={styles.PasswordIcon}
                    onPress={() => { }}>

                </TouchableOpacity>
            </View>
        </>
    );
};
export default SearchInput;
const styles = StyleSheet.create({
    searchContainer: {
        marginHorizontal: mvs(20),
        borderWidth: mvs(0.7),
        borderColor: PALETTE[707070],
        height: mvs(40),
        borderRadius: mvs(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: mvs(12),
        marginVertical: mvs(20),
        backgroundColor: PALETTE.FFFFFF,
    },
    searchTextInput: {
        color: PALETTE.black,
        textAlignVertical: 'center',
        height: mvs(36),
        fontSize: mvs(14),
        width: mvs(275),
        padding: mvs(0),
    },
});