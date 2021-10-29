import { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

class MyMovies extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://localhost:3002/media"
        /*    "http://localhost:3002/media/&s=" + this.props.query */
      );
      if (response.ok) {
        let data = await response.json();
        console.log("HERE IS MY DATA", data);

        this.setState({
          movies: data,
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
        <Container fluid>
          <Row>
            {this.state.movies ? (
              this.state.movies.map((movie) => (
                <Col xs={6} md={4} lg={2}>
                  <Link to={`/moviesDetails/${movie.imdbID}`}>
                    <img src={movie.Poster} class="img-fluid w-100" />
                  </Link>
                </Col>
              ))
            ) : (
              <h1>LOADING...</h1>
            )}
          </Row>
        </Container>
      </>
    );
  }
}

export default MyMovies;
