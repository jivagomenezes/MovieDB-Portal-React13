import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=edc3d57362bb8296f0c51db4ffe09d8e`
  );
  const res = await data.json();
  console.log(res);

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
