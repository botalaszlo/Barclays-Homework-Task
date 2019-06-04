# Barclays Homework
This is a project for the Barclays to demonstrate how I could solve the homework task. 

## Structure
The Api is the backend .NET Core Web Api project. The Client is the Angular project.

## Development server

### For Api
Run the IIS server. It listens the following port: `localhost:54444`.

### For Client
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
The Client is configured to listen the api in the `config.ts˛`.

## Updates
### 2019-06-04
The repository is reorganzied to handle the backend source code too.
For Client the Sass module has been updated to 4.12. In this case `npm rebuild node-sass` command should be run. Because of to use NodeJS v12.