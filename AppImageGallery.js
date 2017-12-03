import React from 'react'
import {View, Image, Text, StyleSheet, ImageEditor, TouchableOpacity} from 'react-native'
import {ImagePicker} from 'expo'


export default class App extends React.Component {
    componentDidMount() {
        console.log('before')
        debugger
        console.log('after')
    }

    state = {
        image: null
    }

    pickImage = () => {
        ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [2, 1]
        }).then((result) => {
            if (result.cancelled) {
                return
            }
            ImageEditor.cropImage(result.uri, {
                    offset: {x: 0, y: 0},
                    size: {width: result.width, height: result.height},
                    displaySize: {width: 200, height: 100},
                    resizeMode: 'contain'
                }, (uri) => this.setState(() => ({image: uri})), () => console.log('Error cropping image')
            )
        })
    }

    render() {
        const {image} = this.state
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.pickImage}>
                    <Text>Open Gallery</Text>
                </TouchableOpacity>
                {image && (<Image style={styles.img} source={{uri: image}}/>)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        backgroundColor: 'black'
    }
})