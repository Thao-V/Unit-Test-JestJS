# Unit-Test-JestJS

## ReactJS
### Install dependencies for snapshot
* project created with create-react-app: npm install --save-dev react-test-renderer
* project created without create-react-app: npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
### Install dependencies for DOM
* npm i --save-dev @testing-library/react

## Angular: Configure JestJS in Angular
### Remove all Karma, Jasmine (default Unit Test Framework for Angular)
* npm remove <karma*>
* remove file: karma.config.json, test.js
### Install framework
* npm install --save-dev jest jest-preset-angular @types/jest
### Create setup-jest.ts in root directory with the following content
* import 'jest-preset-angular/setup-jest';
### Add Jest to package.json
"jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-jest.ts"
    ],
    "globalSetup": "jest-preset-angular/global-setup"
  }
### Add Jest to tsconfig.json
"types": [
    "jest"
  ]

### Add test commands to package.json
"test": "jest",
"test:watch": "jest --watchAll",

## NodeJS
### Install dependencies
* npm install --save-dev babel-cli babel-preset-env jest supertest superagent
### Add command to package.json
"test": "jest",
"test:watch": "jest --watchAll --all"
