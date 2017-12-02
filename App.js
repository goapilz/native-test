import React, { Component }  from 'react'
import {StyleSheet, Text, View, AppRegistry } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        backgroundColor: '#00f',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        height: 50,
        width: 50,
        backgroundColor: '#e76e63',
        margin: 10,
    }
})

class FlexboxExamples extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, {flex: 1}]}/>
                <View style={[styles.box, {flex: 2, alignSelf: 'flex-end'}]}/>
                <View style={[styles.box, {flex: 1}]}/>
            </View>
        )
    }
}

export default FlexboxExamples
