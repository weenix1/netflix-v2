import "./App.css";
import MyNavBar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallarie from "./components/Gallarie";
import React from "react";
import MovieDetails from "./components/MovieDetails";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],
  };

  render() {
    return (
      <div className="App">
        <Router>
          <MyNavBar />
          <Route path="/" exact component={Gallarie} />
          <Route
            path="/moviesDetails/:movieId"
            exact
            component={MovieDetails}
          />
        </Router>
      </div>
    );
  }
}

export default App;
