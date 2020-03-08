import { RestClient } from '../utils/restClient'
import { API_KEY } from '../utils/constants'

export class VideoService {

    search = (query, type) => {
        return RestClient.get(`/search/${type}?api_key=${API_KEY}&query=${query}`)
    }

    genres = (type) => {
        return RestClient.get(`/genre/${type}/list?api_key=${API_KEY}`)
    }

    discover = (type) => {
        return RestClient.get(`/discover/${type}?api_key=${API_KEY}`)
    }

    trends = (type) => {
        return RestClient.get(`/trending/${type}/day?api_key=${API_KEY}`)
    }

}