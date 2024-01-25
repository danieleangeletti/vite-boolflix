import { reactive } from "vue";

export const store = reactive({
  api_key: "bd25bf5465403be9c568c1514c1f21ed",
  base_url_movie: "https://api.themoviedb.org/3/search/movie",
  base_url_series: "https://api.themoviedb.org/3/search/tv",
  films: [],
  series: [],
  search: "",
  languages: [
    "ru", // russian &#127479&#127482
    "lt", // lithuanian &#127473&#127481
    "et", // estonian &#127466&#127466
    "hu", // hungarian &#127469&#127482
    "lb", // luxembourgish &#127473&#127482
    "at", // austrian &#127462&#127481
    "nl", // netherlands &#127475&#127473
    "es", // spanish &#127466&#127480
    "pl", // polish &#127477&#127473
    "uk", // ukrainian
    "fr", // french &#127467&#127479
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
