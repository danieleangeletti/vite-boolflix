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
        <div class="h-100 d-flex align-items-center">
          <img class="h-75" src="../assets/img/boolflix-logo.png" alt="" />
        </div>
        <div>
          <div class="input-group flex-nowrap">
            <div>
              <input
                v-model="store.search"
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
                SEARCH
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
