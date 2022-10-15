import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:'http://uitestingplayground.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      demoVar:'this is a demo',
      demoQA:'https://demoqa.com/',
      theInternet:'https://the-internet.herokuapp.com/',
      angular:'https://www.globalsqa.com/'
    }
  },
  viewportHeight:1000,
  viewportWidth:1400
});
