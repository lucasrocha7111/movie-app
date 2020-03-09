import React from 'react'
import { View, SafeAreaView, Image } from 'react-native'
import Movies from '../movies/movies'
import { MyContextProvider } from '../../utils/context'
const LOGO_IMG = require('../../../assets/img/netflix_logo.png')


export default class Home extends React.Component {

    render() {
        return (
            <SafeAreaView style={[{flex: 1}]}>
                <MyContextProvider value={{navigation: this.props.navigation}}>
                    <View>
                        <View style={[{ alignItems: 'center' }]}>
                            <Image source={LOGO_IMG} style={[{ width: 80, height: 60, resizeMode: 'contain' }]} />
                        </View>
                        <Movies />
                    </View>
                </MyContextProvider>
            </SafeAreaView>
        ) 
    }
}