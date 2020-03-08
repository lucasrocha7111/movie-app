import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { VideoList } from '../../components/videoList'

export default class Movie extends React.Component {

    render() {
        return <View>
            <VideoList />
        </View>
    }
}