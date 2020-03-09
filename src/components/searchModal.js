import React from 'react'
import {
    View,
    Modal,
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { VideoSearch } from './videoSearch'
import { VideoService } from '../services/videos'
import { VideoItem } from '../components/videoItem'
import { MyContextConsumer } from '../utils/context'

export class SearchModal extends React.Component {

    static contextType = MyContextConsumer

    state = {
        modalVisible: false,
        data: []
    }

    _timeout = null
    _videoService = new VideoService()
    _videoSearch = null

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    }}
                >
                    <SafeAreaView style={[{ flex: 1 }]}>
                        <TouchableOpacity onPress={this.changeModalVisibility} style={[{ marginHorizontal: 20, marginBottom: 20 }]}>
                            <Text>X</Text>
                        </TouchableOpacity>
                        <VideoSearch ref={(c) => this._videoSearch = c} onSearch={this.onSearch} />
                        <View>
                            <FlatList 
                                data={this.state.data}
                                keyExtractor={(item, index) => `${index}`}
                                renderItem={(i, index) => {
                                    return <VideoItem key={`${index}`} data={i.item} title={'Pesquisa'} onPress={this.onPressItem} showInfo />
                                }}
                            />
                        </View>
                    </SafeAreaView>
                </Modal>
            </View>
        )
    }

    changeModalVisibility = () => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
        setTimeout(() => {
            if(this.state.modalVisible) {
                this._videoSearch.inputRef?.focus()
            } else {
                this.setState({
                    data: []
                })
            }
        }, 200)
        
    }

    onSearch = (text) => {
        if(this._timeout) {
            clearTimeout(this._timeout)
        }
        this._timeout = setTimeout(async () => {
            const result = await this._videoService.search(text, this.context?.type)
            this.setState({
                data: result.data.results
            })
        }, 500)
    }

    onPressItem = () => {
        this.changeModalVisibility()
    } 
}