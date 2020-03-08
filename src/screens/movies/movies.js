import React from 'react'
import {
    ScrollView,
    View,
    ActivityIndicator
} from 'react-native'
import { VideoList } from '../../components/videoList'
import { VideoSearch } from '../../components/videoSearch'
import { VideoService } from '../../services/videos'

export default class Movie extends React.Component {

    _videoService = new VideoService()
    _type = 'movie'
    _interval = null

    state = {
        genres: [],
        isLoading: true
    }

    render() {
        return <ScrollView>
            <VideoSearch onSearch={this.onSearch} />
            {this.state.isLoading
            ? <View>
                <ActivityIndicator />
            </View>
            : this.state.genres.map((data) => {
                return <VideoList />
            })
            }
        </ScrollView>
    }

    componentDidMount = () => {
        this.getGenres()
    }

    getGenres = async () => {
        const result = await this._videoService.genres(this._type)
        this.setState({
            genres: result.data.genres,
            isLoading: false
        })
    }

    onSearch = (text) => {
        if(this._interval) {
            clearInterval(this._interval)
        }
        this._interval = setInterval(async () => {
            const result = await this._videoService.search(text, this._type)
        }, 500)
    }
}