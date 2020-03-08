import React from 'react'
import {
    View,
    FlatList,
    Text
} from 'react-native'
import { VideoItem } from './videoItem'

const DATA = [{title: 'movie 1'}, {title: 'movie 2'}, {title: 'movie 3'}, {title: 'movie 1'}, {title: 'movie 2'}, {title: 'movie 3'}]

export class VideoList extends React.Component {

    render() {
        return (
            <View style={[{ marginBottom: 10 }]}>
                <Text style={[{ fontWeight: 'bold', fontSize: 18, paddingHorizontal: 20, marginBottom: 20 }]}>{this.props?.title}</Text>
                <FlatList 
                    data={this.props?.data}
                    horizontal
                    renderItem={(i) => (
                        <View>
                            <VideoItem data={i.item} title={'Title'} />
                        </View>
                    )}
                />
            </View>
        )
    }
}