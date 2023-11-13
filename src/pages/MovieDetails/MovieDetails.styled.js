import { styled } from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  padding-top: 12px;
  display: flex;
  gap: 24px;

  & img {
    border-radius: 5px;
  }

  & span {
    margin-right: 24px;
    margin-top: 24px;
    display: inline-block;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
