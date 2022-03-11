<!-- Please update value in the {}  -->

<h1 align="center">Test Vue, Table API</h1>

<div align="center">
  <h3>
    <a href="https://{[your-demo-link.your-domain](https://vuetest-cf8a7.web.app/)}">
      Demo
    </a>
    <span> | </span>
    <a href="https://{[your-url-to-the-solution](https://github.com/SebasttianDaza/vueTest)}">
      Solution
    </a>
    <span> | </span>
    <a href="https://emprendeyourlifestyle.com/portafolio/">
      Website
    </a>
    <span> | </span>
    <a href="http://apitest.cargofive.com/api/ports">
      API
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
- [How To Usea](#how-to-usea)
- [Documentation](#documentation)
    - [File Principal](#file-principal)
    - [Folder Principal-](#folder-principal-)
    - [Function Principal](#function-principal)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![screenshot](https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/testVue.png?alt=media&token=df8e0daa-a9d3-4334-ad90-a2ba88d571c9)

Website developed with Vue.js and other techonologies, this project is a test where you paint data from API in a table with their differents records, it had as assumptions:
- Connect to API for Endpoint 
- Show results in a table with all data
- The results should be paginated
- And finally should have filters

All this was accomplished and also added a search bar with the filters

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [Vue 3](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)
- [Vite.js](https://vitejs.dev/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Firebase](https://firebase.google.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Vue Loading Overlay](https://github.com/ankurk91/vue-loading-overlay)
- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [Figma](https://www.figma.com/)



## How To Usea 

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
$ npm install

# Run the app
$ npm run dev

# Compilation
$ npm run build

```

## Documentation

#### File Principal 
  - [JS](src/main.js) Implement the main App
  - [Vue](src/App.vue) Main App and Implement all components and logic
  - [HTML](index.html) Main HTML
  - [Dist](dist/index.html) Implement all site compiled
#### Folder Principal-
  - [.firebase](.firebase/hosting.ZGlzdA.cache) It has files for the hosting
  - [.github](.github/workflows/firebase-hosting-merge.yml) It has the logic to compilation and implement all the project to do push of repository.
  - [src/components](src/components) It has all the components
  - [src] It has all the files of Vue and JS

#### Function Principal
  -  [getData](src/components/info.vue) Get data from API
  -  [nextPage](src/components/info.vue) Get next page with the results
  -  [prevPage](src/components/info.vue) Get previous page with the results
  -  [searchData](src/components/info.vue) Search data in the table depending on the type of filter

## Contact


- Website [your-website.com](https://emprendeyourlifestyle.com/)
- GitHub [@your-username](https://github.com/SebasttianDaza/vueTest)
- Twitter [@your-twitter](https://twitter.com/SebasttianDaza)
