import React from 'react'
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'

export class VideoItem extends React.Component {

    render() {
        return (
            <TouchableOpacity 
                style={[{ marginLeft: 20, paddingBottom: 5 }]}
                onPress={() => {
                    this.props?.onPress ? this.props.onPress() : null  // Syntax sugar
                    // if(this.props.onPress) {
                    //     this.props.onPress()
                    // }
                }}
            >
                <View style={[{ height: 180, width: 150, backgroundColor: 'gray', justifyContent: 'center', borderRadius: 6 }]}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>{this.props.data.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}