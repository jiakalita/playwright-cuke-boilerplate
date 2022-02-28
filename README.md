# playwright-cuke-boilerplate
Boilerplate repo for playwright and cucumber BDD test implementation


Overview of files: 

1. `test.global.ts` - the purpose of this is to act like a central file with the setup steps to be performed under beforeAll , afterAll , before, After hooks
2. `CucumberWorld` - its purpose is to share state across the lifecycle of your scenario


# creating a feature file
 `step-definitions`, create the step definition for a feature file. This file contains the glue code
 
 To run tests:
  `npm run test`
