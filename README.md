# Horned Beasts

### [HORNED BEASTS DEMO](https://aaron-imbrock.github.io/horned-beasts/)

An application that displays images and information of horned animals.
This application will allow you to filter the images by number of horns and chose your favorite image.

Deployment code can be found under the [gh-pages branch](https://github.com/aaron-imbrock/horned-beasts/tree/gh-pages).

## To run this project

- Clone the repo
- `cd` to the repo and run: `npm install`.

From the repo folder on your local machine, you can then run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\

## Deployment

Deployment configuration for GitHub pages was done using steps from [Deploying a React App* to GitHub Pages](https://github.com/gitname/react-gh-pages).

## Feature Tasks

- The App component renders a Header, Footer and Main component, each of which is defined in their own files.

- The Header component has a `<h1>` with a title.

- The Footer component has my name as the author.

- The Main component renders at least two copies of a component called HornedBeast.

  - The Main component:
    - passes title, imageUrl, and description into each HornedBeast component.
    - you can pass whatever title, url and description that you want into each HornedBeast component.
  - The HornedBeast component contains:
    - an `<h2>` that displays the title of the animal.
    - an `<img>` element with src, alt and title attributes.
    - and a `<p>` that displays the description.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


