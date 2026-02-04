import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '21e85254c4fe49989dc77b1126597fd5'
    }
})