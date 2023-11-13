import { fetchMovieById } from 'components/Api';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsWrapper } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setIsLoading(true);
        const result = await fetchMovieById(movieId + '/reviews');
        setReviews(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostDetails();
  }, [movieId]);

  return (
    <ReviewsWrapper>
      {error !== null && <p className="error">{error}</p>}
      {isLoading && <Loader />}
      {reviews !== null &&
        reviews.results.map(({ author, content, id }) => (
          <li key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </li>
        ))}
    </ReviewsWrapper>
  );
};

export default Reviews;
