<template>
  <section class="results" v-if="repos.length">
    <h2>Matching Repos</h2>
    <ul>
      <li v-for="(repo, i) in repos" :key='i' class="repo">
        <a :href="repo.html_url" class="repo__link">
          <div class="repo__image">
            <img :src="repo.owner.avatar_url" :alt="repo.full_name">
          </div>
          <div class="repo__meta">
            <p>
              <strong>Dev:</strong> {{ repo.owner.login }}
            </p>
            <p>
              <strong>Repo:</strong> {{ repo.name }}
            </p>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Results',
  props: ['repos'],
};
</script>

<style lang="sass" scoped>

.results
  ul
    display: grid
    grid-gap: 10px
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
    list-style-type: none
    margin: 0
    padding: 0
    
.repo
  border: 2px solid var(--grey)
  border-radius: 5px
  transition: 0.3s
  text-align: left
  &:hover
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3)
  a
    display: grid
    grid-gap: 0 20px
    color: inherit
    padding: 10px
    grid-template-columns: 80px 1fr
    text-decoration: none

.repo__image
  grid-column: 1 / span 1
  img
    max-width: 100%
    display: block

.repo__meta
  grid-column: 2 / -2
  display: grid
  align-items: center
  p
    margin: 0

</style>
