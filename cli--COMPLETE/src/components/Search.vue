<template>
  <section class="search">
    <h1>Search for Github repo</h1>
    <form @submit.prevent="search">
      <input type="search" name="search" id="search" placeholder="Repo Search" v-model="q">
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
  props: ['handleFlags', 'handleResults', 'resetSearch'],
  methods: {
    search: async function() {
      this.handleFlags('searching', true);
      this.resetSearch();
      const resp = await fetch(`https://api.github.com/search/repositories?q=${this.q}`);

      const json = await resp.json();

      this.handleFlags('searching', false);

      if (json.items.length) {
        this.handleResults(json.items);
      } else {
        this.handleFlags('errorHandling', true);
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
  ul
    display: grid
    grid-gap: 10px
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
    list-style-type: none
    margin: 0
    padding: 0



</style>
