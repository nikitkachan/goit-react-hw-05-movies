import { styled } from 'styled-components';

export const StyledCast = styled.ul`
  display: flex;
  gap: 24px;
  overflow: scroll;
  padding-left: 0;
  margin-bottom: 24px;

  & li {
    display: flex;
    flex-direction: column;
    padding: 10px;
    min-width: 250px;
    border-radius: 5px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }

  & img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;
