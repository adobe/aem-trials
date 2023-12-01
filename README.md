# AEM Trials landing page

A landing page for AEM trial signups based on [milo](https://github.com/adobecom/milo).

## Environments
[Preview](https://main--aem-trials--adobe.hlx.page/) | [Live](https://aem-trial.adobe.com)

## Getting started

### TL;DR
1. Clone this repo to your computer.
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `sudo npm install -g @adobe/aem-cli`
1. In a terminal, run `aem up` this repo's folder.
1. Start coding.

## Tooling

### NPM (Recommended)
You will need to install npm packages (`npm install`) to:

1. Lint
2. Test

## Testing
```sh
npm run test
```
or:
```sh
npm run test:watch
```
This will give you several options to debug tests. Note: coverage may not be accurate.

## Linting
To run the linter run:
```sh
npm run lint
```
To lint just js or css files, run
```sh
npm run lint:css
```
or:
```sh
npm run lint:js
```
If you need to lint just one file, you can run:
```sh
npx eslint file1.js
```
