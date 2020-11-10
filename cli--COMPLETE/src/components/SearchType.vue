<template>
  <div>
    <h2>Search Type</h2>
    <label v-for="(type, i) in searchMethods" :key="i" :for="type"
      >{{ type | capitalize }}
      <input
        type="radio"
        name="selectedSearchMethod"
        :id="type"
        :value="type"
        @change="updateSearchType($event)"
        :checked="selectedSearchMethod === type"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "SearchType",
  data() {
    return {
      searchMethods: ["repo", "developer"],
    };
  },
  props: ["selectedSearchMethod"],
  methods: {
    updateSearchType(event) {
      this.$emit("handleChange", {
        key: event.target.name,
        val: event.target.value,
      });
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
