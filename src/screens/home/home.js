import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'

export default class Home extends React.Component {

    render() {
        return (
            <SafeAreaView style={[{flex: 1}]}>
                <View style={{flex: 1}}>
                    <Text style={[{color: 'red', textAlign: 'center'}]}>Movie App</Text>
                </View>
            </SafeAreaView>
        ) 
    }
}