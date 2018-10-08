<template>
  <section class="searching" v-if="search.isSearching">
    <p>Searching...</p>
  </section>
</template>

<script>
export default {
  name: 'Searching',
  props: ['search'],
};
</script>

<style lang="sass" scoped>

.searching
  text-align: center
  font-weight: 600

</style>
