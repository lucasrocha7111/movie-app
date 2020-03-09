import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
import { Util } from '../../utils/util'
import { IMAGE_PATH } from '../../utils/constants'

export default class VideoDetail extends React.Component {

    render() {
        const { data } = this.props.route.params
        const field = Util.getFieldByType(this.props?.route.params?.type)
        return <View style={{flex: 1}}>
            <Image source={{uri: `${IMAGE_PATH}/${data?.backdrop_path}`}} style={[Style.image]} />
            <View style={[{ paddingHorizontal: 20, paddingTop: 20 }]}>
                <Text style={[{ fontSize: 18 }, Style.text]}>Title: {data[field]}</Text>
                <Text style={[{ fontSize: 14 }, Style.text]}>Original title: {data[`original_${field}`]}</Text>
                <Text>{data.overview}</Text>
            </View>
        </View>
    }
}

const Style = StyleSheet.create({
    text: {
        fontWeight: 'bold', 
        marginBottom: 10
    },
    image: {
        width: '100%', 
        height: 200
    }
})