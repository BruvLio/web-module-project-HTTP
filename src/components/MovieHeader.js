import React from 'react';
import { Link } from 'react-router-dom';

const MovieHeader = ()=> {
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>IMDB Movie Database</h2>
        </div>
        <div className="col-sm-6">
            <Link to="/movie/add" className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
            <Link to="/movies" className="btn btn-primary">View All Movies</Link>
        </div>
        </div>
    </div>);
}

export default MovieHeader;