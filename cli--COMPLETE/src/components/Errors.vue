<template>
  <section class="errors" v-if="flags.errorHandling">
    <h2>{{errorMessage}}</h2>
  </section>
</template>

<script>
export default {
  name: 'Errors',
  data() {
    return {
      errorMessage: 'Oops, nothing here 💩',
    };
  },
  props: ['flags'],
};
</script>

<style lang='sass' scoped>

</style>
