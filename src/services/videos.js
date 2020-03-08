import { RestClient } from '../utils/restClient'
import { API_KEY } from '../utils/constants'

export class VideoService {

    search = (query, type) => {
        return RestClient.get(`/search/${type}?api_key=${API_KEY}&query=${query}`)
    }

    genres = (type) => {
        return RestClient.get(`/genre/${type}/list?api_key=${API_KEY}`)
    }

}