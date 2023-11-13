import { fetchMovies } from 'components/Api';
import { useEffect, useState } from 'react';
import { StyledGalleryItem, StyledUl, StyledWrapper } from './HomePage.styled';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import { animateScroll } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        setIsShown(false);

        const result = await fetchMovies(
          `trending/all/day?language=en-US&page=${page}`
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
  }, [page]);

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

  return (
    <StyledWrapper>
      {error !== null && (
        <p className="error-bage">
          Oops, some error occured... Error message: {error}
        </p>
      )}
      <h1>Trending movies</h1>
      <StyledUl>
        {movies.map(movie => (
          <StyledGalleryItem key={movie.id}>
            <Link
              state={{ from: location }}
              key={movie.id}
              to={`/movies/${movie.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="300"
                height="450"
              />
              <h3>{movie.title || movie.name || movie.original_name}</h3>
            </Link>
          </StyledGalleryItem>
        ))}
      </StyledUl>
      <div className="btnWrapper">
        {isLoading && <Loader />}
        {movies !== [] && isShown && (
          <Button onLoadMoreHandler={onLoadMoreHandler} />
        )}
      </div>
    </StyledWrapper>
  );
};

export default HomePage;
