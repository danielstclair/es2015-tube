# es2015-tube

## Description
The following project is a basic rebuild of youtube using jQuery and Bootstrap for styling. Our goal is to refactor all js code to current es2015 syntax so jquery is so longer required.

## Instructions
Before anything else, fork and clone the project.

### Getting Google Api Key
1. Go to console.developers.google.com 
2. Click on hamburger menu at top left corner 
3. Go to API Manager 
4. Search for youtube 
5. Click on YouTube Data API v3 
6. Click on Enable API. 
7. Click on Credentials > New Credentials > Api Key > Browser Key > type name of app
8. Copy key that's generated

### Setting up project
1. npm install
2. Inside of src/scripts folder, create file called "api_key.js"
3. Inside of api_key.js enter following code: 
```javascript
const API_key = 'ENTER_API_KEY_HERE';
export default API_KEY;
```

### Start coding
1. npm start
2. go to http://localhost:8090
