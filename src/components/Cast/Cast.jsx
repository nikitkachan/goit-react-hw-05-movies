import { fetchMovieById } from 'components/Api';
import Loader from 'components/Loader/Loader';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledCast } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setIsLoading(true);
        const result = await fetchMovieById(movieId + '/credits');
        setCast(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostDetails();
  }, [movieId]);

  return (
    <StyledCast>
      {error !== null && <p className="error">{error}</p>}
      {isLoading && <Loader />}
      {cast !== null &&
        cast.cast.map(({ profile_path, character, name }) => (
          <li key={name}>
            <img
              src={`https://image.tmdb.org/t/p/w342${profile_path}`}
              alt={name}
              width="200"
              height="300"
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
    </StyledCast>
  );
};

export default Cast;
