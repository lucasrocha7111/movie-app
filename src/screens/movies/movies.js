import React from 'react'
import {
    ScrollView,
    View,
    ActivityIndicator
} from 'react-native'
import { VideoList } from '../../components/videoList'
import { VideoSearch } from '../../components/videoSearch'
import { VideoBanner } from '../../components/videoBanner'
import { VideoService } from '../../services/videos'

export default class Movie extends React.Component {

    _videoService = new VideoService()
    _type = 'movie' //TODO use ContextAPI to send this value
    _interval = null

    state = {
        genres: [],
        trends: [],
        isLoading: true
    }

    render() {
        return <ScrollView>
            <VideoSearch modalAction />
            <VideoBanner data={this.state.trends} />
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
        this.getTrends()
        await this.getGenres()
        await this.getDiscover()
        this.setState({
            isLoading: false
        })
    }

    getTrends = async () => {
        const result = await this._videoService.trends(this._type)
        this.setState({
            trends: result.data.results
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

    
}