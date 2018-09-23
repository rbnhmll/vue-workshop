# Vue Workshop
## Getting started with Vue.js, for people who hear React is cool

---

### Welcome to Intro to Vue Workshop

Vue is a wonderful library for building single-page applications, web-apps, and enhancing front-end user experience of existing sites.

Today we will be building a simple application to search for Github repos, first using the `CDN`, then followed by adding functionality with the `Vue CLI`.

### What's you'll need to succeed in this workshop

- Code editor of choice (I recommend [VSCode](https://code.visualstudio.com/))
  - Vue syntax highlighter
    - VSCode: [Vue VS Code Extension Pack](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-extensionpack)
    - Sublime - [Vue Syntax Highlight](https://github.com/vuejs/vue-syntax-highlight)
    - Atom - [language-vue](https://atom.io/packages/language-vue)
    - Brackets - [Brackets Vue](http://brackets.dnbard.com/extension/brackets.vue)
- Chrome or Firefox browser
- Vue.js Devtools (more about this below)
- Terminal
- [npm](https://www.npmjs.com/) installed

### Getting started: Slides + Starter Files
You will find all of the necessary starter files and resources in the following repo: [https://github.com/rbnhmll/vue-workshop/](https://github.com/rbnhmll/vue-workshop/)

This package includes a number of files, including **START** and **COMPLETE** versions of both apps, and these class notes. There's also some slides included which provide a cursory overview of the framework.

**vue-workshop**
- &#8627; `cdn--START`
- &#8627; `cdn--COMPLETE`
- &#8627; `cli--START`
- &#8627; `cli--COMPLETE`
- &#8627; `vueJS_workshop--notes.md`
- &#8627; `vueJS_workshop--slides`
- &#8627; &#8627; `vue-slides.html`

Open this package up in your code editor.

---

### What is Vue?

* Vue is a javaScript framework for building front-end UI and single page applications
* In the same category as React, Preact, Angular and Ember
* Helps you to create a more scalable and maintainable codebase

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

\* [Source](https://gist.github.com/Restuta/cda69e50a853aa64912d)

### Features

* Progressive Javascript framework: add to just one part of your application.
* Scalable eco-system.
* Reusable components, with their own template, scripts and styles.
* All the best parts of React and Angular, without the bloat.

### What are we going to build?

Together we are going to build a simple single page application which searches for Github repos by keyword, and display them in a grid. The starter package includes two versions of the app, each with a `START` and `COMPLETE` version of the app:
  
  - `cdn--START`
  - `cdn--COMPLETE`
  - `cli--START`
  - `cli--COMPLETE`

To preview what our end goal will be, open the `cdn--COMPLETE` directory, and open `index.html` in your browser 

We will be working mostly in the `cdn` version of the app to cover the fundamentals of **Vue**. Later we will learn about the CLI, and how to extend our application features.

Let's get started!

---

## Getting started with the Vue CDN

* Grab the [CDN](https://vuejs.org/v2/guide/#Getting-Started) or [download](https://vuejs.org/v2/guide/installation.html#Direct-lt-script-gt-Include) the `.js` file.
* Note: there are **Development** and **Production** versions of both.
  * **Development** version includes helpful console warnings. (we will be using this one)
  * **Production** version is optimized for size and speed.

Start by opening up the project **cdn--START**. I have provided some starter HTML and CSS in order to speed along the process, and we will be building out all the functionality together.

### Add CDN script

Add the CDN at the bottom of the body
```html
<body>
  ...
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
</body>
```

### The Vue Instance

Add an `id` to the part of our page where the application will live. We'll use the id `app` and add it to the `.wrapper`.

```html
<body>
  <div id="app" class="wrapper">
  ...
```

Next, instantiate the Vue instance in a new script tag, below the `cdn`. This is done by creating a `new Vue()` and passing in a config `Object` as the argument:

```html
...
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>

  <script>
    const app = new Vue({
      el: "#app",
      data: {}
    });
  </script>
</body>
```

* `el`: The id of the element our app should be rendered in
* `data`: ( a.k.a. `state` ) data saved within our app. This is an `Object`.

### Vue.js devtools

We can confirm that our Vue app is initiating by checking the devtools. Install the Vue Devtools for you preferred browser:

  - [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

Open up the browser inspector/devtools, and click on the **Vue** tab.

We'll be returning to those tools a bunch throughout the process.

> **Devtools gotchas** ☝ 
> If the page uses a production/minified build of Vue.js, devtools inspection is disabled by default so the Vue pane won't show up.
>
> To make it work for pages opened via `file://` protocol, you need to check "*Allow access to file URLs*" for this extension in Chrome's extension management panel.
>
> <small>* From Vue-devtools documentation: [https://github.com/vuejs/vue-devtools](https://github.com/vuejs/vue-devtools)</small>

### State

Before we start adding some information to our app, we need to understand an important feature of the Vue instance: `state`.

The app's `state` keeps track of any dynamic data which may be used in various parts of the application. This could be pre-populated data, user input data, or data fetched from an API. You can think of `state` as your app's local storage.

This data could be changing rapidly with every user interaction, and the `state` will reflect the current data in real-time.

### Declarative Rendering

Let's add some dynamic messages to the searching and error sections of the app, by declaring a key and value on the `data` `Object`, otherwise known as `state`.

```javascript
...
  const app = new Vue({
    el: "#app",
    data: {
      searchingMessage: "Searching...",
      errorMessage: "Oops, nothing here 💩"
    }
  });
...
```

We can then render these messages inside of our `app` template using the mustache syntax, like `{{ propertyName }}`.

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
> Notice that we can reference the property on the `state` directly, without having to reference the main `app` `Object`, like `app.data.searchingMessage`.

### Vue Directives (and arguments)

There are a number of `directives` in Vue which let us apply logic inside of our templates:

* `v-model` (two-way data binding)
* `v-on` (event binding) [ shorthand: `@` ]
* `v-if` (conditional rendering)
* `v-for` (render loop)
* `v-bind` (attributes) [ shorthand: `:` ]

### *Directives*: `v-model`

In order to search for repos on Github, we need to grab the user input value from the search field, and pass it into the API call. Let's add a placeholder for this query as an empty string to our `state`, and call it `q`.

```javascript
...
  data: {
    q: "",
    searchingMessage: "Searching...",
    errorMessage: "Oops, nothing here 💩"
  }
...
```

We need a way to get this information from the `input[type="search"]`, and save it to our `q` property for use later.

**But!** At the same time, if we have a property saved in our `state` already, we want to make sure that we update the input to reflect that data 🤔.

The simplest way to achieve this is using Vue's build in two-way data binding with `v-model`!

```html
<form>
  <input type="search" name="search" id="search" required v-model="q">
  <label for="search">Repo search</label>
</form>
```

Open up the Vue devtools, and notice that as we type in the input, it automatically updates the `state`

Also notice that if we change, or pre-populate the state, this is automatically updated in the bound input. This is the power of two-way data binding!

### Methods

Now that we have the users search query, we want to use it to call the github API, and return some data. We'll create a couple of methods:

The first method is what we will call to fetch the data from the API, and the second is a method to reset our app before making another API call.

We'll start by adding a `methods` `property` to our app. `methods` is an `Object`.

```javascript
...
  const app = new Vue({
    el: "#app",
    data: {
      q: "",
      searchingMessage: "Searching...",
      errorMessage: "Oops, nothing here 💩"
    },
    methods: {}
  });
...
```

The endpoint we'll use to fetch this data is `https://api.github.com/search/repositories?q={query}`.

We'll start by adding a couple of properties to our `state` to keep track of when we are currently `searching`, or when there has been an `error`. We also need to add a property to save our returned repos into. This will be an `Array`:

```javascript
...
  data: {
    q: "",
    repos: [],
    searching: false,
    searchingMessage: "Searching...",
    errorHandling: false,
    errorMessage: "Oops, nothing here 💩"
  },
...
```

### Create `search` method

Let's build a `search` method which will take care of the following steps:
  - Prevent the form form refreshing the page on submit
  - Set our `searching` property to `true`
  - Call `resetSearch` (we'll build this `method` next)
  - Parse the response into usable `json`
  - Change the `searching` property to false, when finished searching.
  - If we got some responses, we want to save it to our `state` in `repos`
  - If we get no repos back, then we want to set the `errorHandling` to `true`.

```javascript
...
  methods: {
    async search(event) {
      event.preventDefault();
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
...
```

> **Note** ☝ 
> There are some more robust tools for making API calls, such as [Axios](https://github.com/axios/axios), which I would recommend looking into for production Vue applications. However, we'll be using `fetch` in these examples for simplicity.

### Create `resetSearch` method

Next we will create the method `resetSearch` to reset the `errorhandling`, and return `repos` to an empty `Array` when starting a new search.

```javascript
...
  methods: {
    async search(q) {
      ...
    },
    resetSearch() {
      this.errorHandling = false;
      this.repos = [];
    }
  }
...
```

> **Note** ☝ 
>Notice the `this` keyword in our methods? This is how we will reference any data property or method from within another part of our app, instead of referencing `app`.

### *Directives*: Event handling with `v-on`

We need the form to call the `search` method on `submit`. We can use the directive `v-on` to listed to DOM events, such as `submit`. We then reference the name of the method we want to call.

```html
...
  <form v-on:submit="search">
    ...
  </form>
...
```

Now that our `search` method has been called, we should have up to 30 `Objects` in our `repos` `Array`. Check in out in the DevTools.

### Event modifiers

Now, calling `event.preventDefault()` on the submit event is fine, but there's also a **Vue** way of modifying these types of events, which is more concise. These are called `event modifiers`, and are appended to the `event` using dot notation.

`v-on:submit.prevent="search"`
  * Prevent default submit behaviour (page refresh).

`v-model.number="example"`
  * Forces a chosen data type.

We can tack on a modifier to the event handler, instead of stating it in the method.

```html
...
  <form v-on:submit.prevent="search">
    ...
  </form>
...
```

Remove `event.preventDefault()` from the `search` method

```javascript
...
  methods: {
    async search() {
      // event.preventDefault(); <== Remove this line!
    ...
...
```

### *Directives*: Conditional Rendering with `v-if`

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

> **Note** ☝ 
> There is a similar directive to `v-if` called `v-show`. The main difference is that while `v-if` will render the component conditionally, `v-show` will always render the component in the DOM, but toggle the `display` CSS property.

### Directives: `v-for`

Now that we have some repos in our data, it's time to loop over, and display them on the page. We can loop over an `Array` of items in our `state` using `v-for`.

Use this directive on the element which needs to be repeated. In this case, the `<li>`.

```html
...
  <section class="results">
    <ul>
      <li class="repo" v-for="repo in repos">
      ...
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

> **Note** ☝ 
>While we can use the `{{ }}` syntax to render text content, we cannot use this _within_ attributes. Follow along to the next step to see how we `bind` data to these attributes.

### Directives: `v-bind`

In order to bind data to attributes in vue, we have to use another directive called ( *you guessed it* ) `v-bind`. This will allow us to dynamically update attributes.

In our cards above, we still need to hook up the `<a href="">`, and `<img src="" alt=">`.

When using `v-bind`, the contents of the attribute will be treated as javascript. So we can pass variables right into it.

```html
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

Writing `v-on` and `v-bind` on everything can get a little tedious after a while, so there are some convenient shorthands we can use to save some space/time.

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

Let's test the application, and make sure everything is working fine.

### Component Registration: `Vue.component`

Now that we have a working application, we can think about splitting the parts of our app into smaller `components`, in order to make them easier to maintain. 

It might not seem necessary at this scale, but it becomes increasingly helpful as your application expands.

Let's start by separating some of the smaller parts of our app into `components`, such as the `searching` and `errors` sections.

First, we need to `register` a new component, using `Vue.component()`. This method takes two arguments: a `name: String`, and a `config: Object`.

```javascript
...
  Vue.component('searching', {});
...
```

Inside the config `Object`, we can add data specific to this component, such as a `template: String` and `data: Function` (ie. `state`). 

```javascript
...
  Vue.component('searching', {
    template: "",
    data() {
      return {};
    }
  });
...
```

> **Note** ☝ 
> Notice that the `data` property on our component look a little different than before? Because components are reusable, we can no longer declare our state as an `Object`.
>
> If we did, every instance of that component would share the same data. Instead, we make `data` a `function`, which _returns_ an `Object`. This way, each component will have unique `state`!

Now, we can move the HTML `searchingMessage` in our `app` to the `data` in our component.

```javascript
...
  Vue.component('searching', {
    template: "",
    data() {
      return {
        searchingMessage: "Searching...",
      };
    },
  });
...
```

Let's take the HTML for the `searching section`, and put it inside of our template. You can use back-ticks ( \` \` ) in order make them multi-line.

```javascript
...
  Vue.component('searching', {
    template: `
      <section class="searching">
        <p>{{ searchingMessage }}</p>
      </section>
    `,
    data() {
      return {
        searchingMessage: "Searching...",
      };
    },
  });
...
```

> **Note** ☝
  > Remember, component templates must have a single root element.

> **Note** ☝ 
> Since we are now including the `searchingMessage` in this component, we need to remember to remove it from the main Vue `Object`.

Finally, we can render our component in our app, by using the component `name` as the element. Let's also include the `v-if` from before, but this time at the component level.

```html
...
  <div id="app" class="wrapper">
    ...
    <searching v-if="searching"></searching>
    ...
  </div>
...
```
> **Note** ☝ 
> You can't use self-closing components like `<my-component />` in Vue DOM templates (CDN), because it is not valid HTML. But it is still valid and recommended in single-file components (CLI). Components must also be lower-case, and cabab-case.

Let's do the same thing for the `errors` section.

```html
...
  <div id="app" class="wrapper">
    ...
    <searching v-if="searching"></searching>
    <errors v-if="errorHandling"></errors>
    ...
  </div>
...
```
```javascript
...
  Vue.component('errors', {
    template: `
      <section class="errors">
        <h2>{{ errorMessage }}</h2>
      </section>
    `,
    data() {
      return {
        errorMessage: "Oops, nothing here 💩",
      };
    },
  });
...
```

> **Note** ☝ 
> Since we are now including the `errorMessage` in this component, we need to remember to remove it from the main Vue `Object`.

Now that we have a little practice building components, let's take care of the more complex components of our app: _Search_, and _Results_!

```html
...
  <search></search>
...
```

```javascript
...
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
...
```

> **Note** ☝ 
> Since we are now including the `q` in this component, we need to remember to remove it from the main Vue `Object`.

Let's try out the app and make sure it still works!

**Uh oh!** Nothing is happening when we search, and we have an error in the console which looks like `[Vue warn]: Property or method "search" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property` 🤔. But isn't it thought?

The problem is that we are trying to call a `Function` that doesn't exist on this component. We need to find a way to call up to the main **Vue** `Object` to trigger our `search` method, and send along our query, `q`.

### Emit events

**Vue** has an elegant way of handling these sorts of events, where we need to trigger something in the parent `Object`, and pass along some arguments, using `$emit`.

We can start by replacing the name of the method we were trying to call directly, with `$emit()`. This will take two arguments: an `eventName`, so we can reference the event by name later, and the `[...args]` or payload. We'll call our event "search", and pass our query `q` as the argument. 

```javascript
...
  Vue.component('search', {
    template: `
      ...
      <form @submit.prevent="$emit('search-event', q)">
        ...
      </form>
      ...
    `,
    ...
  });
...
```

Now in our HTML, when we reference the search component, we can listed for our custom event called `search`. This is done the same way we listen for standard events with `v-on` or `@`, but referencing the custom name of the event, `search`. The argument that is expected is represented by the special `$event` property, containing the `payload` that was passed through.

```html
...
  <search @search-event="search($event)"></search>
...
```

By doing so we are passing the `q` to the `search` method.

> **Note** ☝ 
> It's worth nothing that HTML attribute names are case sensitive, and the browser will treat any uppercase letters as lowercase. So when using in-DOM templates like with the CDN, we must remember to use kabab-case on prop attributes.

We must also update our `search` method to expect the `$event` payload to be passed in. We'll name it `q`, and since we are no longer referencing `q` from the `state`, we can remove the `this.` from the url template string. We're using the passing in argument `q` instead.

```javascript
...
  methods: {
    async search(q) {
    ...
      const response = await fetch(`https://api.github.com/search/repositories?q=${q}`);
      ...
    },
    ...
  }
...
```

Let's convert our remaining _results_ section into its own component.

```html
...
  <results v-if="repos.length"></results>
...
```

```javascript
...
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
...
```

Let's try out the app and make sure it still works! 

**Uh oh!** Another error, similar to before `[Vue warn]: Property or method "repos" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property`.

Here we are referencing `repos`, but this component does not have access to it in the component. Let's solve this in the next step, using `props`.

### Props

In order to allow our `results` component access to the `repos` in the main **Vue** `Object`, we need to pass `props` to the component.

`props` is short for "properties", and is used to pass data to components, similar to the way we pass arguments to functions.

We pass a `prop` to a component using `v-bind`, similar to when we need to dynamically update an attribute. We start be giving our `results` component an attribute with the name we want to represent it, and pass in the `repos` in our data `Object` as the argument. We can also use the short-form, as follows:

```html
...
  <results :repos="repos" v-if="repos.length"></results>
...
```

> **Note** ☝ 
> We use `v-bind` or `:` to pass dynamic props to a component. But you can also pass hard-coded props by omitting the prefix, like `title="Vue JS Workshop"`. In this case, the `prop` is treated as a `String`.

In the component itself, we need to register the prop, so that the component knows what to expect. In its simplest form, `props` can be represented by an `Array` of `Strings`.

However, you can also make `props` an `Object`, with the key being the name of the prop, and the value being the prop type, such as `String`, `Array`, `Object` etc. This can help offer useful warnings if passing an unexpected prop type.

```javascript
...
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
...
```

Check it out. Yay, our application works again!

---

## Creating an app using Vue CLI 3

The **Vue CLI** (**C**ommand **L**ine **I**nterface) is the official tool for spinning up a project with all the boilerplate needed for a fully functional web-application. If you have used `create-react-app` before, it is similar to this.

### Install Vue CLI

In order to create a project with the Vue CLI, we need to first install it with `npm` or `yarn` in your terminal. We'll be using `npm` for all of these examples.

Getting started instructions: [https://cli.vuejs.org/](https://cli.vuejs.org/),

Open up your terminal, and run one of the following commands. I'll be using `npm`.

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

To create a new **Vue** app we type `vue create` followed by the `<project-name>` of the project. This will launch a series of configuration options, and you can choose either a preset, or fully configure it to your needs.

Let's create a `test` project. I'm going to `cd` to my desktop, since this will be a temporary test. 

```bash
vue create test
```

This will begin a series of steps in your terminal to create your project. For this example, we will choose the `default (babel, eslint)` option.

```bash
Vue CLI v3.0.1
? Please pick a preset: (Use arrow keys)
❯ default (babel, eslint)
  Manually select features
```

When complete you should get the message:

```bash
🎉  Successfully created project test.
👉  Get started with the following commands:

 $ cd test
 $ npm run serve
```

Follow the commands above to start your server and see your boilerplate app. Your application is now running at [localhost:8080/](http://localhost:8080)

Ok, now quit the server, and throw the test project in the trash 🗑. We're starting over with `vue ui`!

> **Note** ☝ 
>To kill the server at any time, hit `control + c`

### Creating a project -- `vue ui`

The **new** Vue UI will launch a localhost with a GUI (**G**raphical **U**ser **I**nterface), which makes setting up a project a bit more user friendly. And you can use your mouse!

In the terminal, type:

```bash
vue ui
```

This will open Vue UI in the browser, and you will see many of the same options as in the console, but in a more clickable fashion.

Let's walk through the steps to create a `test` project again.

  1. Click the `Create` Tab
  1. Navigate to location you want to store it on your computer
  1. Click `Create New Project Here`
  1. Name it
  1. Select `Package Manager` (`npm`)
  1. `Additional options`, `Git repository` (default)
  1. Click `Next`
  2. Select a preset (Manual)
  3. Select your features
  4. Configuration
  5. Click `Create Project`

### Start Server

With a project created, we can now start our **Vue** server, and see the results. The CLI Service is built on top of `webpack`, but luckily we won't have to do anything to get it up and running, it's pre configured.

You can leave the UI running, or hit `control + c` to terminate it. It doesn't have to be running to launch your application. `cd` into your project and run:

```bash
npm run serve
```

Your application is now running at [localhost:8080/](http://localhost:8080)

> **Note** ☝ 
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

You can again trash this test project if you want 🗑.

### Download example project starter files: `cli--START`

To make the process more efficient, I have created a starter project for you, with all the work we have done previously, broken into components.

Open up `cli--START` in the starter files, or download them at [https://github.com/rbnhmll/vue-workshop](https://github.com/rbnhmll/vue-workshop)

Locate and `cd` into this folder and run:

```bash
npm install
```

This will install all of the required `node_modules`. It can take a minute or two. Once completed, run:

```bash
npm run serve
```

The application is now running at [localhost:8080/](http://localhost:8080)

> **Note** ☝ 
> To kill the server at any time, hit `control + c`

### Adding features to our app

I'm going to open up the final product (cli--COMPLETE) in the browser, and show you what features we are going to be adding.

The goal is to expand the functionality of our app so we can toggle between searching for repos, and searching for repos by developer.

Let's get started!

### Getting to know the starter files

This starter pack includes the same files as the boilerplate we created with the Vue CLI. The only difference is that I have created single file components for everything we worked on previously. 

Let's take a look.

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

> **Note** ☝ 
> If your syntax highlighting in `.vue` files is not working properly, you may still have to install the appropriate code editor package noted near the beginning of these notes.

### Create a new Component: SearchType.vue

To make a new component, we will create a new `.vue` file inside the `components` directory. We'll call it `SearchType.vue`.

This purpose of this component will be to switch between searching for **Repos** and **Developers**.

Once created, we will input the base code above to get our component started.

Let's add some starter code to give the component some structure:

```html
<!-- SearchType.vue -->
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

And some basic styles:
```html
<!-- SearchType.vue -->
<style lang="sass" scoped>
  // Some base styles so it looks 👌
  h2
    font-size: 2rem
    margin-bottom: 0
  label
    margin: 0 10px
</style>
```

> **Note** ☝
> Note that we've have included the `lang` attribute, and assigned `sass`. This will allow us to use the SASS syntax inside of our styles. The SASS package was pre-installed in these starter files.
>
> Additionally, we have a `scoped` attribute, which will insure that these styles pertain to this component alone. Without this, they would apply globally.

### Add component to `Search.vue`

In order to see this component in our app, we need to import it and render it on the page. We're going to use this component inside of `Search.vue`, because it will directly effect what we are searching for.

First, let's import the component:

```html
<!-- SearchType.vue -->
<script>
import SearchType from '@/components/SearchType.vue';

export default {
  ...
};
...
</script>
```

> **Note** ☝
> Notice how we can use the `@` symbol as an alias for the `src` folder. This can make it a lot easier to find files, instead of having to go up the directory tree using `../`. Also helps when you need to organize components into folders without breaking the imports.

Now with the component imported, we can add it to our template

```html
<!-- SearchType.vue -->
<template>
  ...
  <form @submit.prevent="search">
    ...
    <search-type />
  </form>
  ...
</template>
```

> **Note** ☝
> It's best practice to add components to the template using kabab case, so that they are in line with html standards. And since our component doesn't have any content, it can also be a self-closing element.

We should now see some content inside of our form, displaying a `radio` button. This is the basic template of our component.

### Building the SearchType functionality

We want to give our user the ability to choose between `repo` and `developer`. Depending on which option is selected, we can change the type of search we want to perform.

Let's put these as options inside our `SearchType` `state`, so we can loop over them later. `searchMethods` will be an `Array` of `Strings`.

```html
<!-- SearchType.vue -->
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

> **Note** ☝ 
> Remember, in components `data` must be a function which returns an `Object`, or it will not work properly.

Now in our template, we can loop over these options in order to show the different radio buttons. There's a few steps to hooking up these inputs correctly, so we'll go through it step by step.

First, let's loop over the `searchMethods` using `v-for`:

```html
<!-- SearchType.vue -->
<template>
  <div>
    <h2>Search Type</h2>
    <label v-for="type in searchMethods" for="">[[TYPE]]
      <input type="radio" name="selectedSearchMethod" id="" value="">
    </label>
  </div>
</template>
```

⚠️ If we look at our terminal, we should see an error, warning us about:

```bash
error: Elements in iteration expect to have 'v-bind:key' directives
```

When looping over items in Vue it is important to provide a key along with each element, so that Vue knows which element to update if the data changes. This should be a unique identifier.

The data for `searchMethods` doesn't have any unique identifiers, other than the name itself. We can use the name as the `key`, or invoke another variable as the iterator, `i`, like so:

```html
<!-- SearchType.vue -->
<template>
  <div>
    ...
    <label v-for="(type, i) in searchMethods" :key="i" for="">[[TYPE]]
      ...
    </label>
  </div>
</template>
```

> **Note** ☝ 
> Remember that `:key` is the shorthand for `v-bind:key`

Now that we're looping over `searchMethods`, we can use the `type` to fill in some of the missing info like the label text, binding the label to the input using `for` and `id`, and setting a `value`.

```html
<!-- SearchType.vue -->
<template>
  <div>
    ...
    <label v-for="(type, i) in searchMethods" :key="i" :for="type">{{ type }}
      <input type="radio" name="selectedSearchMethod" :id="type" :value="type">
    </label>
  </div>
</template>
```

### Emit change event back to parent component

You can now select the search type by radio button, but it doesn't really do anything yet. We need to pass this selection info back up to the main component, `App.vue` where our main application `state` is.

We need to watch the radio buttons for a `change` event, and then pass the value up the chain to the `App` component `data` `Object`.

Start by watching for a change event on the radio inputs, and the calling a method that we're going to create called `updateSearchType`:

```html
<!-- SearchType.vue -->
<template>
  <div>
    ...
      ...
      <input type="radio" name="selectedSearchMethod" :id="type"
      :value="type" @change="updateSearchType($event)">
      ...
  </div>
</template>
```
  
> **Note** ☝ 
> If you want access the original DOM event, you can pass it into a method using the special `$event` variable.

Create the `updateSearchType` method:

```html
<!-- SearchType.vue -->
<script>
export default {
  name: 'SearchType',
  ...
  methods: {
    updateSearchType(event) {
      console.log(event);
    },
  },
};
</script>
```

What we want to do next is `$emit` an event called `handleChange`, and pass the data up to the parent component and finally to `App.vue`. For clarity, we'll create an `Object` with two properties: `key` and `val`.

```html
<!-- SearchType.vue -->
<script>
export default {
  name: 'SearchType',
  ...
  methods: {
    updateSearchType(event) {
      this.$emit('handleChange', {
        key: event.target.name,
        val: event.target.value
      });
    },
  },
};
</script>
```

If you check the `Events` tab in the Vue devtools, you can see the event being called whenever the Search Type is changed.

```bash
handleChange $emit by <SearchType>
```

Select an event, and in `event info`, we can confirm the payload:

```yml
event info
  name: "handleChange"
  type: "$emit"
  source: "<SearchType>"
  payload: Array[1]
    0: Object
      key: "selectedSearchMethod"
      val: "repo"
```

### Watch for `handleChange` `$event` in `Search.vue`

Inside our `Search` component, we want to watch for an event called `handleChange`. We can use `v-on:`, or the `@` shorthand like this:

```html
<!-- Search.vue -->
<template>
  <section class="search">
    ...
      <search-type @handleChange="" />
    ...
</template>
```

Now, `Search.vue` doesn't need this info directly, but it does need to continue passing the info back up to its parent component, `App.vue`. We'll create another `$emit` event, and pass the `$event` as the payload.

```html
<!-- Search.vue -->
<template>
  <section class="search">
    ...
      <search-type @handleChange="$emit('handleChange', $event)" />
    ...
</template>
```

### Watch for `handleChange` `$event` in `App.vue`

Like before, we will watch for the `handleChange` `$event` in the `App.vue` component. But in this case we are going to pass the payload to a `method` called `handleChange`.

```html
<!-- App.vue -->
<template>
  ...
    <Search
      @handleChange="handleChange($event)"
      @handleFlags="handleFlags($event)"
      @resetSearch="resetSearch"
    />
  ...
</template>
```

Create a `handleChange` method. It will accept the `$event` payload as an argument. We'll destructure it to pull the `key` and `val` properties off, and use that to set the property on the `state` for use later:

```html
<!-- App.vue -->
...
<script>
...
data() {
  return {
    selectedSearchMethod: 'repo',
    ...
  };
},
export default {
  name: 'App',
  ...
  methods: {
    ...
    handleChange({key, val}) {
      this[key] = val;
    },
  },
};
</script>
...
```

We set the default `selectedSearchMethod` to `repo`.

If we check the Vue devtools, we should now be able to see the `selectedSearchMethod` property update when we select the Search Type.

> **Note** ☝ 
> There is currently a bug which sometimes prevents live update of the data object in the devtools.

### Update Heading and input label to reflect `selectedSearchMethod`

We can now update the text in the `Search.vue` `<h1>` to reflect the type of search we want to perform. In order for `Search.vue` to have access to `selectedSearchMethod`, we need to pass it as a `prop`, using `v-bind:`, or the `:` shorthand:

```html
<!-- App.vue -->
<template>
  <div id="app" class="wrapper">
    <Search
      @handleChange="handleChange($event)"
      @handleFlags="handleFlags($event)"
      @resetSearch="resetSearch"
      :selectedSearchMethod="selectedSearchMethod"
    />
    ...
  </div>
</template>
```

Then, inside of `Search.vue`, we need to register the props that the component expects:

```html
<!-- Search.vue -->
<script>
...
export default {
  name: 'Search',
  components: { SearchType },
  data() {
    return {
      q: '',
    };
  },
  props: {
    selectedSearchMethod: String
  },
  ...
};
</script>
```

Reference the prop to update the `<h1>` and `<label>` content.

```html
<!-- Search.vue -->
<template>
  <section class="search">
    <h1>Search by Github {{ selectedSearchMethod }}</h1>
    <form @submit.prevent="search">
      ...
      <label for="search">{{ selectedSearchMethod }} search</label>
      ...
    </form>
  </section>
</template>
```

### Pre-select radio based on parent state

The Search Type is updating nicely, but the radio button is not pre-selected on page load. We'll pass the `selectedSearchMethod` prop down to `SearchType.vue`:

```html
<!-- Search.vue -->
<template>
  <section class="search">
    ...
    <form @submit.prevent="search">
      ...
      <search-type @handleChange="$emit('handleChange', $event)"
      :selectedSearchMethod='selectedSearchMethod' />
    </form>
  </section>
</template>
```

Now register the expected prop in `SearchType.vue`:

```html
<!-- SearchType.vue -->
<script>
export default {
  name: 'SearchType',
  ...
  props: {
    selectedSearchMethod: String,
  },
  ...
};
</script>
```

In the template, we can check to see if the `selectedSearchMethod` is the same as the radio button `type`. If it is, we want to add the checked attribute using `v-bind:`, or the `:` shorthand:

```html
<!-- SearchType.vue -->
<template>
  <div>
    ...
    ...
      <input type="radio" name="selectedSearchMethod" :id="type"
      :value="type" @change='updateSearchType($event)'
      :checked="selectedSearchMethod === type">
    ...
  </div>
</template>
```

You'll notice that if you refresh the page, the "repo" option will now be pre-selected.

> **Note** ☝ 
> When binding to attributes which have optional arguments, like `checked`, Vue will apply the attribute if the statement is true, and will apply nothing if it is false.

### Update the search function

One issue still remains: our app's search functionality doesn't work when the "Search Type" is set to `developer`.

This is because there are different API end points to search for repos and developers:
- Repos: `https://api.github.com/search/repositories?q=[QUERY]`
- Repos: `https://api.github.com/users/[QUERY]/repos`

This means that depending on what we are searching for we need to be able to change the end point dynamically. In addition to this, each endpoint returns the data in a different way, and we need to account for this.

To prepare for how the data comes back to us, let's make a small change to our `search` method:

```html
<!-- Search.vue -->
<script>
...
export default {
  name: 'Search',
  ...
  methods: {
    async search() {
      ...
      const response = await fetch(this.searchEndpoint);
      const json = await response.json();

      // const items = json.items; <== updating this
      const items = this.selectedSearchMethod === 'repo' ?
                    json.items :
                    json;
      ...
    },
  },
  ...
};
</script>
```

Next we update our end point based on `selectedSearchMethod`.

### Computed properties

`computed` properties are similar to those stored inside the `state`, except that they are re-evaluated any time their dependencies change. The dependencies can be in the `state`, or other `computed` properties. This makes it very convenient to keep a property up to date when other data changes.

If you look inside of `Search.vue`, we already have one `computed` property which returns the endpoint:

```html
<!-- Search.vue -->
<script>
...
export default {
  name: 'Search',
  ...
  computed: {
    searchEndpoint() {
      return `https://api.github.com/search/repositories?q=${this.q}`;
    },
  },
};
</script>
```

This endpoint will update every time the query input changes, giving us a dynamic end point to call.

> **Note** ☝ 
> It's important to note that a `computed` property is a `Function` that _returns_ a value.

Let's update the `searchEndpoint` `computed` property to change the endpoint based on the `selectedSearchMethod`:

```html
<!-- Search.vue -->
<script>
...
export default {
  name: 'Search',
  ...
  computed: {
    searchEndpoint() {
      return  this.selectedSearchMethod === "repo" ?
              `https://api.github.com/search/repositories?q=${this.q}` :
              `https://api.github.com/users/${this.q}/repos`;
    },
  },
};
</script>
```

Now our search works again for both `repo` and `developer`!

### *Filters*: Capitalize

One thing still isn't quite right!

The `selectedSearchMethod` is in lowercase when when use it in the template. It would look better if it was Capitalized. We could do it by changing the data to use capitalized strings, but this would mean making changes to the actual data, and we don't want that. We could also wrap those words in `<span>` and capitalize them with CSS.

But there's a much more interesting way to do it in **Vue**, using `filters`.

A `filter` is used to apply text formatting on render, and can be used in both **mustache interpolations** and `v-bind:` expressions, and uses the pipe syntax:

```html
{{ String | filterName }}
```

We'll create a new filter that will capitalize the first letter of a string. To make it globally accessible, we will add it to the main Vue `Object`, inside of `main.js` using `Vue.filter()`. This will accept a `name` and a `Function` as its arguments, and returns a `String`, as follows

```javascript
// main.js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// Custom filter to capitalize first letter
Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

new Vue({
  render: h => h(App)
}).$mount('#app')

```

Once initiated, it will be available in all components. Let's update the `Search.vue` component:

```html
<!-- Search.vue -->
<template>
  <section class="search">
    <h1>Search by Github by {{ selectedSearchMethod | capitalize }}</h1>
    <form @submit.prevent="search">
      <input type="search" name="search" id="search" v-model="q" required>
      <label for="search">{{ selectedSearchMethod | capitalize }} search</label>
      <search-type @handleChange="$emit('handleChange', $event)" :selectedSearchMethod='selectedSearchMethod'/>
    </form>
  </section>
</template>
```

---

### 🔥🔥🔥 That's it! We did it! 🔥🔥🔥

You now have a fully functional search application, and have learned the fundamental principals of Vue.js!

### But wait, there's more!

Vue has a bunch of additional tools which parallel other popular frameworks

* Vuex (like Redux)
* Vue-router (like React-router)
* Nuxt.js (SSR, like Next)

---

# Thank you for coming out!

I really appreciate you making the effort to join me to learn about Vue. I hope that you learned a lot, and are excited to start building fun things with Vue!

To keep improving, I would love it if you would fill out this [optional Workshop Feedback Survey](https://docs.google.com/forms/d/e/1FAIpQLScEBms7qxaPhZj9mYqfwKKBcj41b3jQKJT68Pro-5wSm7-O5w/viewform?usp=sf_link)

Also, you can find me on the internet:
[Robin Hamill](https://www.robinhamill) | [Vue JS Workshop](https://www.vuejsworkshop.com/) | [Email](mailto:hi@robinhamill) | [Twitter](https://twitter.com/rbnhmll)