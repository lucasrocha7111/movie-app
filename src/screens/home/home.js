import React from 'react'
import { View, SafeAreaView, Text, Image } from 'react-native'
import Movies from '../movies/movies'

const LOGO_IMG = require('../../../assets/img/netflix_logo.png')

export default class Home extends React.Component {

    render() {
        return (
            <SafeAreaView style={[{flex: 1}]}>
                <View>
                    <View style={[{ alignItems: 'center' }]}>
                        <Image source={LOGO_IMG} style={[{ width: 80, height: 60, resizeMode: 'contain' }]} />
                    </View>
                    {/* <Text style={[{color: 'red', textAlign: 'center'}]}>Movie App</Text> */}
                    <Movies />
                </View>
            </SafeAreaView>
        ) 
    }
}