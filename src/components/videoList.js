import React from 'react'
import {
    View,
    FlatList,
    Text
} from 'react-native'
import { VideoItem } from './videoItem'

export class VideoList extends React.Component {

    render() {
        return (
            <View style={[{ marginBottom: 10 }]}>
                <Text style={[{ fontWeight: 'bold', fontSize: 18, paddingHorizontal: 20, marginBottom: 20 }]}>{this.props?.title}</Text>
                <FlatList 
                    data={this.props?.data}
                    horizontal
                    renderItem={(i, index) => (
                        <View key={index}>
                            <VideoItem data={i.item} title={'Title'} />
                        </View>
                    )}
                />
            </View>
        )
    }
}