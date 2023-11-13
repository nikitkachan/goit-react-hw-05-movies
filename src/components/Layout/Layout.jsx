import { StyledLink } from 'pages/HomePage/HomePage.styled';
import { StyledHeader } from './Layout.styled';

const Layout = ({ children, onSubmit }) => {
  return (
    <div>
      <StyledHeader>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledHeader>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
