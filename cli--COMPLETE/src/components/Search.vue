<template>
  <section class="search">
    <h1>Search by Github {{ selectedSearchMethod | capitalize }}</h1>
    <form @submit.prevent="searchRepos">
      <input type="search" name="search" id="search" v-model="q" required />
      <label for="search">{{ selectedSearchMethod | capitalize }} search</label>
      <search-type
        @handleChange="$emit('handleChange', $event)"
        :selectedSearchMethod="selectedSearchMethod"
      />
    </form>
  </section>
</template>

<script>
import SearchType from "@/components/SearchType.vue";

export default {
  name: "Search",
  components: { SearchType },
  data() {
    return {
      q: "",
    };
  },
  props: {
    selectedSearchMethod: String,
  },
  methods: {
    async searchRepos() {
      this.$emit("handleSearch", {
        key: "isSearching",
        val: true,
      });
      this.$emit("resetSearch");
      const response = await fetch(this.searchEndpoint);
      const json = await response.json();

      let items;
      if (this.selectedSearchMethod === "repo") {
        items = json.items;
      } else if (this.selectedSearchMethod === "developer") {
        items = json;
      }

      this.$emit("handleSearch", {
        key: "isSearching",
        val: false,
      });

      if (items.length) {
        this.$emit("handleChange", {
          key: "repos",
          val: items,
        });
      } else {
        this.$emit("handleSearch", {
          key: "hasError",
          val: true,
        });
      }
    },
  },
  computed: {
    searchEndpoint() {
      if (this.selectedSearchMethod === "repo") {
        return `https://api.github.com/search/repositories?q=${this.q}`;
      } else if (this.selectedSearchMethod === "developer") {
        return `https://api.github.com/users/${this.q}/repos`;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.search
  display: grid
  justify-content: center
  form
    position: relative
    label
      position: absolute
      left: 6px
      top: 10px
      color: var(--grey)
      background: white
      padding: 5px
      line-height: 1
      transition: 0.25s ease
    input
      width: 100%
      box-sizing: border-box
      padding: 10px
      border-radius: 5px
      border: 2px solid var(--grey)
      &:hover,
      &:active,
      &:focus,
      &:valid
        &~ label
          top: -13px
</style>
