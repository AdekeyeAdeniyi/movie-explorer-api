const API_KEY = window.CONFIGURATION_DATA.API_KEY || "";
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("movie-results");
const modalArea = document.getElementById("modal-content-area");
const movieModal = new bootstrap.Modal(document.getElementById("movieModal"));

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query) {
    resultsContainer.innerHTML = "";
    await fetchMovies(query);
  }
});

async function fetchMovies(query) {
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await response.json();

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      resultsContainer.innerHTML = `<p class="text-center">${data.Error}</p>`;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

function displayMovies(movies) {
  movies.forEach((movie) => {
    const movieCol = document.createElement("div");
    movieCol.className = "col-md-4 col-lg-3 movie-card-wrapper";

    movieCol.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}" class="card-img-top" alt="${movie.Title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text text-muted">${movie.Year}</p>
                    <button class="btn btn-outline-primary mt-auto" onclick="fetchMovieDetails('${movie.imdbID}')">Read more</button>
                </div>
            </div>
        `;
    resultsContainer.appendChild(movieCol);
    observer.observe(movieCol);
  });
}

// 5. Fetch and Show Modal Details
async function fetchMovieDetails(id) {
  try {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${API_KEY}`);
    const movie = await response.json();

    modalArea.innerHTML = `
            <div class="modal-header">
                <h5 class="modal-title">${movie.Title} (${movie.Year})</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${movie.Poster}" class="img-fluid rounded" alt="${movie.Title}">
                    </div>
                    <div class="col-md-8">
                        <p><strong>Director:</strong> ${movie.Director}</p>
                        <p><strong>Actors:</strong> ${movie.Actors}</p>
                        <p><strong>Plot:</strong> ${movie.Plot}</p>
                        <p><strong>Released:</strong> ${movie.Released}</p>
                        <p><strong>Rating:</strong> ${movie.imdbRating}/10</p>
                    </div>
                </div>
            </div>
        `;
    movieModal.show();
  } catch (error) {
    console.error("Error fetching details:", error);
  }
}
