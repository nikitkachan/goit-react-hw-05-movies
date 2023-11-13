import { BsSearch } from 'react-icons/bs';
import { StyledForm } from './Searchbar.styled';
import Notiflix from 'notiflix';

export const SearchBar = ({ onSubmit }) => {
  const handleInputSubmit = e => {
    e.preventDefault();
    const searchWord = e.currentTarget[1].value;
    const value = e.currentTarget.elements.searchKey.value;
    console.log(value);

    if (searchWord.trim() === '') {
      Notiflix.Notify.failure('Please, enter something!', {
        position: 'center-center',
      });
      return;
    }

    onSubmit(searchWord, value);
  };

  return (
    <StyledForm onSubmit={handleInputSubmit} className="form">
      <button type="submit" className="button">
        <BsSearch />
      </button>

      <input
        name="searchKey"
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </StyledForm>
  );
};
