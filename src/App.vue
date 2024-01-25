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
