import React from 'react';
import { StyleSheet, View } from 'react-native';
const Row = ({ style, children }) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
};
export default Row;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
});