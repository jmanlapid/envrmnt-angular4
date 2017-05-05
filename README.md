# Envrment Angular 4 Assignment

## Requirements

#### 1) Create a single page Angular2 app with 3 views : Home page, Login page and dashboard page; using dummy json data as model data.
I used the [angular-webpack starter](https://github.com/preboot/angular-webpack) to get up and running fast. Each page is a component which is router'ed into the main `AppComponent`. The dummy json data `mock-users` and `mock-videos` are located in `./src/app/shared` which are injected into the `Auth` service and `DashboardComponent`, respectively.

#### A) Router in HTML5MODE and support customized navigation: for example, if user visits dashboard page without login, redirect to home page. If user login via Home-Login- Dashboard, at this point, back key will go back to Home, not Login page;
If the user is on Home and they click the Login link at the top left as handled in the `AppComponent`, a special router config flag  `this.router.navigate(['/login'], { skipLocationChange: true });` prevents the user going back the login page from dashboard. I implemented `canActivate` router feature used to prevent user from going into `/dashboard` without being logged in.

#### B) Create a vrplayer component directive, <vrplayer></vrplayer>, which take options:{url:videoUrl} . to make it simple, define your own dummy player JS library, which may have play(), stop(), pause() functions.
I combined these requirements with `D` to reduce redundancy such that the `<vrplayer [url]="video.id">` is a wrapper around the YouTubes api where `video.id` is the `id` of the YouTube video. It has the basic play, stop, and pause functions like any other video player. The YouTube player is available on the dashboard page after logging in. The player defaults to the first item on the list. Clicking any name in the list will load that video into the player.

#### C) Provide a build system/script so the files are concatenate and minified with version #.
Running the basic [npm version](npm versioning) CLI tool will trigger the version npm script `npm run build && git add -A -f dist`. This does the build process which concatenates everything via webpack and bumps the `package.json` version according to the previous command. The build is located in the `./dist` directory.

#### D) 2. For candidates without WebGL experience: Create a video player using YouTubes api.
These requirements were combined with `B` to reduce redundancy. I installed the `@types/youtube` for registering typings and `ng2-youtube-player` for the youtube player api.

~~1. For candidates who only have WebGL experience: Create a component directive, which allows a user to add the Cubenado(detail see Cubenado Assignment) using a customized HTML tag < cubenado ></ cubenado >. This tag will accept cube number and speed/
randomness as options.~~

# angular-webpack

[![Dependency Status](https://david-dm.org/preboot/angular-webpack/status.svg)](https://david-dm.org/preboot/angular-webpack#info=dependencies) [![devDependency Status](https://david-dm.org/preboot/angular-webpack/dev-status.svg)](https://david-dm.org/preboot/angular-webpack#info=devDependencies)
[![Join the chat at https://gitter.im/preboot/angular-webpack](https://badges.gitter.im/preboot/angular-webpack.svg)](https://gitter.im/preboot/angular-webpack?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A complete, yet simple, starter for Angular v2+ using Webpack.

This seed repo serves as an Angular starter for anyone looking to get up and running with Angular and TypeScript fast. Using [Webpack](http://webpack.github.io/) for building our files and assisting with boilerplate. We're also using Protractor for our end-to-end story and Karma for our unit tests.
* Best practices in file and application organization for [Angular](https://angular.io/).
* Ready to go build system using [Webpack](https://webpack.github.io/docs/) for working with [TypeScript](http://www.typescriptlang.org/).
* Testing Angular code with [Jasmine](http://jasmine.github.io/) and [Karma](http://karma-runner.github.io/).
* Coverage with [Istanbul](https://github.com/gotwarlost/istanbul)
* End-to-end Angular code using [Protractor](https://angular.github.io/protractor/).
* Stylesheets with [SASS](http://sass-lang.com/) (not required, it supports regular css too).
* Error reported with [TSLint](http://palantir.github.io/tslint/) and [Codelyzer](https://github.com/mgechev/codelyzer).
* Documentation with [TypeDoc](http://typedoc.org/).

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

```bash
# clone our repo
$ git clone https://github.com/preboot/angular-webpack.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```
go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Developing](#developing)
    * [Testing](#testing)
    * [Production](#production)
    * [Documentation](#documentation)
* [Frequently asked questions](#faq)
* [TypeScript](#typescript)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v6.x.x`+) and NPM (`3.x.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Developing

After you have installed all dependencies you can now start developing with:

* `npm start`

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The application can be checked at `http://localhost:8080`.

As an alternative, you can work using Hot Module Replacement (HMR):

* `npm run start:hmr`

And you are all set! You can now modify your components on the fly without having to reload the entire page.

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

#### 2. End-to-End Tests (aka. e2e, integration)

* single run:
  * in a tab, *if not already running!*: `npm start`
  * in a new tab: `npm run webdriver-start`
  * in another new tab: `npm run e2e`
* interactive mode:
  * instead of the last command above, you can run: `npm run e2e-live`
  * when debugging or first writing test suites, you may find it helpful to try out Protractor commands without starting up the entire test suite. You can do this with the element explorer.
  * you can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

## Production

To build your application, run:

* `npm run build`

You can now go to `/dist` and deploy that to your server!

## Documentation

You can generate api docs (using [TypeDoc](http://typedoc.org/)) for your code with the following:

* `npm run docs`

# FAQ

#### Do I need to add script / link tags into index.html ?

No, Webpack will add all the needed Javascript bundles as script tags and all the CSS files as link tags. The advantage is that you don't need to modify the index.html every time you build your solution to update the hashes.

#### How to include external angular libraries ?

It's simple, just install the lib via npm and import it in your code when you need it. Don't forget that you need to configure some external libs in the [bootstrap](https://github.com/preboot/angular-webpack/blob/master/src/main.ts) of your application.

#### How to include external css files such as bootstrap.css ?

Just install the lib and import the css files in [vendor.ts](https://github.com/preboot/angular-webpack/blob/master/src/vendor.ts). For example this is how to do it with bootstrap:

```sh
npm install bootstrap@next --save
```

And in [vendor.ts](https://github.com/preboot/angular-webpack/blob/master/src/vendor.ts) add the following:

```ts
import 'bootstrap/dist/css/bootstrap.css';
```

# TypeScript

> To take full advantage of TypeScript with autocomplete you would have to use an editor with the correct TypeScript plugins.

## Use a TypeScript-aware editor

We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 11+](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

# License

[MIT](/LICENSE)
