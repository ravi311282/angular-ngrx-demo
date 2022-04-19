# Angular application - NgRx demo


A demo Angular application with tests - Uses an API to display a list of regions, countries and the details of a selected country. NgRx libraries are implemented to manage the state of the app, Jasmine, Karma and Cypress for unit and end to end tests and Angular Material for presentation.


By [Ravikumar Lekkala](https://www.uniqon.co.uk/ravi.lekkala)


### Technologies

- [@ngrx/store](https://ngrx.io/guide/store) - RxJS powered state management for Angular apps, inspired by Redux
- [@ngrx/effects](https://ngrx.io/guide/effects) - Side effect model for @ngrx/store
- [@ngrx/store-devtools](https://ngrx.io/guide/store-devtools) - Instrumentation for @ngrx/store enabling time-travel debugging
- [@angular/router](https://angular.io/guide/router) - Angular Router
- [@angular/material](https://github.com/angular/material2) - Angular Material

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

The project has been updated to Angular version 12.0.1

### Installation

```Markdown

# Clone the repository
git clone https://github.com/ravi311282/angular-ngrx-demo.git

# Navigate to the app's root directory
cd angular-ngrx-demo

# Install the dependencies
npm install

# Run the application
ng serve

```

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Mock data

Setup the mock api data since countries list api (https://restcountries.eu/rest/v2/region/) is not working.

### Running unit tests

Run `ng test` to execute the unit tests via Karma.