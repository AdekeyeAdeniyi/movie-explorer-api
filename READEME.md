# Movie Explorer

A web application that allows users to search for movies and series using the Open Movie Database (OMDb) API. The project focuses on asynchronous programming, DOM manipulation, and modern browser APIs for smooth user experiences.

## Features

- **Live Search:** Query the OMDb database for movies and series by title.
- **Asynchronous Loading:** Fetches data without reloading the page using the Fetch API.
- **Intersection Observer:** Implements scroll-activated animations where movie cards slide into view as the user scrolls down.
- **Detailed Information:** Displays extra movie details (plot, director, actors, ratings) within a Bootstrap modal upon clicking "Read More."
- **Responsive Design:** Fully compatible with mobile, tablet, and desktop screens using Bootstrap 5.

## Technologies Used

- **HTML5 & CSS3:** Semantic structure and custom transition animations.
- **Bootstrap 5:** Layout grid system and modal components.
- **JavaScript (ES6+):** Asynchronous functions (async/await) and DOM manipulation.
- **OMDb API:** External data source for movie information.

## Getting Started

### Prerequisites

You will need an API key from OMDb to run this project. You can obtain one for free at omdbapi.com.

### Installation

1.  Bash `git clone https://github.com/AdekeyeAdeniyi/movie-explorer-api.git`
2.  Bashcd movie-explorer-api
3.  JavaScriptconst API_KEY = 'your_key_here';
4.  Open index.html in your preferred web browser.

## Deployment

This project is ready to be deployed via GitHub Pages.

1.  Push your code to your GitHub repository.
2.  Go to **Settings** > **Pages**.
3.  Select the **main** branch as the source and click **Save**.
4.  Your site will be live at https://your-username.github.io/movie-explorer-api/.

## License

Distributed under the MIT License. See LICENSE for more information.
