import { Component } from "react";
import { Link } from "react-router-dom";

class MyMovies extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=11b186c9&s=" +
          this.props.query
      );
      if (response.ok) {
        let data = await response.json();
        console.log("HERE IS MY DATA", data);

        this.setState({
          movies: data.Search,
        });

        // the comment has been sent succesfully!!
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  componentDidMount = () => {
    console.log("this is componentDidMount!");

    this.fetchMovies();
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("this is componentDidMount!");

    //we should always have a condition to avoid infinite loop
    if (prevProps.query !== this.props.query) {
      this.fetchMovies();
    }
  };

  render() {
    console.log(this.state.movies);
    return (
      <>
        {this.state.movies ? (
          this.state.movies.map((movie) => (
            <div className="col-12 col-sm-6 col-md-3 col-lg-2 px-1">
              <Link to={`/moviesDetails/${movie.imdbID}`}>
                <img src={movie.Poster} class="img-fluid w-100" />
              </Link>
            </div>
          ))
        ) : (
          <h1>LOADING...</h1>
        )}
      </>
    );
  }
}

export default MyMovies;
