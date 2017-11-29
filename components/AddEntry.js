import React, {Component} from 'react'
import {View, TouchableNativeFeedback, Text, StyleSheet} from 'react-native'
import {getMetricMetaInfo, timeToString} from '../utils/helpers'
import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciSteppers'
import DateHeader from './DateHeader'

function SubmitBtn({onPress}) {
    return (
        <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>SUBMIT</Text>
            </View>
        </TouchableNativeFeedback>
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#c11',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#811',
        padding: 10,
        marginLeft: 40,
        marginRight: 40
    },
    btnText: {
        color: '#ccc'
    }
})

export default class AddEntry extends Component {

    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0,
    }

    increment = (metric) => {
        const {max, step} = getMetricMetaInfo(metric)

        this.setState((state) => {
            const count = state[metric] + step

            return {
                ...state,
                [metric]: count > max ? max : count,
            }
        })
    }

    decrement = (metric) => {
        this.setState((state) => {
            const count = state[metric] - getMetricMetaInfo(metric).step

            return {
                ...state,
                [metric]: count < 0 ? 0 : count,
            }
        })
    }

    slide = (metric, value) => {
        this.setState(() => ({
            [metric]: value
        }))
    }

    submit = () => {
        const key = timeToString()
        const entry = this.state

        // Update Redux

        this.setState(() => ({run: 0, bike: 0, swim: 0, sleep: 0, eat: 0}))

        // Navigate to home

        // Save to "DB"

        // Clear local notification
    }

    render() {
        const metaInfo = getMetricMetaInfo()

        return (
            <View>
                <DateHeader date={(new Date()).toLocaleDateString()}/>
                {Object.keys(metaInfo).map((key) => {
                    const {getIcon, type, ...rest} = metaInfo[key]
                    const value = this.state[key]

                    return (
                        <View key={key}>
                            {getIcon()}
                            {type === 'slider'
                                ? <UdaciSlider
                                    value={value}
                                    onChange={(value) => this.slide(key, value)}
                                    {...rest}
                                />
                                : <UdaciSteppers
                                    value={value}
                                    onIncrement={() => this.increment(key)}
                                    onDecrement={() => this.decrement(key)}
                                    {...rest}
                                />}
                        </View>
                    )
                })}
                <SubmitBtn onPress={this.submit}/>
            </View>
        )
    }
}