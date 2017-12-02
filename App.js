import React, { Component }  from 'react'
import {StyleSheet, Text, View, AppRegistry } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 50,
        backgroundColor: '#00f',
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
                <View style={styles.box}/>
                <View style={styles.box}/>
                <View style={styles.box}/>
                <View style={styles.box}/>
                <View style={styles.box}/>
            </View>
        )
    }
}

export default FlexboxExamples
