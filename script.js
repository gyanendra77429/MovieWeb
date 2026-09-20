const movies = [
    {
        id: 1,
        title: "Mirzapur The Movie",
        year: "2026",
        genre: "Action, Crime, Drama, Thrill",
        poster: "https://share.google/XgZJqPuG0JWxLAa3t",
        downloadLink: "https://fast-dl.one/dl/1cc017"
    },
    {
        id: 2,
        title: "Jawan",
        year: "2023",
        genre: "Action",
        poster: "https://m.media-amazon.com/images/M/MV5BMmFiM2RjMjctNWU3Mi00MThmLThlOTUtMGIyOTUxOTU3M2VkXkEyXkFqcGdeQXVyODMyNDEyNjM@._V1_.jpg",
        downloadLink: "https://external-website-2.com/jawan"
    }
];

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
                <button onclick="openMovie(${movie.id})" class="download-btn">View & Download</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function openMovie(id) {
    const selectedMovie = movies.find(m => m.id === id);
    if (selectedMovie) {
        localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));
        window.location.href = `movie.html?id=${id}`;
    }
}

function filterMovies() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filtered);
}

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

displayMovies(movies);
