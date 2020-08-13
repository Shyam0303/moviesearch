import React, { Component } from 'react';
import './movie.details.css';

export default class MovieDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            MovieDetails : null
        }
    }
    async componentDidMount (){
        const api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=a1b5f9ec";
        const posres  = await fetch(api_url);
        const data = await posres.json();
        this.setState({ MovieDetails : data });
    }
    render(){
        return(
            <div className="container" >
                 <div className ="col-25" >
                     <div className ="movie-details-style">
                         {!this.state.MovieDetails ?( <div>loading </div> ) : (
                             <p className="label-gap">
                                <img src={this.state.MovieDetails.Poster} className="movie-details-img"/><br/>
                                <label><b>Movie:</b></label>
                                 {this.state.MovieDetails.Title}<br/>
                                <label><b>Director:</b></label>
                                 {this.state.MovieDetails.Director}<br/>
                                <label><b>Year:</b></label>
                                 {this.state.MovieDetails.Year}<br/>
                                <label><b>Rated:</b></label>
                                 {this.state.MovieDetails.Rated}<br/>
                                <label><b>Released:</b></label>
                                 {this.state.MovieDetails.Released}<br/>
                                <label><b>Runtime:</b></label>
                                 {this.state.MovieDetails.Runtime}<br/>
                                <label><b>Genre:</b></label>
                                 {this.state.MovieDetails.Genre}<br/>
                                <label><b>Actors:</b></label>
                                 {this.state.MovieDetails.Actors}<br/>
                                <label><b>Language:</b></label>
                                 {this.state.MovieDetails.Language}<br/>
                                <label><b>Country:</b></label>
                                 {this.state.MovieDetails.Country}<br/>
                                <label><b>Awards:</b></label>
                                 {this.state.MovieDetails.Awards}<br/>
                                <label><b>imdbRating:</b></label>
                                 {this.state.MovieDetails.imdbRating}<br/>
                                <label><b>imdbVotes:</b></label>
                                 {this.state.MovieDetails.imdbVotes}<br/>
                                <label><b>Writer:</b></label>
                                 {this.state.MovieDetails.Writer}<br/> 
                                <label><b>Plot:</b></label>
                                 {this.state.MovieDetails.Plot}<br/>
                                <label><b>imdbID:</b></label>
                                 {this.state.MovieDetails.imdbID}<br/>
                                <label><b>Metascore:</b></label>
                                 {this.state.MovieDetails.Metascore}<br/>
                                <label><b>Type:</b></label>
                                 {this.state.MovieDetails.Type}<br/>
                                <label><b>DVD:</b></label>
                                 {this.state.MovieDetails.DVD}<br/>
                                <label><b>BoxOffice:</b></label>
                                 {this.state.MovieDetails.BoxOffice}<br/>
                                <label><b>Production:</b></label>
                                 {this.state.MovieDetails.Production}<br/>
                                <label><b>Website:</b></label>
                                 {this.state.MovieDetails.Website}<br/>
                                <label><b>Response:</b></label>
                                 {this.state.MovieDetails.Response}<br/>

                           </p>
                         )}
                    </div>
               </div>
           </div>
        )
    }
}