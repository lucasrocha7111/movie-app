import React from 'react'
import {
    View,
    TextInput
} from 'react-native'

export class VideoSearch extends React.Component {

    render() {
        return (
            <View style={[{ paddingHorizontal: 20, marginBottom: 20 }]}>
                <TextInput placeholder={'Pesquisa'} style={[{ borderBottomWidth: 0.4, borderBottomColor: 'gray', paddingBottom: 10 }]} onChangeText={this.props.onSearch} />
            </View>
        )
    }
}