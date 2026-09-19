import { Link, useParams } from "react-router-dom";

import MovieDetail from "../components/MovieDetail";
import movies from "../data/movies";

function MovieDetailPage() {
  const { id } = useParams();

  const movie = movies.find(
    (item) => item.id === Number(id)
  );

  if (!movie) {
    return (
      <main>
        <div className="not-found">
          <h1>Movie Not Found</h1>

          <p>
            The movie you are looking for
            does not exist.
          </p>

          <Link to="/">
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <MovieDetail movie={movie} />
    </main>
  );
}

export default MovieDetailPage;