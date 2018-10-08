<template>
  <div id="app" class="wrapper">
    <Search
      @handleSearch="handleSearch($event)"
      @handleChange="handleChange($event)"
      @resetSearch="resetSearch"
      :selectedSearchMethod="selectedSearchMethod"
    />
    <Results :repos='repos'/>
    <Searching :search='search'/>
    <Errors :search='search'/>
  </div>
</template>

<script>
import Search from '@/components/Search';
import Results from '@/components/Results';
import Searching from '@/components/Searching';
import Errors from '@/components/Errors';

export default {
  name: 'App',
  components: {
    Search,
    Results,
    Searching,
    Errors,
  },
  data() {
    return {
      selectedSearchMethod: 'repo',
      repos: [],
      search: {
        isSearching: false,
        hasError: false,
      },
    };
  },
  methods: {
    handleSearch(event) {
      this.search[event.key] = event.val;
    },
    resetSearch() {
      this.search.hasError = false;
      this.repos = [];
    },
    handleChange(event) {
      this[event.key] = event.val;
    },
  },
};
</script>

<style>
@import '../../sharedAssets/styles/style.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
