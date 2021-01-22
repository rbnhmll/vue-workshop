<template>
  <section class="errors" v-if="search.hasError">
    <h2>{{ errorMessage }}</h2>
  </section>
</template>

<script>
export default {
  name: "Errors",
  data() {
    return {
      errorMessage: "Oops, nothing here",
    };
  },
  props: ["search"],
};
</script>

<style lang='sass' scoped>
</style>
