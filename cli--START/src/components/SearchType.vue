<template>
  <div>
    <h2>Search Type</h2>
    <!-- Loop over searchMethods -->
    <label for="">[[TYPE]]
      <input type="radio" name="selectedSearchMethod" id="" value="">
    </label>
  </div>
</template>

<script>
export default {
  name: 'SearchType',
  data() {
    return {
      // Add search methods
    };
  },
  props: [
    // Add incoming props
  ],
  methods: {
    // Add a method to updateSearchType
  },
};
</script>

<style lang="sass" scoped>
  // Some base styles so it looks 👌
  h2
    font-size: 2rem
    margin-bottom: 0
  label
    margin: 0 10px
</style>
