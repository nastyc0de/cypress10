import { defineConfig } from "cypress";
const {isFileExist, findFiles} = require('cy-verify-downloads');


export default defineConfig({
  e2e: {
    baseUrl:'http://uitestingplayground.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {isFileExist, findFiles})
    },
    env:{
      demoVar:'this is a demo',
      demoQA:'https://demoqa.com/',
      theInternet:'https://the-internet.herokuapp.com/',
      angular:'https://www.globalsqa.com/'
    },
    experimentalSessionAndOrigin: true,
  },
  viewportHeight:1000,
  viewportWidth:1400
});
