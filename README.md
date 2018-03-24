# Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

#Getting Started
#Prerequisites

1. Install nvm:
   
  	 To install or update nvm, you can use the install script using cURL:  

		curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

2. Install node via nvm:

		nvm install node stable

3. Use the stable version of node
		
		nvm use node stable

4. Install Angular CLI: 
	
		npm install -g @angular/cli

#Installing Packages

After cloning the project using 

	git clone "https://sohail-dev@bitbucket.org/sohail-dev/havclient.git"

cd into project direcotry
	
	cd havclient

and run 

	npm insatll

to install dependencies and packages

#Serve the application 

Go to the project directory and launch the server. 

	ng serve --open

Navigate to `http://localhost:4200/`

To change port to e.g 4400 then
	
	ng serve --open --port 4400
	
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

