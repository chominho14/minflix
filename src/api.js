import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params :{
        api_key:"6e6a3de56d7e4e0ff784cf0d24daa0dd",
        language : "en-US"
    }
});





export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    Review: (id) => api.get(`movie/${id}/reviews`),
    movieDetail: (id) => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/movie",{
        params:{
            query: encodeURIComponent(term),
        }
    })
    
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    tvReview: (id) => api.get(`tv/${id}/reviews`),
    showDetail: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/tv",{
        params:{
            query: encodeURIComponent(term)
        }
    })
};