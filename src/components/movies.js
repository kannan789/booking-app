import avatar from '../images/avatar.jpg';
import darbar from '../images/darbar.jpg';
import padmaavat from '../images/padmaavat.jpg';
import psone from '../images/psone.jpeg';
import vikramvedha from '../images/vikramvedha.jpg';
import {useRef, useState} from 'react';
import Book from '../components/book-view';



function Movies() {

    return (
<div id="movie-list">
        
        <img src={avatar} />
        <img src={darbar} />
        <img src={padmaavat} />
        <img src={psone} />
        <img src={vikramvedha} />
      </div>

);
}

export default Movies;