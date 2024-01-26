import { reactive } from "vue";

export const store = reactive({
  api_key: "bd25bf5465403be9c568c1514c1f21ed",
  base_url_movie: "https://api.themoviedb.org/3/search/movie",
  base_url_series: "https://api.themoviedb.org/3/search/tv",
  films: [],
  series: [],
  search: "",
  films_credits_api: "https://api.themoviedb.org/3/movie/movie_id/credits",
  series_credits_api: "https://api.themoviedb.org/3/tv/series_id/credits",
  films_details_api: "https://api.themoviedb.org/3/movie/movie_id",
  series_details_api: "https://api.themoviedb.org/3/tv/series_id",
});
