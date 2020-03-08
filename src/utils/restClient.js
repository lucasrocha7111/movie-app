import axios from 'axios'
import {
    API
} from './constants'

export const RestClient = axios.create({
    baseURL: API
})