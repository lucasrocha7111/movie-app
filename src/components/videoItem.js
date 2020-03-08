import React from 'react'
import {
    TouchableOpacity,
    Image,
    View,
    Text
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
                <View style={[{ flexDirection: 'row' }]}>
                    <Image source={{uri: `${IMAGE_PATH}/${this.props.data?.poster_path}`}} style={[{ width: 150, height: 210, backgroundColor: 'gray', justifyContent: 'center', borderRadius: 6 }]} />
                    {this.props?.showInfo
                    ? <View style={[{ paddingLeft: 20, paddingTop: 10 }]}>
                        <Text style={[{ fontSize: 18, fontWeight: 'bold' }]}>{this.props.data?.title}</Text>
                        <Text style={[{ fontWeight: '200' }]}>Adulto: {this.props.data?.adult ? 'Sim' : 'Não' }</Text>
                    </View>
                    : null }
                </View>
            </TouchableOpacity>
        )
    }
}