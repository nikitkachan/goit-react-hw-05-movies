import { StyledGalleryItem, StyledUl } from 'pages/HomePage/HomePage.styled';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, location }) => {
  return (
    <StyledUl>
      {movies.map(movie => (
        <StyledGalleryItem key={movie.id}>
          <Link
            state={{ from: location }}
            key={movie.id}
            to={`/movies/${movie.id}`}
          >
            {movie.poster_path !== null && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="300"
                height="450"
              />
            )}
            {movie.poster_path === null && (
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/337/799/large_2x/icon-image-not-found-free-vector.jpg"
                alt={movie.title}
                width="300"
                height="450"
              />
            )}
            <h3>{movie.title || movie.name || movie.original_name}</h3>
          </Link>
        </StyledGalleryItem>
      ))}
    </StyledUl>
  );
};

export default MovieList;
