import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 32px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  & li {
    overflow: hidden;
  }
`;

export const StyledGalleryItem = styled.li`
  border-radius: 5px;

  & img {
    width: 100%;
    height: 90%;
    border-radius: 5px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & img:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const StyledLink = styled(NavLink)`
  min-width: 150px;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: black;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: orange;
  }
  &.active {
    color: black;
    background-color: orange;
  }
`;

export const StyledWrapper = styled.div`
  padding: 12px 24px;

  & h1 {
    margin-bottom: 12px;
  }
  & h3 {
    margin-top: 12px;
  }
  .btnWrapper {
    display: flex;
    justify-content: center;
    margin: 24px 0;
  }
`;
