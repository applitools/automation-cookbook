# Applitools Tutorial - Cypress

## Pre-requisites:
1. Install Node.js from [here](https://nodejs.org/en/)

## Run the Example Project
1. Download the example
    * Option 1: `git clone https://github.com/applitools/tutorial-cypress.git`
    * Option 2: Download it as a Zip file and extract it
2. CD into the `tutorial-cypress` folder
3. Set up environment variable `APPLITOOLS_API_KEY` with your own API key.
    * Login to Applitools > Click on the Person icon > My API Key
    * Linux/Mac: export APPLITOOLS_API_KEY=<your_key>
    * Windows: set APPLITOOLS_API_KEY=<your_key>
4. run `npm install`
5. run `npx eyes-setup`
6. run `npm test`


## Add Applitools Eyes to an Existing Node.js Project
1. Set up environment variable `APPLITOOLS_API_KEY` with your own API key.
    * Login to Applitools > Click on the Person icon > My API Key
    * Linux/Mac: export APPLITOOLS_API_KEY=<your_key>
    * Windows: set APPLITOOLS_API_KEY=<your_key>
2. run `npm install @applitools/eyes-cypress --save-dev`
3. run `npx eyes-setup`
4. Update the tests with the Applitools functionality (You can get more info on the tutorial web page and NPM docs)
5. run the existing tests

## Cypress tutorial

Please see https://applitools.com/tutorials/cypress.html for all the details.

## NPM docs
The following NPM docs contains all the update information for this SDK
https://www.npmjs.com/package/@applitools/eyes-cypress#configure-plugin-and-commands
