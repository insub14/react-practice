import './SearchBar.css';

const SearchBar = ({search, onCreateForm, onSearch, ...rest}) => {
  console.log(rest);
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <input type="text" placeholder="검색" value={search} onChange={(e) => onSearch(e)}/>
          <div className="create-button" onClick={onCreateForm}>새 주소록</div>
      </div>
    </div>
  )
}

export default SearchBar;