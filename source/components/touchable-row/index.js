import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
const TouchableRow = ({ onPress = () => { }, style, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            {children}
        </TouchableOpacity>
    );
};
export default TouchableRow;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
});