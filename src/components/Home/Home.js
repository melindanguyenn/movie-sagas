import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.getMovies();
  } //rendering on page load

  getMovies = () => {
    this.props.dispatch({ type: "GET_MOVIES" });
  }; //getting movies

  goToDetails = event => {
    this.props.dispatch({
      type: "MOVIE_CLICKED",
      payload: event.target.id
    });
    this.props.history.push("/Details");
  }; //getting id of movie that was clicked, bringing user to details page

  render() {
    return (
      <div>
        <ul className="movieList">
          {this.props.reduxState.movies.map(result => (
            <li key={result.id}>
              <button id={result.id} onClick={this.goToDetails}>
                <img
                  id={result.id}
                  height="400px"
                  src={result.poster}
                  alt="movie list"
                />
              </button>
              <h2>{result.title}</h2>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const getStore = reduxState => ({
  reduxState
});
export default connect(getStore)(Home);
