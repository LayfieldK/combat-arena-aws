Note for self:

If you deploy this and only the main request works, and the others are 403 forbidden, check the paths on those requests.  If they are missing the stage (dev), that's why.  When this happened to me before, it's because I was building the site in production mode.  I think the "/dev/" part of the path is coming from the base href property being set in the /environments/[environment.prod.ts/environment.serverless.ts/environment.ts]

# CombatArenaSite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

=======================
Notes for myself:

Angular runs webpack... not really sure how or when, but it is happening during ng build
Angular creates 3rdPartyLicenses.txt at project root.  I should link to this from an about page.
