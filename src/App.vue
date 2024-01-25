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
    get_film_name() {
      axios
        .get(this.store.base_url_movie, {
          params: {
            api_key: this.store.api_key,
            query: this.store.search_film,
          },
        })
        .then((response) => {
          this.store.films = response.data.results;
          console.log(this.store.films);
        });
    },
  },
};
</script>

<template>
  <AppHeader @perform_search="get_film_name()" />

  <AppMain />

  <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
