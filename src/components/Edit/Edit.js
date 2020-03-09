import React, { Component } from "react";
import { connect } from "react-redux";

class Edit extends Component {
  state = {
    title: "",
    description: "",
    id: this.props.reduxState.aboutMovie[0].id
  }; //accessing ID through store at selected index

  //function will return user to deatils page on button click as well as save new edits
  goToDetails = event => {
    event.preventDefault();
    if (event.target.value === "save") {
      this.props.dispatch({ type: "EDIT_MOVIE", payload: this.state });
      this.props.history.push("/Details");
    } else {
      this.props.history.push("/Details");
    }
  }; //if button value is 'save', dispatch changes to the store
  //otherwise return to details

  editMovieTitle = event => {
    this.setState({
      title: event.target.value
    });
  };
  editMovieDescription = event => {
    this.setState({
      description: event.target.value
    });
  }; //setting changes to state

  render() {
    return (
      <div>
        <textarea
          value={this.state.title}
          onChange={this.editMovieTitle}
          placeholder="Title"
        ></textarea>
        <br></br>
        <textarea
          value={this.state.description}
          onChange={this.editMovieDescription}
          placeholder="Description"
        ></textarea>
        <br></br>
        <button value="save" onClick={this.goToDetails}>
          Save
        </button>
        <button value="cancel" onClick={this.goToDetails}>
          Cancel
        </button>
      </div>
    );
  }
}
const getStore = reduxState => ({
  reduxState
});
export default connect(getStore)(Edit);
