import React from 'react'
import {
    TouchableOpacity,
    Image
} from 'react-native'
import { IMAGE_PATH } from '../utils/constants'

export class VideoItem extends React.Component {

    render() {
        return (
            <TouchableOpacity 
                style={[{ marginLeft: 20, paddingBottom: 5 }]}
                onPress={() => {
                    this.props?.onPress ? this.props.onPress() : null
                }}
            >
                <Image source={{uri: `${IMAGE_PATH}/${this.props.data?.poster_path}`}} style={[{ width: 150, height: 210, backgroundColor: 'gray', justifyContent: 'center', borderRadius: 6 }]} />
            </TouchableOpacity>
        )
    }
}