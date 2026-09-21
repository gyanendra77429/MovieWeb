const firebaseConfig = {
  apiKey: "AIzaSyCRRiS5R-os-NlLvYwsihU4QJ3zyf0zfBk",
  authDomain: "cineflix-96103.firebaseapp.com",
  projectId: "cineflix-96103",
  storageBucket: "cineflix-96103.firebasestorage.app",
  messagingSenderId: "911831817405",
  appId: "1:911831817405:web:cb0b86146b7e52742b6bd4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let allMovies = [];

function loadMovies() {
    db.collection("movies").orderBy("createdAt", "desc").onSnapshot((snapshot) => {
        allMovies = [];
        snapshot.forEach((doc) => {
            allMovies.push({ id: doc.id, ...doc.data() });
        });
        displayMovies(allMovies);
    });
}

function displayMovies(movieList) {
    const container = document.getElementById('movieContainer');
    container.innerHTML = '';

    if (movieList.length === 0) {
        container.innerHTML = '<p style="color:#aaa;">No movies found.</p>';
        return;
    }

    movieList.forEach(movie => {
        // Handle genre display (string vs array)
        let genreText = Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre;

        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">${movie.year} | ${genreText}</div>
                <button onclick="openMovie('${movie.id}')" class="download-btn">View & Download</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function openMovie(id) {
    function openMovie(id) {
    window.location.href = `movie.html?id=${id}`;
    }
  }
}

function filterMovies() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allMovies.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filtered);
}

function filterGenre(genre) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (genre === 'all') {
        displayMovies(allMovies);
    } else {
        const filtered = allMovies.filter(movie => {
            if (Array.isArray(movie.genre)) {
                return movie.genre.includes(genre);
            } else {
                return movie.genre === genre;
            }
        });
        displayMovies(filtered);
    }
}

// Initial Load
loadMovies();
                      
