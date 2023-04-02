# SimpleTasksProject 

https://user-images.githubusercontent.com/108992250/219933898-eb1775fb-9eaf-4f6e-b31f-a399c10f1c31.mp4
<hr>
This project is a basic implementation of a task manager, where you can add your tasks by name, date and time. Also you can set a reminder for a specific task, set the task completed and moreover delete the task. The tasks are stored in json format in a local database. The database, even that is stored locally, is used as a server for the communication and the update of the data. Hence the server must be started for the task manager to work properly.

## Tools
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5. Also TypeScript was necessary for the components, HTML for some basic structure and a little of CSS.

## Run the project
From the terminal, navigate to the folder of the project. Run ```npm install``` or ```npm install --legacy-peer-deps```, to install the necessary node_modules etc. Run `npm run server` to load the server database. In another terminal run `ng serve` to connect on Angular Live Development Server that is listening on localhost:4200. Finally open your browser on http://localhost:4200/.

<em>This project was implemented as I was practising on the fundamentals of the framework Angular. Video source: https://www.youtube.com/watch?v=3dHNOWTI7H8 by Traversy Media.</em>

##
<details close>
  <summary><h3>Click to see details on how to build projects using Angular</h3></summary>

  ## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
  </details?
 

