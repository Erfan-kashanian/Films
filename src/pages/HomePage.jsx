import { useMemo, useState } from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import MovieSection from "../components/MovieSection";

import movies from "../data/movies";

function HomePage() {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    country: "",
    year: "",
    genre: "",
    type: "",
  });

  const countries = useMemo(() => {
    return [
      ...new Set(
        movies.flatMap((movie) => movie.country)
      ),
    ];
  }, []);

  const years = useMemo(() => {
    return [
      ...new Set(
        movies.map((movie) => movie.year)
      ),
    ].sort((a, b) => b - a);
  }, []);

  const genres = useMemo(() => {
    return [
      ...new Set(
        movies.flatMap((movie) => movie.genre)
      ),
    ];
  }, []);

  const types = [
    "movie",
    "series",
    "documentary",
    "short-film",
  ];

  const handleFilterChange = (
    name,
    value
  ) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [name]: value,
    }));
  };

  const filteredMovies = useMemo(() => {
    const normalizedSearch =
      search.trim().toLowerCase();

    return movies.filter((movie) => {

      const matchesSearch =
        !normalizedSearch ||
        movie.title
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesCountry =
        !filters.country ||
        movie.country.includes(
          filters.country
        );

      const matchesYear =
        !filters.year ||
        movie.year === Number(filters.year);

      const matchesGenre =
        !filters.genre ||
        movie.genre.includes(
          filters.genre
        );

      const matchesType =
        !filters.type ||
        movie.type === filters.type;

      return (
        matchesSearch &&
        matchesCountry &&
        matchesYear &&
        matchesGenre &&
        matchesType
      );
    });
  }, [search, filters]);

  const newMovies =
    filteredMovies.filter(
      (movie) =>
        movie.type === "movie"
    );

  const newSeries =
    filteredMovies.filter(
      (movie) =>
        movie.type === "series"
    );

  const featuredMovie = movies[0];

  return (
    <>
      {/* Only one Header */}
      <Header />

      {/* Hero */}
      <HeroSection
        movie={featuredMovie}
      />

      <main>

        <div className="section-anchor" id="movies">
          <SearchBar
            value={search}
            onChange={setSearch}
          />
        </div>

        <FilterPanel
          countries={countries}
          years={years}
          genres={genres}
          types={types}
          filters={filters}
          onChange={handleFilterChange}
        />

        <div id="series">
          <MovieSection
            title="New Movies"
            movies={newMovies}
          />

          <MovieSection
            title="New Series"
            movies={newSeries}
          />
        </div>

      </main>
    </>
  );
}

export default HomePage;