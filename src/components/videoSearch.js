import React from 'react'
import {
    View,
    TextInput
} from 'react-native'
import { SearchModal } from './searchModal'

export class VideoSearch extends React.Component {

    searchModalRef = null
    inputRef = null

    render() {
        return (
            <View style={[{ paddingHorizontal: 20, marginBottom: 20 }]}>
                <TextInput 
                    ref={(c) => this.inputRef = c}
                    placeholder={'Search'} style={[{ borderBottomWidth: 0.4, borderBottomColor: 'gray', paddingBottom: 10 }]} 
                    onFocus={() => { this.onFocusEvent() }} 
                    onChangeText={(text) => {
                        this.props?.onSearch ? this.props?.onSearch(text) : null
                    }}
                />
                <SearchModal ref={(c) => this.searchModalRef = c} />
            </View>
        )
    }

    onFocusEvent = () => {
        this.props?.modalAction ? this.searchModalRef.changeModalVisibility() : null
    }
}