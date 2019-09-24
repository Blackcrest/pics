import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9d548da914b7dc8a658599469121c2546cf42853cdf8ebf81797adee6812275e'
    }
});