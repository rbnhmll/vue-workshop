<template>
  <div id="app" class="wrapper">
    <Search :handleFlags='handleFlags' :handleResults='handleResults' :resetSearch='resetSearch'/>
    <Results :repos='repos'/>
    <Searching :flags='flags'/>
    <Errors :flags='flags'/>
  </div>
</template>

<script>
import Search from './components/Search';
import Results from './components/Results';
import Searching from './components/Searching';
import Errors from './components/Errors';

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
      repos: [],
      flags: {
        searching: false,
        errorHandling: false,
      },
    };
  },
  methods: {
    handleFlags(key, val) {
      this.flags[key] = val;
    },
    handleResults(repos) {
      this.repos = repos;
    },
    resetSearch() {
      this.flags.errorHandling = false;
      this.repos = [];
    },
  },
};
</script>

<style>
@import './assets/styles/style.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
