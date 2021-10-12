import './SearchBar.styles.js';
import { useHistory } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useHistory();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
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
