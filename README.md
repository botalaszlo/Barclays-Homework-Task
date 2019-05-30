# Barclays Homework

This is a project for the Barclays to demonstrate how I could solve the homework task. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Notes

### Interfaces
For the Model representations I use interfaces instead of classes. I have seen interface representations in the TypeScript guides and from the following article: https://jameshenry.blog/typescript-classes-vs-interfaces/ where there are some good point using of interfaces (like it is a good practice to represent the remote data types and TypeScript uses them at compile time and no impact at run time)

I use the camelCase rule for interfaces and the names of interfaces are used without "I" prefix as I've read in this style guide: https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md#interface

### Structure
First I checked the official documentation to create the best directory structure for the Angular application. It did not contain too much information so I chose this article as a starter point: https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7. It contains two github repository as examples, in my view those links are good sources to learn about structures of Angular apps. I used some suggestions like "shared", "core" folders are familiar to me from ASP.NET world. Might be a few files/classes could be in other folders, like the filter.pipe.ts file which has the "country filter" feature. But this was the only one filter pipe and it belongs to the "Vat" Component therefore I leave it in the "Vat" Component folder. However later this can be replaced into other "pipe" specific directory.


### CORS problem
The http://jsonvat.com does not available for JavaScript clients because it does not allow CORS requests. So at this point I created my own Web API in ASP.NET Core to be able to fetch the JSON data from the website without any CORS problems and then the Angular Client app could fetch the data through this Web API.

Later I discovered some good services to get over this CORS problem, like the https://cors-anywhere.herokuapp.com/ website. So I used the cors-anywhere service to fetch directly the json VAT data.