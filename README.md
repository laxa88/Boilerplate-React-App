![travis](https://travis-ci.org/laxa88/Boilerplate-React-App.svg?branch=master)

# Boilerplate React App

This is a boilerplate project for React, based on [this scotch.io tutorial](https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel).

Great for beginners or developers who want to start off with bare minimum environment to get a React project up and running. This project is primarily for myself to quick-start with React projects, but perhaps it could prove useful for other developers too :)

## Minimum Project Contents:

- **react**
- **react-dom**
- **webpack** - used for splitting, transforming and bundling resource files.
- **webpack-dev-server** - for serving the development files, and hot-loading webpage upon code updates.
- **babel** - compiles ES6 and JSX into native Javascript code. Why? Because ES6 and JSX are not available in modern browsers (yet).
- **html-webpack-plugin** - injects script and stylesheet tags into the html.

## Requisites

- **NodeJS** - for hosting a server and using the NPM (Node Package Manager)
- **Yarn** - an enhanced version of npm

## Recommended Tools

- **Visual Studio Code** - Cross-platform, lightweight IDE. Has great plugins that make development painless.
- **Sublime Text** - Cross-platform, lightweight IDE. UI is less appealing, but performance is faster than VS Code.
- **Cmder** - (Windows) Portable CLI. I use it solely for the coloured UI and multiple-tab feature.

## Quick Usage Notes

- `npm install` - Run this once to update/install all node modules required for the project.
- `npm run <command>`
  - Refer to `package.json` to add/modify commands in the `scripts` property.
  - `npm run start` - Starts development server on (default) localhost:8080
  - `npm run build` - Builds and generates a production `bundle.js` in the `dist` folder.

## Releases

As this repo may potentially grow with additional code that makes it less boilerplate-y, check the "Releases" tab for older versions.