<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
import { store } from "./store.js";

export default {
  data() {
    return { store };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {
    get_films_and_series() {
      axios
        .get(this.store.base_url_movie, {
          params: {
            api_key: this.store.api_key,
            query: this.store.search,
          },
        })
        .then((response) => {
          this.store.films = response.data.results;
          console.log(this.store.films);
        });
      axios
        .get(this.store.base_url_series, {
          params: {
            api_key: this.store.api_key,
            query: this.store.search,
          },
        })
        .then((response) => {
          this.store.series = response.data.results;
          console.log(this.store.series);
        });
      // axios
      //   .get("https://api.themoviedb.org/3/tv/40000/aggregate_credits", {
      //     params: {
      //       api_key: this.store.api_key,
      //     },
      //   })
      //   .then((response) => {
      //     console.log(response);
      //     if (response.data.cast.length >= 5) {
      //       for (let i = 0; i < 5; i++) {
      //         console.log(response.data.cast[i].name);
      //       }
      //     } else {
      //       for (let i = 0; i < response.data.cast.length; i++) {
      //         console.log(response.data.cast[i].name);
      //       }
      //     }
      //   });
    },
  },
};
</script>

<template>
  <AppHeader @perform_search="get_films_and_series()" />

  <AppMain />

  <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
