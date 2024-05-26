
## Box Office

This project is a Movie Star Rating application built using Vite, React, TypeScript, and Redux Toolkit. The app allows users to view a list of movies, rate them, and mark their favorite movies with a star. The starred movies can be viewed separately and managed (added or removed) through the app's UI.

# Features

1. Fetches and displays a list of movies from an external API.
2. Allows users to rate movies and mark them as favorites.
3. Users can toggle between viewing all movies and only their starred movies.
4. Stores starred movies using Redux for state management.

# Prerequisites
Make sure you have the following installed:
Node.js (>= 12.x)
npm (>= 6.x) or yarn (>= 1.x)

# Setup Instructions

1. Clone the Repository 
  ```
  git clone https://github.com/your-username/movie-star-rating-app.git
  cd movie-star-rating-app

  ```
2. Install Dependencies 

  ```
    npm install
  ```

3. Environment Variables
  Create a .env file in the root of the project and add the following environment variable:

 `VITE_API_LINK`=https://path-to-your-movies-api

4. Run the Development Server

  ```
   npm run dev
  ```
  This will start the development server.

## Tech Stack

**Client:** React, Redux, CSS

## Screen Shots

1. Home Page
![alt text](<src/assets/Screenshot (913).png>)

2. Starred Page

![alt text](<src/assets/Screenshot (914).png>)
