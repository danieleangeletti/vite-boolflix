import { reactive } from "vue";

export const store = reactive({
  api_key: "bd25bf5465403be9c568c1514c1f21ed",
  base_url_movie: "https://api.themoviedb.org/3/search/movie",
  base_url_series: "https://api.themoviedb.org/3/search/tv",
  films: [],
  series: [],
  search_film: "",
  languages: [
    "ru", // russian
    "lt", // lithuanian
    "et", // estonian
    "hu", // hungarian
    "lb", // luxembourgish
    "at", // austrian
    "nl", // netherlands
    "es", // spanish
    "pl", // polish
    "uk", // ukrainian
    "fr", // french
    "be", // belgium
    "it", // italian
    "ga", // irish
    "da", // danish
    "gb", // united kingdom
    "sv", // swedish
    "cs", // czech
    "el", // greek
    "us", // usa
    "au", // australian
    "ca", // canadian
    "lv", // latvian
    "de", // deutsch
    "ja", // japanese
    "zh", // chinese
    "il", // israel
  ],
});
