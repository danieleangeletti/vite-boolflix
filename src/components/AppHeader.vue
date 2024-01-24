<script>
import { store } from "../store.js";
import axios from "axios";

export default {
  data() {
    return { store };
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
          for (let i = 0; i < this.store.films.length; i++) {
            console.log(this.store.films[i].title);
            console.log(this.store.films[i].original_title);
            console.log(this.store.films[i].original_language);
            console.log(this.store.films[i].vote_average);
          }
        });
    },
  },
};
</script>

<template>
  <header class="bg-black">
    <div class="container h-100">
      <div class="d-flex justify-content-between align-items-center h-100">
        <div>
          <h3>BOOLFLIX</h3>
        </div>
        <div>
          <div class="input-group flex-nowrap">
            <div>
              <input
                v-model="store.search_film"
                type="text"
                class="form-control"
                placeholder="Search film"
                aria-label="Search film"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div>
              <button
                @click="get_film_name"
                type="button"
                class="btn btn-primary ms-3"
              >
                PRESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 10vh;
  h3 {
    color: red;
  }
}
</style>
