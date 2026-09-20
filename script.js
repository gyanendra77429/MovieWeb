JavaScript
// Sample Movie Data (Isme aap apni movies aur external download links add kar sakte hain)
const movies = [
    {
        title: "Interstellar",
        year: "2014",
        genre: "Sci-Fi",
        poster: "https://via.placeholder.com/300x450?text=Interstellar",
        downloadLink: "https://external-download-site.com/file1" // External redirect link
    },
    {
        title: "The Dark Knight",
        year: "2008",
        genre: "Action",
        poster: "https://via.placeholder.com/300x450?text=Dark+Knight",
        downloadLink: "https://external-download-site.com/file2"
    },
    {
        title: "Inception",
        year: "2010",
        genre: "Sci-Fi",
        poster: "https://via.placeholder.com/300x450?text=Inception",
        downloadLink: "https://external-download-site.com/file3"
    }
];

// Display Movies
function displayMovies(movieList) {
    const container = document.getElementById('movieContainer');
    container.innerHTML = '';

    movieList.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">${movie.year} | ${movie.genre}</div>
                <a href="${movie.downloadLink}" target="_blank" class="download-btn">⬇ Download</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Live Search Functionality
function filterMovies() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filtered);
}

// Genre Filter Functionality
function filterGenre(genre) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (genre === 'all') {
        displayMovies(movies);
    } else {
        const filtered = movies.filter(movie => movie.genre === genre);
        displayMovies(filtered);
    }
}

// Initial Load
displayMovies(movies);
