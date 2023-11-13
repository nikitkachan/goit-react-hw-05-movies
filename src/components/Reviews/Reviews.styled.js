import { styled } from 'styled-components';

export const ReviewsWrapper = styled.ul`
  padding-left: 0;

  & li {
    padding: 24px;
    margin-bottom: 24px;
    max-width: 700px;
    border-radius: 5px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
`;
