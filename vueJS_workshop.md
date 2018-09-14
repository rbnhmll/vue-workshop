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

### What are we going to build?

Together we are going to build a simple single page application which searches for Github repos by keyword, and display them in a grid. The starter package includes two versions of the app, each with a `start` and `complete` version of the app:
  
  - `cdn--START`
  - `cdn--COMPLETE`
  - `cli--START`
  - `cli--COMPLETE`

To preview what our end goal will be, open the `cdn--COMPLETE` directory, and open `index.html` in your browser 

We will be working mostly in the `cdn` version of the app to learn about the fundamentals of Vue, and will later learn about the CLI, and how to extend out application features.

Let's get started!

---

## Getting started with the Vue CDN

* Grab the [CDN](https://vuejs.org/v2/guide/#Getting-Started) or [download](https://vuejs.org/v2/guide/installation.html#Direct-lt-script-gt-Include) the .js file
* Note: there are Development and Production versions of both.
  * **Development** version includes helpful console warnings. (we will be using this one.)
  * **Production** version is optimized for size and speed

We're going to start by opening up the project **cdn--START**. Here we have some pre-built styles and HTML to get us started building our application.

### Add CDN script

Add the CDN at the bottom of the body
```html
...
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</body>
```

### Vue.js devtools
Install the Vue Devtools for you preferred browser

[Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

Open up the browser inspector/devtools, and click on the Vue tab.

### Devtools gotchas
  * If the page uses a production/minified build of Vue.js, devtools inspection is disabled by default so the Vue pane won't show up.
  * To make it work for pages opened via `file://` protocol, you need to check "Allow access to file URLs" for this extension in Chrome's extension management panel.

  <small>* From Vue-devtools documentation: [https://github.com/vuejs/vue-devtools](https://github.com/vuejs/vue-devtools)</small>

### The Vue Instance

Add an `id` to the part of our page where the application will live. We'll use the id `app`.

```html
<body>
  <div id="app" class="wrapper">
  ...
```

Next, instantiate the Vue instance

```html
...
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el: "#app",
      data: {}
    });
  </script>
</body>
```

* `el`: The id of the element our app should be rendered in
* `data`: (a.k.a. state) data saved within our app. This is an `Object`.

### Declarative Rendering

Add some dynamic messages to the searching and error sections, by declaring a key and value on the data `Object`.

```javascript
const app = new Vue({
  el: "#app",
  data: {
    searchingMessage: "Searching...",
    errorMessage: "Oops, nothing here 💩"
  }
});
```
We can then render these messages inside of our `app` template using the `{{ propertyName }}` syntax.

```html
  ...
  <section class="searching">
    <p>{{ searchingMessage }}</p>
  </section>

  <section class="errors">
    <h2>{{ errorMessage }}</h2>
  </section>
  ...
```

> **Note** ☝
> Notice that we can reference the property on the data `Object` directly, without having to reference the main `app` `Object`, like `app.data.searchingMessage`.

### Vue Directives (and arguments)

* `v-model` (two-way data binding)
* `v-on` (event binding) [shortcut: `@`]
* `v-if` (conditional rendering)
* `v-for` (render loop)
* `v-bind` (attributes) [shortcut: `:`]

### Directives: `v-model`

In order to search for repos on Github, we need to grab the query string, and pass it to the API call. Let's add the query as an empty string to our data `Object`.

```javascript
data: {
  q: "",
  searchingMessage: "Searching...",
  errorMessage: "Oops, nothing here 💩"
}
```

Now we need a way to get this information from the `input[type="search"]`, and save it to our `q` property for use later.

But! At the same time, if we have a property saved in our data `Object` already, we want to make sure that we update the input to reflect that data. The simplest way to achieve this is using two-way data minding with `v-model`

```html
<form>
  <input type="search" name="search" id="search" required v-model="q">
  <label for="search">Repo search</label>
</form>
```

Open up the Vue devtools, and notice that as we type in the input, it automatically updates the state. Also notice that if we change, or pre-populate the state, this is automatically updated in the bound input. This is the power of two-way data binding.

### Methods

Now that we have the users search query, we want to use it to call our github API, and bring back some data. We'll create a couple of methods: the first is what we will call to fetch the data from the API, and the second is a method to reset our app before making another search call.

We'll start by adding a `methods` property to our `app`. Methods is an `Object`.

```javascript
const app = new Vue({
  el: "#app",
  data: {
    q: "",
    searchingMessage: "Searching...",
    errorMessage: "Oops, nothing here 💩"
  },
  methods: {}
});
```

The endpoint we'll use to fetch this data is `https://api.github.com/search/repositories?q={query}`.

We'll also add a couple of other properties to our state to keep track if we are currently searching, or if there has been an error. We also want to add a property to save our returned repos into. This will be an `Array`.

```javascript
data: {
  q: "",
  repos: [],
  searching: false,
  searchingMessage: "Searching...",
  errorHandling: false,
  errorMessage: "Oops, nothing here 💩"
},
```

Let's build our `search` method which will take care of the following steps:
  - Prevent the form form refreshing the page on submit
  - Set our searching property to `true`
  - Call `resetSearch` (we'll build this method next)
  - Save the response in a `const`, and then convert to usable `json`
  - Change the searching propert to false, now that we're finished searching.
  - If we got some responses, we want to save it to our `data` in `repos`
  - If we get no repos back, then we want to set the `errorHandling` to `true`.

```javascript
methods: {
  async search(e) {
    e.preventDefault();
    this.searching = true;
    this.resetSearch();
    const response = await fetch(`https://api.github.com/search/repositories?q=${this.q}`);

    const json = await response.json();
    this.searching = false;
    if (json.items.length) {
      this.repos = json.items;
    } else {
      this.errorHandling = true;
    }
  }
}
```

Next we will create the method `resetSearch` to reset the `errorhandling`, and return `repos` to an ampty `Array`.

```javascript
methods: {
  async search(q) {
    ...
  },
  resetSearch() {
    this.errorHandling = false;
    this.repos = [];
  }
}
```
>**Note** ☝ 
>Notice the `this` keyword in our methods? This is how we will reference any data property or method from within another part of our app, instead of referencing `app`.

### Directives: Event Handling with `v-on`

We need to hook up our form, so that when it submits it calls the search method. We can use the directive `v-on` to listed to DOM events, such as submit. We then pass in a reference to the method we want to be called.

```html
<form v-on:submit="search">
  ...
</form>
```

Now that our `search` method has been called, we should have up to 30 objects in our `repos` `Array`.

### Event modifiers

Now, calling `preventDefault()` on the submit event is fine, but there's also a Vue way of modifying these types of events, which is more concise.
  
`v-on:submit.prevent="search"`
  * Prevent default search behaviour
`v-model.number="example"`
  * Forces a chosen data type.

We can tack on a modifier to the event handler, instead of stating it in the method.

```html
<form v-on:submit.prevent="search">
  ...
</form>
```

Remove `e.preventDefault()` from our search method

```javascript
methods: {
  async search() {
    // e.preventDefault(); <== Remove this line!
    ...
```

### Directives: Conditional Rendering with `v-if`

Using conditional rendering with `v-if`, we can decide to only show the results section if there are repos, and `searching` and `errorHandling` sections when applicable.

```html
...
<section class="results" v-if="repos.length">
  ...
</section>
...
<section class="searching" v-if="searching">
  <p>{{ searchingMessage }}</p>
</section>

<section class="errors" v-if="errorHandling">
  <h2>{{ errorMessage }}</h2>
</section>
...
```

<!-- ### Listening for Events -->

### Directives: `v-for`

Now that we have some repos in our data, it's time to loop over them, and display them on the page. We can loop over an `Array` of items in our `data` using `v-for`.

Be use this directive on the element which needs to be repeated. In this case, the `<li>`.

```html
...
<section class="results">
  <ul>
    <li class="repo" v-for="repo in repos">
    ...
```

Now we have a variable `repo` which represents each iteration. We can use this to fill in some of the dummy content on our cards.

```html
...
<li class="repo" v-for="repo in repos">
  ...
    <div class="repo__meta">
      <p>
        <strong>Dev:</strong> {{ repo.owner.login }}
      </p>
      <p>
        <strong>Repo:</strong> {{ repo.name }}
      </p>
    </div>
  ...
</li>
...
```

>**Note** ☝ 
>While we can use the `{{ }}` syntax to render text content, we cannot use this _within_ attributes. Follow along to the next step to see how we `bind` data to these attributes.

### Directives: `v-bind`

In order to bind data to attributes in vue, we have to use another directive called (you guess it) `v-bind`. This will allow us to dynamically update attributes.

In our cards above, we still need to hook up the `<a href="">`, and `<img src="" alt=">`.

When using `v-bind`, the contents of the attribute will be treated as javascript. So we can pass variables right into it.

```javascript
...
<li class="repo" v-for="repo in repos">
  <a v-bind:href="repo.html_url" class="repo__link">
    <div class="repo__image">
      <img v-bind:src="repo.owner.avatar_url" v-bind:alt="repo.full_name">
    </div>
    ...
  </a>
</li>
...
```

### Directive shorthands

Writing `v-on` and `v-bind` on everything can get a little tedious after a while, so there are some convenient shortcuts we can use to save some space/time.

  * `v-on:` can be replaced with `@`
  * `v-bind:` can be written as simply `:`

Let's update our code as follows:

```html
...
<form @submit="search">
  ...
</form>
...
<li class="repo" v-for="repo in repos">
  <a :href="repo.html_url" class="repo__link">
    <div class="repo__image">
      <img :src="repo.owner.avatar_url" :alt="repo.full_name">
    </div>
    ...
  </a>
</li>
```

### Component Registration: `Vue.component`

Now that we have a working application, we can think about splitting the parts of our app into smaller components, in order to make them easier to maintain. It might not seem necessary at this scale, but becomes increasingly helpful as your application expands.

Let's start by separating some of the smaller parts of our app into components, such as the `searching` and `errors` sections.

First, we need to Register a new component, using `Vue.component()`. This method takes two arguments: a `name: String`, and a `config: Object`.

```javascript
Vue.component('searching', {});
```

Inside the config `Object`, we can add data specific to this component, such as a `template: String` and `data: Function`.

```javascript
Vue.component('searching', {
  template: "",
  data() {
    return {};
  }
});
```

>**Note** ☝ 
>Notice that the `data` property on our component look a little different than before? Because components are reusable, we can no longer declare our state as an `Object`. If we did, every instance of that component would share the same data. Instead, we make `data` a `function`, which _returns_ an `Object`. This way, each component will have unique data!

Now, we can move the HTML `searchingMessage` in our `app` to the `data` in our component.

```javascript
Vue.component('searching', {
  template: "",
  data() {
    return {
      searchingMessage: "Searching...",
    };
  },
});
```

Let's take the HTML for the `searching section`, and put it inside of our template. You can use back-ticks in order make them multi-line.

```javascript
Vue.component('searching', {
  template: `
    <section class="searching">
      <p>{{searchingMessage}}</p>
    </section>
  `,
  data() {
    return {
      searchingMessage: "Searching...",
    };
  },
});
```

>**Note** ☝ 
> Since we are now including the `searchingMessage` in this component, we need to remember to remove it from the main Vue `Object`.

Finally, we can render our component in our app, by using the component name as the element. Let's also include the `v-if` from before, but this time at the component level.

```html
<div id="app" class="wrapper">
  ...
  <searching v-if="searching"></searching>
  ...
</div>
```
>**Note** ☝ 
>You can't use self-closing components like `<my-component />` in Vue DOM templates (CDN), because it is not valid HTML. But it is still valid and recommended in single-file components (CLI). Components must also be lower-case, and cabab-case.

Let's do the same thing for the `errors` section.

```html
<div id="app" class="wrapper">
  ...
  <searching v-if="searching"></searching>
  <errors v-if="errorHandling"></errors>
  ...
</div>
```
```javascript
Vue.component('errors', {
  template: `
    <section class="errors">
      <h2>{{errorMessage}}</h2>
    </section>
  `,
  data() {
    return {
      errorMessage: "Oops, nothing here 💩",
    };
  },
});
```

>**Note** ☝ 
> Since we are now including the `errorMessage` in this component, we need to remember to remove it from the main Vue `Object`.

Now that we have a little practice building components, let's take care of the more complex components of our app: _Search_, and _Results_!

```html
<search></search>
```

```javascript
Vue.component('search', {
  template: `
    <section class="search">
      <h1>Search for Github repo</h1>
      <form @submit.prevent="search">
        <input
          type="search"
          name="search"
          id="search"
          required
          v-model="q"
        >
        <label for="search">Repo search</label>
      </form>
    </section>
  `,
  data() {
    return {
      q: '',
    }
  }
});
```

>**Note** ☝ 
> Since we are now including the `q` in this component, we need to remember to remove it from the main Vue `Object`.

Let's try out the app and make sure it still works! **Uh oh!** We nothing is happening when we search, and we have an error in the console which looks like `[Vue warn]: Property or method "search" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property` 🤔. But isn't it thought?

The problem is that we are trying to call a function that doesn't exist on this component. We need to find a way to call up to the main Vue `Object` to trigger our `search method`, and send along our query, `q`.

### Emit events

Vue has an elegant way of handling these sorts of events, where we need to trigger something in the parent `Object`, and pass along some arguments, using `$emit`.

We can start by replacing the name of the method we were trying to call directly, with `$emit()`. This can take two arguments: an `eventName`, so we can reference the event by it later, and the `[...args]` or payload. We'll call our event "search", and pass our query `q` as the argument. 

```javascript
Vue.component('search', {
  template: `
    ...
    <form @submit.prevent="$emit('search', q)">
      ...
    </form>
    ...
  `,
  ...
});
```

Now in our HTML where we reference the search component, we can listed for our custom event called `search`. This is done the same way we listen for standard events with `v-on` or `@`, but referencing the custom name of the event, `search`. The argument that is expected is represented by the special `$event` property, containing whatever was passed through.

```html
<search @search="search($event)"></search>
```

By doing so we are passing the `q` to the `search method`.

Let's convert our remaining _Results_ section into it's own component.

```html
<results v-if="repos.length"></results>
```

```javascript
Vue.component('results', {
  template: `
    <section class="results">
      <ul>
        <li v-for="repo in repos" class="repo">
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
  `
});
```

We must also update our `search` method to expect `$event` payload to be passed in. We'll name it `q`, and since we are longer referencing `q` on the `data` `Object`, we can remove the `this.` from the url template string.

```javascript
methods: {
  async search(q) {
   ...
    const response = await fetch(`https://api.github.com/search/repositories?q=${q}`);
    ...
  },
  ...
}
```

Let's try out the app and make sure it still works! **Uh oh!**, another error, similar to before `[Vue warn]: Property or method "repos" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property`.

Here we are referencing `repos`, but this component does not have access to it in the component. Let's solve this in the next step.

### Props

In order to allow our `results` component access to the `repos` in the mina Vue Object, we need to pass "props" to the component.

We do this using `v-bind`, similar to when we need to dynamically update an attribute. We start be giving our `results` element an attribute with the name we want to represent it, and pass in the `repos` in our data `Object` as the argument. We can also use the short-form, as follows:

```html
<results :repos="repos" v-if="repos.length"></results>
```

Then in the component itself, we need to register the prop, so that the component knows what to expect. In its simplest form, props can be represented by an `Array` of `Strings`. However, you can also make props an `Object`, with the key being the name of the prop, and the value being the prop type, such as `String`, `Array`, etc. This can help offer useful warnings if passing the wrong type of prop.

```javascript
Vue.component('results', {
  template: `
    <section class="results">
     ...
    </section>
  `,
  props: {
    repos: Array
  },
});
```

>**Note** ☝ 
> It's worth nothing that HTML attribute names are case sensitive, and the browser will treat any uppercase letters as lowercase. So when using in-DOM templates like with the CDN, we must remember to use kabab-case on prop attributes.

Yay, our application works again!

---

## Using Vue CLI 3

The **Vue CLI** (**C**ommand **L**ine **I**nterface) is the official tooling for spinning up a project with all the boilerplate needed for a fully functional web-application. If you have used `create-react-app` before, it is similar to this.

### Install Vue CLI

In order to create a project with the Vue CLI, we need to first install it with `npm` or `yarn` in your terminal. We'll be using `npm` for all of these examples.

Getting started instructions: [https://cli.vuejs.org/](https://cli.vuejs.org/),

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

### Creating a project

There are two ways to create a new project with Vue CLI:
  1. Using `vue create`
  2. Using the **brand new** `vue ui`

Let's take a look at both!

### Creating a project -- `vue create`

To create a vue app we type `vue create` followed by the name of the project, giving you options to select a default template, or fully configure it to your needs.

```bash
vue create <project-name>
```

Let's create a `test` project

This will begin a series of steps in your terminal to create your project. For this example, we will choose the `default` option.

```bash
Vue CLI v3.0.1
? Please pick a preset: (Use arrow keys)
❯ default (babel, eslint)
  Manually select features
```

When complete you should get the message

```bash
🎉  Successfully created project test.
👉  Get started with the following commands:

 $ cd test
 $ npm run serve
```

### Creating a project -- `vue ui`

The **new** Vue UI will launch a localhost with a GUI (**G**raphical **U**ser **I**nterface), which makes setting up a project a bit more user friendly.

```bash
vue ui
```

Once opened, you will see many of the same options as in the console, but in a more clickable fashion.

Let's create a `test` project again.



### Start Server

With a project created, we can now start our Vue server, and see the. The CLI Service is built on top of webpack, but luckily we won't have to do anything to get it up and running, it's pre configured.

You can leave the UI running, or hit `control + c` to terminate it. `cd` into your project and run:

```bash
npm run serve
```

Your application is now running at `localhost:8080/`

>**Note** ☝ 
>To kill the server at any time, hit `control + c`

### Boilerplate files tour

Inside of your test project, you will see these starter files and folders:

- `/public`
  - `favicon.ico`
  - `index.html` 
- `/src`
  - `/assets`
  - `/components`
  - `App.vue`
  - `main.js`
- `.gitignore`
- `babel.config.js`
- `package-lock.json`
- `package.json`
- `README.md`

### Download example project starter files: `cli--START`

To make the process more efficient, I have created a starter project for you, with all the work we have done previously, broken into components.

Open up `cli--START` in the starter files, or download them at [https://github.com/rbnhmll/vue-workshop](https://github.com/rbnhmll/vue-workshop)

Locate and `cd` into this folder and run"

```bash
npm run serve
```

The application is now running at `localhost:8080/`

>**Note** ☝ 
>To kill the server at any time, hit `constrol + c`

### Getting to know the starter files

This starter pack includes the same files as the boilerplate we created with the Vue CLI. The only difference is that I have created single file components for everything we worked on previously. Let's take a look.

- `/public`
- `/src`
  - `App.vue`
  - `main.js`
  - `/components`
    - `Errors.vue`
    - `Results.vue`
    - `Search.vue`
    - `Searching.vue`
    - `SearchType.vue` <== We'll be adding this component

### Single File Components

Single file components are written in `.vue` files, and consist of three sections:

`<template>`
`<script>`
`<style>`

These represent the component's `HTML`, `JavaScript`, and `CSS`.

A typical starter file will look like this:

```html
<template>
  <div>
    <!-- HTML -->
  </div>
</template>

<script>
  export default {
    // JavaScript
  };
</script>

<style>
  /* CSS */
</style>
```

Each section of these components pertain to that component alone.

### Create a new Component: SearchType.vue

To create a new component, we will create a new `.vue` files inside the `components` directory. We'll call it `SearchType.vue`.

This purpose of this component is to enable us to switch between searching for **Repos** and **Developers**.

Once created, we will input the base code above to get our component started.

Let's add some starter code to give the component some structure:

```html
<template>
  <div>
    <h2>Search Type</h2>
    <!-- Loop over searchMethods -->
    <label for="">[[TYPE]]
      <input type="radio" name="selectedSearchMethod" id="" value="">
    </label>
  </div>
</template>
```

```html
<style lang="sass" scoped>
  // Some base styles so it looks 👌
  h2
    font-size: 2rem
    margin-bottom: 0
  label
    margin: 0 10px
</style>
```

### Add component to `Search.vue`

In order to see this component in our app, we need to import it and render it on the page. We're going to use this component inside of `Search.vue`, because it will directly effect what we are searching for.

First, let's import the component:

```html
<script>
import SearchType from '@/components/SearchType.vue';

export default {
  ...
};
...
</script>
```

>**Note** ☝
  > Notice how we can use the `@` symbol as an alias for the `src` folder. This can make it a lot easier to find files, instead of having to go up the directory tree.

Now with the component imported, we can add it to our template

```html
<template>
  ...
  <form @submit.prevent="search">
    ...
    <search-type />
  </form>
  ...
</template>
```

>**Note** ☝
  > It's best practice to add components to tjhe template using kabab case, so that they are inline with html standards. And since our component doesn't have any content, it can also be self-closing.

We should now see some content inside of our form, displaying a radio button

### Building the SearchType functionality

Depending on which option is selected, we can change the type of search we want to perform. The two types of searches we want to perform are `repo` and `developer`. Let's put these as options inside out data `Object`, so we can loop over them.

```html
<script>
export default {
  name: 'SearchType',
  data() {
    return {
      searchMethods: ['repo', 'developer'],
    };
  }
};
</script>
```

Now in our template, we can loop over these options in order to show the different radio buttons.



### Computed properties

### Filters?
  Capitalize

### Notes and Gotchas:
  >**Note** ☝ 
  > Remember, in components `data` must be a function which returns an `Object`, or it will not work properly.
  
  >**Note** ☝
  >You can't use self-closing components like `<my-component />` in Vue DOM templates, because it is not valid HTML. Still valid and recommended in single-file components.

### Run with it!

Vue has a bunch of additional tools which parallel other popular frameworks

* Vuex (like Redux)
* Vue-router (like React-router)
* Nuxt.js (SSR)

#### To update:
 - In CDN example, update notes to include re-factoring using registered components.