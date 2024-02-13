
# ChatUIReact

This application is dashboard application. Currently It asummes that the user is loggedin this allows us to use Chat-dashboard

## Features

- Search : conversations should be searchable by contact name.
- Left sidebar:
    Show all the conversations created
    Each conversation have the contact name and some text of the last message in the chat
- Create conversation:
    On clicking this open a pop up and load all the contacts (from the dummy data.json/js file).
    On clicking the contact start a new conversation (if no conversation was previously started). Or open the existing conversation for that contact.

- Right side view:
    Show the current selected conversation messages
    Send a message in the conversation



## Screenshots

![App Screenshot](https://i.postimg.cc/NffKbKyW/dashboard.png)


## Demo

Youtube Video Link
[![Alt text](https://img.youtube.com/vi/4RgmY5vFRXg/0.jpg)](https://www.youtube.com/watch?v=4RgmY5vFRXg)


## Tech Stack

- **Client:** React.js, MUI
- **Deployment:** gh-pages, github pages


## Lessons Learned

I have learned about useState, useEffect, state management, MUI, module CSS, props  passing.

- A short method to center a div is 

```css
.app {
  height: 100vh;
  display: grid;
  place-items: center;
}

```

- flex property: If given as number will take width according to that

```css
.chat {
  flex: 0.65; // give 65 % of available width
  display: flex;
  flex-direction: column;
}
.sidebar {
  flex: 0.35; // give 35 % of available width
  display: flex;
  flex-direction: column;
}

```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

