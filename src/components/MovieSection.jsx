import MovieGrid from "./MovieGrid";

function MovieSection({ title, movies }) {
  return (
    <section>
      <h2>{title}</h2>
      <MovieGrid movies={movies} />
    </section>
  );
}

export default MovieSection;