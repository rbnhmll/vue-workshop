<template>
  <div>
    <h2>Search Type</h2>
    <label v-for="(type, i) in searchTypes" :key="i" :for="type">{{ type }}
      <input type="radio" name="searchType" :id="type" :value="type" @change='updateSearchType' :checked="searchType === type">
    </label>
  </div>
</template>

<script>
export default {
  name: 'SearchType',
  data() {
    return {
      searchTypes: ['repo', 'developer'],
    };
  },
  props: ['handleChange', 'searchType'],
  methods: {
    updateSearchType(e) {
      const name = e.target.name;
      const val = e.target.value;
      this.handleChange(name, val);
    },
  },
};
</script>

<style lang="sass" scoped>
  h2
    font-size: 2rem
    margin-bottom: 0
  label
    margin: 0 10px
</style>
