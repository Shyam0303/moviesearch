import React from "react"

const MovieSearch = (props) =>{

    return (
       <div>
        <form onSubmit={props.handleGetRequest}>
            <input type="text" placeholder="serach here.." />
            <button>Search</button>
        </form>
       </div>
    )
}
export default MovieSearch;