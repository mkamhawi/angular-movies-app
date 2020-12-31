# Angular Movies App
A single page app for listing movies according to several categories, displaying basic info about each movie. built on [Angular](https://angular.io/).

## Notes
- This app uses [The Movie Database APIs](https://www.themoviedb.org/). To run the app, you need an API key:
  - Create an account [here](https://www.themoviedb.org/account/signup). using this account you can generate the API key.
  - Run the following command:
  ```Shell
  cp src/app/app.constants.example.ts src/app/app.constants.ts
  ```
  - Copy your generated API key to the **MoviesApiKey** constant in the `src/app/app.constants.ts` file.

## Dockerized app
To run this app using Docker, First follow the steps in the [Notes](#Notes) section, Then run the following command in the root folder of the project to build the image:
```Shell
docker build . -t movies-app
```
Then run the following to serve the app on port `3000`:
```Shell
docker run -p 3000:3000 movies-app
```
You app will be accissible here: `http://localhost:3000/`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
