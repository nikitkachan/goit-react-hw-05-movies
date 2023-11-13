import { fetchMovies } from 'components/Api';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import { SearchBar } from 'components/Searchbar/Searchbar';
import {
  StyledGalleryItem,
  StyledUl,
  StyledWrapper,
} from 'pages/HomePage/HomePage.styled';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const location = useLocation();

  const queryValue = searchParams.get('query');

  const onSubmit = (searchQuery, value) => {
    setPage(1);
    setMovies([]);
    setSearchParams({ query: value });
  };

  const scrollOnMoreButton = () => {
    animateScroll.scrollToBottom({
      duration: 1000,
      delay: 10,
      smooth: 'linear',
    });
  };

  const onLoadMoreHandler = () => {
    setPage(page => page + 1);
    scrollOnMoreButton();
  };

  useEffect(() => {
    if (!queryValue) {
      return;
    }
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        setIsShown(false);

        const result = await fetchMovies(
          `search/movie?query=${queryValue}&include_adult=true&language=en-US&page=${page}`
        );

        if (page > 1) {
          setMovies(prev => [...prev, ...result.results]);
          setIsShown(true);
        } else {
          setMovies([...result.results]);
          setIsShown(true);
        }

        if (result.results.length <= 19) {
          setIsShown(false);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, [page, queryValue]);

  return (
    <StyledWrapper>
      <SearchBar onSubmit={onSubmit} />
      {queryValue !== null && <h1>Results for "{queryValue}"</h1>}
      {error !== null && (
        <p className="error-bage">
          Oops, some error occured... Error message: {error}
        </p>
      )}
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
      {isLoading && <Loader />}
      {movies !== [] && isShown && (
        <Button onLoadMoreHandler={onLoadMoreHandler} />
      )}
    </StyledWrapper>
  );
};

export default Movies;
