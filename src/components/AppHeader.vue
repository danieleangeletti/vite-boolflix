<script>
import { store } from "../store.js";
import axios from "axios";

export default {
  data() {
    return { store };
  },
  methods: {},
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
                @click="$emit('perform_search')"
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
