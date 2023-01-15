## Description

Coding challenge for Clipboard Health

## Running the app locally

```bash

#install dependencies
$ npm install

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app using docker

```bash
# build docker
$ docker-compose build

# run docker
$ docker-compose up

```

### Documentation

Once you have run the application successfully, you can find the documentation for this project at http://localhost:8080/swagger

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Coding Best Practices

Best practices for using Node.js and TypeScript together include:

- Defining clear interfaces for modules and function arguments to improve code readability and maintainability
- Using type annotations and type checking to catch potential bugs early in the development process
- Organizing code into clearly separated modules, and using import and export statements to manage dependencies
- Using a linter like TSLint to enforce code style and catch potential errors
- Writing unit tests for code to ensure that it behaves as expected and to make it easier to catch and fix bugs

To ensure high-quality code, one can:

- Writing clean, readable, and well-organized code, using clear and meaningful naming conventions and commenting where necessary.
- Regularly reviewing code to ensure that it adheres to best practices and is easy to understand
- Making use of CI/CD pipeline to automatically build, test and deploy the code.
- Using code coverage tools to monitor the proportion of code that is executed by tests.
- Regularly monitoring the performance and error logs of the application in production to identify and fix any issues.
- Encourage pair programming or code reviews to ensure that multiple people review the code.
- Continuously monitoring and updating dependencies of the project to ensure they are up-to-date and secure.

It's important to keep in mind that high-quality code is not only about catching bugs and avoiding errors, but also about making the code as maintainable and readable as possible, so that others can easily understand and modify it.
