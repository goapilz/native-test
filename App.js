import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import AddEntry from './components/AddEntry'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {Dimensions} from 'react-native';
import History from './components/History'

export default class App extends React.Component {
    componentDidMount() {
        console.log('before')
        debugger
        console.log('after')
    }

    render() {
        const {width, height} = Dimensions.get('window');
        return (
            <Provider store={createStore(reducer)}>
                <View style={{flex: 1}}>
                    <Text>{width}*{height}</Text>
                    <History/>
                </View>
            </Provider>
        )
    }
}