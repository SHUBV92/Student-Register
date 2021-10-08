import './Search.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form autocomplete='off' action='/students' method='get'>
    <label htmlFor='header-search'>
      <span className='visually-hidden'>Search Students</span>
    </label>
    <input
      value={searchQuery}
      onInput={(e) => setSearchQuery(e.target.value)}
      type='text'
      id='header-search'
      placeholder='Search students'
      name='s'
    />
    <button type='submit'>Search</button>
  </form>
);

export default SearchBar;
