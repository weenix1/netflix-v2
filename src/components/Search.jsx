import { Component } from "react";

class Search extends Component {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    console.log("this is componentDidMount!");

    this.searchMovie();
  };
  searchMovie = async () => {
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
  render() {
    return (
      <>
        {this.state.movies.map((movie) => (
          <div className="col-12 col-sm-6 col-md-3 col-lg-2 px-1">
            <img src={movie.Poster} class="img-fluid w-100" />
          </div>
        ))}
      </>
    );
  }
}

export default Search;
