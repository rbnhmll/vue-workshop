<template>
  <section class="search">
    <h1>Search for Github {{selectedSearchMethod}}</h1>
    <form @submit.prevent="search">
      <input type="search" name="search" id="search" :placeholder="`${selectedSearchMethod} search` | capitalize" v-model="q">
      <SearchType :handleChange='handleChange' :selectedSearchMethod='selectedSearchMethod'/>
    </form>
  </section>
</template>

<script>
import SearchType from './SearchType';

export default {
  name: 'Search',
  components: { SearchType },
  data() {
    return {
      q: '',
    };
  },
  props: ['handleFlags', 'handleChange', 'resetSearch', 'selectedSearchMethod'],
  methods: {
    search: async function() {
      this.handleFlags('searching', true);
      this.resetSearch();
      const resp = await fetch(this.searchEndpoint);
      const json = await resp.json();

      let items;
      if (this.selectedSearchMethod === 'repo') {
        items = json.items;
      } else if (this.selectedSearchMethod === 'developer') {
        items = json;
      }

      this.handleFlags('searching', false);

      if (items.length) {
        this.handleChange('repos', items);
      } else {
        this.handleFlags('errorHandling', true);
      }
    },
  },
  computed: {
    searchEndpoint() {
      if (this.selectedSearchMethod === 'repo') {
        return `https://api.github.com/search/repositories?q=${this.q}`;
      } else if (this.selectedSearchMethod === 'developer') {
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
  form input
    width: 100%
    box-sizing: border-box
    padding: 10px
    border-radius: 5px
    border: 2px solid var(--grey)

</style>
