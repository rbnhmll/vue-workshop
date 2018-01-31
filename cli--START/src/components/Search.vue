<template>
  <section class="search">
    <h1>Search for Github searchType</h1>
    <form @submit.prevent="search">
      <input type="search" name="search" id="search" :placeholder="`searchType search`" v-model="q">
    </form>
  </section>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      q: '',
    };
  },
  props: ['handleFlags', 'handleChange', 'resetSearch'],
  methods: {
    search: async function() {
      this.handleFlags('searching', true);
      this.resetSearch();
      const resp = await fetch(this.searchEndpoint);
      const json = await resp.json();

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
      return `https://api.github.com/search/repositories?q=${this.q}`;
      // Developer endpint: https://api.github.com/users/${this.q}/repos
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
