import { reactive } from "vue";

export const store = reactive({
  api_key: "bd25bf5465403be9c568c1514c1f21ed",
  base_url_movie: "https://api.themoviedb.org/3/search/movie",
  base_url_series: "https://api.themoviedb.org/3/search/tv",
  films: [],
  series: [],
  search_film: "",
});
