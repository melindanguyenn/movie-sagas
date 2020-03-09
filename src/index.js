import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("GET_MOVIES", fetchMovies);
  yield takeEvery("MOVIE_CLICKED", movieDetails);
  yield takeEvery("EDIT_MOVIE", editMovie);
}

function* fetchMovies() {
  const movies = yield axios.get("/api/home");
  yield put({
    type: "SET_MOVIES",
    payload: movies.data
  });
} //getting movies from DB and sending them to movies reducer

//getting information on this specific movie
function* movieDetails(action) {
  const selectedMovie = yield axios.get(`/api/details/${action.payload}`);
  yield put({
    type: "SET_DETAILS",
    payload: selectedMovie.data
  });
}

//PUT route to edit movie title and desription
function* editMovie(action) {
  const makeEdits = yield axios.put(`/api/details/`, action.payload);
  yield put({
    type: "GET_MOVIES",
    payload: makeEdits.data
  });
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

//stores title, desription, and genres of movie
const aboutMovie = (state = [], action) => {
  switch (action.type) {
    case "SET_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    aboutMovie
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
