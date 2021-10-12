import { useHistory } from 'react-router-dom';
import './SearchBar.styles.js';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`?s=${searchQuery}`);
  };

  return (
    <form
      autoComplete='off'
      action='/students'
      method='get'
      onSubmit={onSubmit}
    >
      <label htmlFor='header-search'>
        <span className='visually-hidden'>Search Students</span>
      </label>
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type='text'
        id='header-search'
        placeholder='Search for a student by name or ID'
        name='s'
      />
      {/* <button type='submit'>Search</button> */}
    </form>
  );
};

export default SearchBar;
