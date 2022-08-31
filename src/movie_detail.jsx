import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MovieState } from "./movie_state";

const MovieDetail = () => {
  const url = window.location.pathname;
  console.log(url);
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovies = movies.filter(
      (stateMovies) => stateMovies.url === url
    );
    setMovie(currentMovies[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Detail>
          <Headlines>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headlines>
          <Awards>
            {movie.awards.map((award, i) => (
              <Award
                title={award.title}
                description={award.description}
                key={i}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Detail>
      )}
    </>
  );
};

const Detail = styled.div`
  color: white;
`;

const Headlines = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    color: #fff;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
min-height: 80vh;
display: flex;
margin: 5rem 10rem;
align-items: center;
justify-content: space-around;
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const AwardStyle= styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem;
    
  }
`
export default MovieDetail;
