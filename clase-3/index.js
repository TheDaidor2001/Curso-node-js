const express = require("express");
const crypro = require("node:crypto");
const movies = require("./movies.json");
const { validateMovie, validatePartialMovie } = require("./squemas/movies");

const app = express();
app.use(express.json());
app.disable("x-powered-by"); //Desabilitar express

//Buscar todas y filtrar por genero
app.get("/movies", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const { genre } = req.query;
  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some(
        (g) => g.toLocaleLowerCase() === genre.toLocaleLowerCase()
      )
    );
    return res.json(filteredMovies);
  }
  res.json(movies);
});

//Buscar por id
app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) {
    return res.json(movie);
  } else {
    res.status(404).json({ msg: "Movie not found" });
  }
});

app.post("/movies", (req, res) => {
  const result = validateMovie(req.body);
  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error) });
  }

  //en BD
  const newMovie = {
    id: crypto.randomUUID(), //uuid v4
    ...result.data,
  };
  movies.push(newMovie);

  res.status(201).json(newMovie);
});

app.patch("/movies/:id", (req, res) => {
  const result = validatePartialMovie(req.body);
  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error) });
  }

  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ msg: "Movie not found" });
  }

  const updatedMovie = {
    ...movies[movieIndex],
    ...result.data,
  };

  movies[movieIndex] = updatedMovie;
  return res.json(updatedMovie);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running in Port ${PORT} http://localhost:${PORT}`);
});
