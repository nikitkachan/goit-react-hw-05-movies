import { fetchMovieById } from 'components/Api';
import Loader from 'components/Loader/Loader';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { StyledLink, StyledWrapper } from 'pages/HomePage/HomePage.styled';
import { LinksWrapper, MovieDetailsWrapper } from './MovieDetails.styled';

const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setIsLoading(true);
        const result = await fetchMovieById(movieId);
        setMovieDetails(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostDetails();
  }, [movieId]);

  return (
    <StyledWrapper>
      <StyledLink to={backLinkRef.current}>Go back</StyledLink>
      {error !== null && <p className="error">{error}</p>}
      {isLoading && <Loader />}
      {movieDetails !== null && (
        <MovieDetailsWrapper>
          {movieDetails.poster_path !== null && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              width="300"
              height="450"
            />
          )}
          {movieDetails.poster_path === null && (
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/337/799/large_2x/icon-image-not-found-free-vector.jpg"
              alt={movieDetails.title}
              width="300"
              height="450"
            />
          )}
          <div className="movieInfo">
            <h2>
              {movieDetails.title ||
                movieDetails.name ||
                movieDetails.original_name}{' '}
              ( {movieDetails.release_date.slice(0, 4)} )
            </h2>
            <p>User score: {Math.ceil(movieDetails.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            {movieDetails.genres.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </div>
        </MovieDetailsWrapper>
      )}
      <h4>Additional information</h4>
      <LinksWrapper>
        <StyledLink to="reviews">Reviews</StyledLink>
        <StyledLink to="cast">Cast</StyledLink>
      </LinksWrapper>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Routes>
      </Suspense>
    </StyledWrapper>
  );
};

export default MovieDetails;
