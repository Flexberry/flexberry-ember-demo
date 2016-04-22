# Flexberry-ember-demo
[![Travis branch](https://img.shields.io/travis/Flexberry/flexberry-ember-demo/master.svg?label=master%20build%20)](https://travis-ci.org/Flexberry/flexberry-ember-demo)
[![Travis branch](https://img.shields.io/travis/Flexberry/flexberry-ember-demo/develop.svg?label=develop%20build)](https://travis-ci.org/Flexberry/flexberry-ember-demo/branches)

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


### JSONAPI Notes
Current release have changes in ember-flexberry tree:
* app/adapters/application.js - code should move to node_modules/ember-flexberry/addon/adapters/jsonapi.js - set paging (page attributes), sorting (sort attributes) and others
* node_modules/ember-flexberry/node_modules/ember-flexberry-projections/addon/mixins/store-jsonapi.js - store support JSONAPI-query parameters: fields[modelname]=attributenameList ($select@Odata), include=... ($expand@Odata)
* ode_modules/ember-flexberry/node_modules/ember-flexberry-projections/addon/index.js - change import from ./mixins/store to ./mixins/store-jsonapi
