import React from 'react'
import {
    TouchableOpacity,
    Image,
    View,
    Text
} from 'react-native'
import { IMAGE_PATH } from '../utils/constants'
import { Util } from '../utils/util'
import { MyContextConsumer } from '../utils/context'

export class VideoItem extends React.Component {

    static contextType = MyContextConsumer

    render() {
        let contextValue = this.context
        const field = Util.getFieldByType(contextValue?.type)
        return (
            <TouchableOpacity 
                style={[{ marginLeft: 20, paddingBottom: 5 }]}
                onPress={() => {
                    this.props?.onPress ? this.props.onPress() : null
                    contextValue?.navigation?.push('Detail', { data: this.props.data, type: contextValue?.type })
                }}
            >
                <View style={[{ flexDirection: 'row' }]}>
                    <Image source={{uri: `${IMAGE_PATH}/${this.props.data?.poster_path}`}} style={[{ width: 150, height: 210, backgroundColor: 'gray', justifyContent: 'center', borderRadius: 6 }]} />
                    {this.props?.showInfo
                    ? <View style={[{ paddingHorizontal: 20, paddingTop: 10, flex: 1 }]}>
                        <Text style={[{ fontSize: 18, fontWeight: 'bold' }]}>{this.props.data[field]}</Text>
                    </View>
                    : null }
                </View>
            </TouchableOpacity>
        )
    }
}