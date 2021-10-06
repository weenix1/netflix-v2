import { useEffect, useState } from "react";
import MyMovies from "./MyMovies";
import { Container, Row, Col } from "react-bootstrap";

const MovieDetails = ({ match }) => {
  const [movieItem, setMovieItem] = useState(null);

  useEffect(() => {
    let retrievedIdFromURL = match.params.movieId;
    fetchMovies(retrievedIdFromURL);
  }, []);

  const fetchMovies = async (retrievedIdFromURL) => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=11b186c9&i=" + retrievedIdFromURL
      );
      if (response.ok) {
        let data = await response.json();
        console.log("HERE IS MY DATA", data);

        setMovieItem(data);
        // the comment has been sent succesfully!!
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="mt-5 text-white">
      {movieItem && (
        <Container>
          <Row>
            <Col>
              <img className="img-fluid" src={movieItem.Poster} />
              <div className="card-body">
                <div className="card-title">{movieItem.Title}</div>
                <div className="card-text">{movieItem.Plot}</div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default MovieDetails;
