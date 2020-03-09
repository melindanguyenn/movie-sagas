import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  //function will send user to edits page on button click
  goToEdit = event => {
    event.preventDefault();
    this.props.history.push("/Edit");
  };

  // sends user back to list of movies
  goToHome = event => {
    event.preventDefault();
    this.props.history.push("/");
  };
  render() {
    return (
      //render title, description, and genre from store
      <div>
        <button onClick={this.goToHome}>Back To List</button>
        <button onClick={this.goToEdit}>Edit</button>
        <ul className="movieGenre">
          {this.props.reduxState.aboutMovie.map((result, i) => (
            <li key={i}>
              <h2>{result.title}</h2>
              <p>{result.description}</p>
              <p>{result.name}</p>
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
export default connect(getStore)(Details);
