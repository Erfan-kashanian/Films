function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <span className="search-icon">⌕</span>

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search movies and series..."
        aria-label="Search movies"
      />
    </div>
  );
}

export default SearchBar;