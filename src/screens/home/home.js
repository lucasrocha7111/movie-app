import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import Movies from '../movies/movies'

export default class Home extends React.Component {

    render() {
        return (
            <SafeAreaView style={[{flex: 1}]}>
                <View>
                    <Text style={[{color: 'red', textAlign: 'center'}]}>Movie App</Text>
                    <Movies />
                </View>
            </SafeAreaView>
        ) 
    }
}