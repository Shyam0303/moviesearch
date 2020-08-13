import React, { Component } from "react";
import './movie.title.css';
import MovieSearch from './movie.search';
import { Link } from "react-router-dom";

export default class MovieTitle extends React.Component {
    constructor(){
        super();
        this.state={
           movielist : null
        }
    }

    handleGetRequest = async () =>{
        const url ="http://www.omdbapi.com/?i=tt3896198&apikey=a1b5f9ec";
        const responce = await fetch(url);
        const data = await responce.json();
        this.setState({ movielist : data })
    }
    componentDidMount(){
        this.handleGetRequest()
    }

    render(){
        return(

           <div className="container" >
               <div className ="col-25" >
               <MovieSearch />
                   <div className ="movie-list-style">
                       {!this.state.movielist ?( <div>loading... </div> ) : (
                           <p><Link to={{  pathname: `/image` }}>
                              <img src={this.state.movielist.Poster} className="movie-title-img"/><br/> </Link>
                              <label><b>Movie :</b> </label>
                              {this.state.movielist.Title}<br/>
                              <label><b>Director :</b> </label>
                              {this.state.movielist.Director}<br/>
                              <label><b>Year :</b> </label>
                              {this.state.movielist.Year}
                           </p>
                       )}
                   </div>
               </div>
           </div>
          
        )
    }
} 