# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run: App.js With the help of ### `npm start`

The npm start command Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## About This Project:- 
The idea  of this react app is to build a single page that displays the profile of 10 users (the data is
obtained from an API endpoint). Each user's profile contains a avatar picture, name,
email, phone, address, website and company name.

All 10 users profile data is being fetched from the following API endpoint:
Method: GET
URL: https://jsonplaceholder.typicode.com/users

The Avatars are being generated from the URL for the GET endpoint is:
https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy 
You have to use the username to generate a unique avatar for each user. The {{username}} in the URL is the placeholder for the user's username. It should be dynamically replaced by the username received from the users API endpoint.

## Loading Indicator:-

Upon opening the app a loading indicator is displayed until the data is fetched from
the API and is ready to be displayed.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

