# Vue Workshop
## Getting started with Vue.js, for people who hear React is cool

---

### Welcome to Intro to Vue Workshop
Vue is a wonderful library for building single-page applications, web-apps, and enhancing front-end user experience of existing sites. Today we will be building a simple application to search for Github repos, first using the CDN, then followed by enahncing the process with the Vue CLI.

### Getting started: Slides + Starter Files
You will find all of the necessary starter files and resources in the following repo: [https://github.com/rbnhmll/vue-workshop/](https://github.com/rbnhmll/vue-workshop/)

This package includes a number of files, including START and COMPLETE versions of both apps, and the class slides.

>  vue-workshop
>  &#8627; cdn--START
>  &#8627; cdn--COMPLETE
>  &#8627; cli--START
>  &#8627; cli--COMPLETE
>  &#8627; vueJS_workshop--slides
>  &#8627; &#8627; vue-slides.html

Open this package up in your code editor of choice.

### What is Vue?

* Javascript framework from building front-end UI
* In the same category as React, Preact, Angular and Ember
* Create more maintainable codebase

### Why Vue?

* Easy to learn.
* It's mostly just HTML, CSS, javascript.
* Size:
  Relatively small library compared with others
  | Library                  | Minified  | GZipped   |
  | ------------------------ | :-------: | :-------: |
  | Angular 2                | 566K      | 111K      |
  | Ember 2.2.0              | 435K      | 111K      |
  | React 16.2.0 + React DOM | 97.5K     | 31.8K     |
  | **Vue 2.4.2**            | **58.8K** | **20.9K** |
  | Preact 7.2.0             | 16K       | 4K        |

  \* Source: https://gist.github.com/Restuta/cda69e50a853aa64912d

### Features

* Progressive Javascript framework: add to just one part of your application.
* Scalable eco-system.
* Reusable components, with their own template, scripts and styles.
* All the best parts of React and Angular, without the bloat.

### Get started with just the CDN

* Grab the [CDN](https://vuejs.org/v2/guide/#Getting-Started) or [download](https://vuejs.org/v2/guide/installation.html#Direct-lt-script-gt-Include) the .js file
* Note: there are Development and Production versions of both.
  * **Development** version includes helpful console warnings. (we will be using this one.)
  * **Production** version is optimized for size and speed

We're going to styart by opening up the project **cdn--START**. Here we have some pre-built styles and HTML to get us started building our application.

### Vue Devtools

### The Vue Instance

* el
* data

### Declarative Rendering

### Vue Directives (and arguments)

* `v-model` (two-way data binding)
* `v-if` (conditional rendering)
* `v-for` (render loop)
* `v-bind` (attributes) [shortcut: `:`]
* `v-on` (event binding) [shortcut: `@`]

### Directives: `v-model`

### Methods

### Directives: Conditional Rendering with `v-if`

### Listening for Events

### Event modifiers

* `v-on:submit.prevent="onSubmit"`
* `v-model.number="example"`

### Directives: `v-for`

### Directives: `v-bind`
  * cabab-case

### Directive shorthands

### Component Registration: `Vue.component`

### Component Data

### Props
  * `[]` vs `{}`
  * Sataic vs dynamic
  * cabab-case

### Emit events


### Using vue-cli (like create-react-app)

* Install vue-cli [https://github.com/vuejs/vue-cli](https://github.com/vuejs/vue-cli), `$ npm install -g vue-cli`
* Create project
  `$ vue init <template-name> <project-name>`
* Start Server
  `$ npm run dev`
* Download example project `cli--COMPLETE`
* Vue plugin for Chrome and Firefox
* Style scoping (and SASS with node-sass)
  `$ npm install sass-loader node-sass --save-dev`
* Single File Components
* Props
* computed properties
* Lifecycle Hooks?
* Notes and Gotchas:
  * In components, must use `data` as a function which returns an object, or it will not work
  * You can't use self-closing components like `<my-component />` in Vue DOM templates, because it is not valid HTML. Still valid and recommended in single-file components.

### Run with it!

Vue has a bunch of additional tools which parallel other popular frameworks

* Vuex (like Redux)
* Vue-router (like React-router)
* Nuxt.js (SSR)

#### To update:
 - In CDN example, update notes to include re-factoring using registered components.