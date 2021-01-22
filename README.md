This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Node version

This project uses node 14.15.4.

## Typescript

To enable prettier with typescript go to your IDE settings and add:

```
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```

replace with your own IDE's prettier

## Setup

To install dependencies use

npm install

## Scripts

Run the development server:

```
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run the build:

```
npm run build
```

Start the production build once you've built

```
npm run start
```

## Storybook

This project uses React storybook for component documentation.
Click events should be registered using storybook/addon-actions.
Instead of using knobs in Storybook we are using the recently released controls.
Have a look here for referencing them:

https://storybook.js.org/docs/react/essentials/controls

### Localization

The project is localized using [React International](https://formatjs.io/docs/getting-started/installation/).

Localization logic is handled in the `LocalizationProvider`.

When adding and removing locales, you need to modify locale files in `./src/i18n/messages/`.

### Environment

Copy the `.env.example` files:

    cp .env.example .env
    cp ./backend/.env.example ./backend/.env

Modify any relevant environment variables.

## Unit tests

Test Coverage for the Repo should ideally be at least 70%.

Run the unit tests:

    npm test

Test for coverage using

    npm run test:coverage

To view test coverage file

    open ./coverage/lcov-report/index.html

## Integration tests

Ideally we will build and maintain container level tests from the beginning as the application grows. See `./pages/__tests__/examplePage.test.tsx` for an example of testing containers with Redux/API Calls.

## Redux

This project intends to use Redux for -local- global state only. The idea is that server state should be handled by React-query and that our backend or server should always be the single source of truth for API Data.

Files for redux can be found int `./src/redux/`

## React-Query

This project uses React-Query to handle server state.

Preferably React-Query hooks should be kept in `./src/services` as they are related to API Data. See example inside.

For more information on React-Query: https://react-query.tanstack.com/

A good tutorial video to watch is: https://www.youtube.com/watch?v=DocXo3gqGdI&t=6s Although React-Query V3 has come out since then the syntax has only changed slightly and the same principles still apply.

## Theming

This project uses styled-components for theming.

To be implemented: The theme for the project is imported from the Component Library. It should be customizable before being exported and passed into the theme.

All Components built should be themed using the theme colors/typescale/type-weight/spacing etc.

## Folder Architecture and Purpose

### Below is a list of folders with their intentions.

`./pages/` - This folder houses the pages. The name of the page file is linked to it's routing. For example `./pages/examplePage.tsx` is for the route `/examplePage`. These pages are intended to be used at container components where all API calls/redux dispatches + state selectors/smart logic should go.

For more information on this architecture see: https://gist.github.com/chantastic/fc9e3853464dffdb1e3c for a good example.

`./src/pages/` - This is the folder where our page components should go. These would consume all the "smart" logic from the containers in the file path above. For an example see `./src/pages/ExamplePage/`. Ideally these would be presentational layout components used for things like creating spacing between sections or aligning things with flexbox/grids.

`./src/pages/Page/components` - This is where I'd like all the meat of the pages to be. This is where we could consume re-usable components. Build sublayouts for sections. Render API/Redux/Content data. (TBD: Unless we use the Contentful mapping strategy for building pages then this section is completely moot.). See `./src/pages/ExamplePage/components` For an example.

`./src/i18n` - This is where the LocalizationProvider lives as well as all the translation files.

`./src/components/` - These are where all our components will live. Ideally re-usable or components that are specific to this project that don't warrant being in the Component Library.

`./src/contexts/` - This is where any additionally defined Contexts using the React Context API will go.

`./src/services` - This is where anything having to do with API/API Calls/Contentful/API Services will go. For example things pertaining to Contentful clients/config, auth0 etc.

`./src/test-helpers/` - Where any additional test-helpers will go. This includes any mocks for service workers/window objects/test-data etc.

`./src/theme/` - Where all files pertaining to the theme go as well as the Globalstyles.

`./src/utils/` - Any utility functions that can't categorized anywhere else belong here. Ideally re-usable functions that can be re-used across the project.
