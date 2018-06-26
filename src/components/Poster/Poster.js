import React, { Component } from 'react';

import Masonry from 'masonry-layout';

import './Poster.css'

export default class Poster extends Component {
  state = {
    loading: true
  }

  constructor(props) {
    super(props);  
  }

  setMasonry(elem) {
    const grid = new Masonry( elem, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      horizontalOrder: true,
      transitionDuration: '0.8s',
      gutter: 10,
      stagger: 30
    });
  }

  componentDidMount() {
   // this.setMasonry('.grid');
  }

  render() {    
    console.log(this.props.data);
    let { vote, adult, title, poster_path, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity,
    release_date, video, vote_average, vote_count } = this.props.data;
    
    poster_path = 'https://image.tmdb.org/t/p/w500' + poster_path;
    backdrop_path = 'https://image.tmdb.org/t/p/original' + backdrop_path;

    return (
      <div className="grid-item grid-sizer">
        <div className="grid-inner">
          <h2>{title}</h2>
          <img src={poster_path} />
        </div>
      </div>
      )
  }
}
