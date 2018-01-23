# Getting started with Vue.js, for people who hear React is cool

## What is Vue?

* Javascript framework from building front-end UI
* In the same category as React, Preact, Angular and Ember
* Create more maintainable codebase

## Why Vue?

* Easy to learn
* It's just JS
* Size:
  Relatively small library compared with others
  | Library | Minified | GZipped |
  | --------|:--------:| :------:|
  | Angular 2 | 566K | 111K |
  | Ember 2.2.0 | 435K | 111K |
  | React 16.2.0 + React DOM | 97.5K | 31.8K |
  | **Vue 2.4.2** | **58.8K** | **20.9K** |
  | Preact 7.2.0 | 16K | 4K |

  \* Source: https://gist.github.com/Restuta/cda69e50a853aa64912d

* Features
  * Progressive Javascript framework (can add to just one part of your application)
  * Scalable eco-system
  * Reusable components, with it's own template, scripts and styles
  * All the best parts of React and Angular, without the bloat.

## Get started with just the CDN

* Setting up new Vue Instance
  * el
  * data (state)
  * methods
  * computed properties
  * Components?
  * Lifecycle Hooks?
* Vue Directives (and arguments)
  * `v-if` (conditional rendering)
  * `v-for` (render loop)
  * `v-on` (event binding) [shortcut: `@`]
  * `v-model` (two-way data binding)
  * `v-bind` (attributes) [shortcut: `:`]
* Directive modifiers
  * `v-on:submit.prevent="onSubmit"`

## Using vue-cli (like create-react-app)

* Install vue-cli (https://github.com/vuejs/vue-cli), `$ npm install -g vue-cli`
* Create project
  `$ vue init <template-name> <project-name>`
* Start Server
  `$ npm run dev`
* Vue plugin for Chrome and Firefox
* Style scoping (and SASS with node-sass)
  `$ npm install sass-loader node-sass --save-dev`
* Single File Components
* Props
* Notes and Gotchas: [
  * In components, must use `data` as a function which returns an object, or it will not work
    ]

## Run with it!

Vue has a bunch of additional tools which parallel other popular frameworks

* Vuex (like Redux)
* Vue-router (like React-router)
* Nuxt.js (SSR)

---

## Possible project API options for workshop

* Github user repos: https://api.github.com/users/rbnhmll/repos (no key needed)
* https://api.github.com/search/repositories?q=${this.q} (search for repos)

* Starwars: https://swapi.co/
* Pokemon: https://www.pokeapi.co/
* Open Air Quality: https://docs.openaq.org/
* Google Location: https://maps.googleapis.com/maps/api/geocode/json?address=Oxford%20University,%20uk&sensor=false
