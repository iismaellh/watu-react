import React, { Component } from 'react';
import axios from 'axios';

import Poster from '../Poster/Poster';

export default class Movies extends Component {
    state = {
        movies: [],
        loading: true,
    }

    getMovies = (url) => {
        axios.get(url)
            .then(res => {
                this.setState({ movies: res.data.results, loading: false });
            })
            .catch(err => {
                return false;
            });
    }

    componentDidMount() {
        const discover = 
        'https://api.themoviedb.org/3/discover/movie?' + 
        'api_key=f9cf4ece2f9aeccbe524aaa92a1515ae' + 
        '&language=en-US' + 
        '&sort_by=popularity.desc' + 
        '&include_adult=false' + 
        '&include_video=false' + 
        '&page=1';

        this.getMovies(discover);
    }

    render() {
        let posters = null;

        if (this.state.loading) {
            posters = <div>Loading...</div>
        } else {
            posters = this.state.movies.map(movie => {
                return <Poster key={movie.id} data={movie} />
            });
        }

        return (
            <div>
                {posters}
            </div>
        )
    }
}
