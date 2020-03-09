import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import { IMAGE_PATH } from '../../utils/constants'

export default class VideoDetail extends React.Component {

    render() {
        const { data } = this.props.route.params
        return <View style={{flex: 1}}>
            <Image source={{uri: `${IMAGE_PATH}/${data?.backdrop_path}`}} style={[{ width: '100%', height: 200 }]} />
            <View style={[{ paddingHorizontal: 20, paddingTop: 20 }]}>
                <Text style={[{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }]}>Title: {data.title}</Text>
                <Text style={[{ fontSize: 14, fontWeight: 'bold', marginBottom: 10 }]}>Original title: {data.original_title}</Text>
                <Text>Title: {data.overview}</Text>
            </View>
        </View>
    }
}