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
                return data?.videos && data?.videos.length > 0 ? <VideoList title={data?.name} data={data?.videos} /> : null
            })
            }
        </ScrollView>
    }

    componentDidMount = async () => {
        await this.getGenres()
        await this.getDiscover()
        this.setState({
            isLoading: false
        })
    }

    getGenres = async () => {
        const result = await this._videoService.genres(this._type)
        this.setState({
            genres: result.data.genres,
        })
    }

    getDiscover = async () => {
        const result = await this._videoService.discover(this._type)
        const newGenres = this.state.genres.map((data) => {
            const videos = result.data?.results ? result.data.results.filter((d) => d.genre_ids.includes(data.id)) : []
            data['videos'] = videos
            return data
        })
        this.setState({
            genres: newGenres
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