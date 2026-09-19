function FilterPanel({
  countries,
  years,
  genres,
  types,
  filters,
  onChange,
}) {
  return (
    <div className="filter-panel">

      <select
        value={filters.country}
        onChange={(event) =>
          onChange("country", event.target.value)
        }
      >
        <option value="">
          All Countries
        </option>

        {countries.map((country) => (
          <option
            key={country}
            value={country}
          >
            {country}
          </option>
        ))}
      </select>

      <select
        value={filters.year}
        onChange={(event) =>
          onChange("year", event.target.value)
        }
      >
        <option value="">
          All Years
        </option>

        {years.map((year) => (
          <option
            key={year}
            value={year}
          >
            {year}
          </option>
        ))}
      </select>

      <select
        value={filters.genre}
        onChange={(event) =>
          onChange("genre", event.target.value)
        }
      >
        <option value="">
          All Genres
        </option>

        {genres.map((genre) => (
          <option
            key={genre}
            value={genre}
          >
            {genre}
          </option>
        ))}
      </select>

      <select
        value={filters.type}
        onChange={(event) =>
          onChange("type", event.target.value)
        }
      >
        <option value="">
          All Types
        </option>

        {types.map((type) => (
          <option
            key={type}
            value={type}
          >
            {type}
          </option>
        ))}
      </select>

    </div>
  );
}

export default FilterPanel;