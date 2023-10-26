const z = require("zod");

const movieSquema = z.object({
  title: z.string({
    invalid_type_error: "Movie Title must be a String",
    required_error: "Movie Title is required",
  }),
  year: z.number().int().positive().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5.5),
  poster: z.string().url({
    message: "Poster must be a valid URL",
  }),
  genre: z.array(
    z.enum([
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Mystery",
      "Romance",
      "Thriller",
      "Western",
      "Crime",
    ]),
    {
      required_error: "Genre is required",
      invalid_type_error: "Genre must be an Array",
    }
  ),
});

function validateMovie(objet) {
  return movieSquema.safeParse(objet);
}

function validatePartialMovie(objet) {
  return movieSquema.partial().safeParse(objet);
}

module.exports = {
  validateMovie,
  validatePartialMovie,
};
