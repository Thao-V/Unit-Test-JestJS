# Configure JestJS in Angular
## Remove all Karma, Jasmine (default Unit Test Framework for Angular)
* npm remove <karma*>
* remove file: karma.config.json, test.js
## Install framework
* npm install --save-dev jest jest-preset-angular @types/jest
## Create setup-jest.ts in root directory with the following content
* import 'jest-preset-angular/setup-jest';
## Add Jest to package.json
"jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setup-jest.ts"
    ],
    "globalSetup": "jest-preset-angular/global-setup"
  }
## Add Jest to tsconfig.json
"types": [
    "jest"
  ]

## Add test commands to package.json
"test": "jest",
"test:watch": "jest --watchAll",