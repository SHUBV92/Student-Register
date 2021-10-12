const InfoBar = ({ filteredStudents }) => {
  const handleSort = () => {
    if (sortBy === '(A-Z)') {
      setSortBy('(Z-A)');
      filteredStudents.sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    }
    if (sortBy === '(Z-A)') {
      setSortBy('(A-Z)');
      filteredStudents.sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA > textB ? -1 : textA < textB ? 1 : 0;
      });
    }
  };
  return (
    <InfoBar>
      <p>
        <strong>{filteredStudents.length} Students found</strong>
      </p>
      <div>
        <ul>
          <li>
            <button onClick={() => setShowRegister(true)}>
              Add a new Student
            </button>
          </li>
        </ul>
      </div>
      <button className='sortBy' onClick={handleSort}>
        Sort by: Name {sortBy}
      </button>
    </InfoBar>
  );
};

export default InfoBar;
