<template>
  <section class="searching" v-if="flags.searching">
    <p>Searching...</p>
  </section>
</template>

<script>
export default {
  name: 'Searching',
  props: ['flags'],
};
</script>

<style lang="sass" scoped>

.searching
  text-align: center
  font-weight: 600

</style>
