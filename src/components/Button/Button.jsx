import { StyledButton } from './Button.styled';

const Button = ({ onLoadMoreHandler }) => {
  return (
    <StyledButton onClick={() => onLoadMoreHandler()}>Load More</StyledButton>
  );
};

export default Button;
