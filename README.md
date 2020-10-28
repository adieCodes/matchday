# Introduction

Football data widget which pulls its data from an api to display match statistics.

**Please note**, only the General Section has been implemented.

# Deployed application

You can find a live version of the application via this [link](https://main.d2rljw52uwfchc.amplifyapp.com/). Each time code is merged into the `main` branch it re-deploys using [AWS Amplify](https://aws.amazon.com/amplify/).

# Getting Started

The application uses [React](https://reactjs.org/) and is written in TypeScript using [Create React App](https://create-react-app.dev/).

You will need to have the appropriate version of Node installed, I recommend using [NVM](https://github.com/nvm-sh/nvm) and adding the 'Deeper Shell Integration' as that will utilise the `.nvmrc` to switch to the relevant version of Node for the project.

Once Node is installed you will need to run `npm install` to add the dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Pre-commit hook

When committing a pre-commit hook ensures there are no syntax or formatting errors via a combination of [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).
