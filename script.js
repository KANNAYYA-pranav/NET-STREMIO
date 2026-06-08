// Movie Database - Add your trailers here!
const moviesDatabase = {
    trending: [
        {
            id: 1,
            title: "Avatar: The Way of Water",
            year: 2022,
            rating: "PG-13",
            description: "An epic adventure on the alien world of Pandora.",
            image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/d9MyW72EhME"
        },
        {
            id: 2,
            title: "Dune",
            year: 2021,
            rating: "PG-13",
            description: "Epic science fiction film based on Frank Herbert's classic novel.",
            image: "https://images.unsplash.com/photo-1533148935925-ab7852d9b3c3?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/n9xhJsXE-mQ"
        },
        {
            id: 3,
            title: "The Batman",
            year: 2022,
            rating: "PG-13",
            description: "A new take on the Dark Knight detective thriller.",
            image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/mqqft2x_Aa4"
        },
        {
            id: 4,
            title: "Top Gun: Maverick",
            year: 2022,
            rating: "PG",
            description: "High-flying action and nostalgia with incredible stunts.",
            image: "https://images.unsplash.com/photo-1533148935925-ab7852d9b3c3?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/giG6GRe96eU"
        },
        {
            id: 5,
            title: "Spider-Man: No Way Home",
            year: 2021,
            rating: "PG-13",
            description: "The multiverse collides in this superhero epic.",
            image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/JfVOs4VSpmA"
        },
        {
            id: 6,
            title: "Doctor Strange 2",
            year: 2022,
            rating: "PG-13",
            description: "Multiverse madness and magical adventures.",
            image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/aWzlQ2N6DD0"
        }
    ],
    action: [
        {
            id: 7,
            title: "John Wick 4",
            year: 2023,
            rating: "R",
            description: "Non-stop action and intense choreography.",
            image: "https://images.unsplash.com/photo-1606924842584-fcf3a0b5b601?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/pWkSIl-WR1I"
        },
        {
            id: 8,
            title: "Mission: Impossible 7",
            year: 2023,
            rating: "PG-13",
            description: "Tom Cruise's most daring missions yet.",
            image: "https://images.unsplash.com/photo-1489599849228-5aa33ee4c45b?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/NVR6JhEDKC0"
        },
        {
            id: 9,
            title: "Fast X",
            year: 2023,
            rating: "PG-13",
            description: "High-speed cars and incredible stunts.",
            image: "https://images.unsplash.com/photo-1559329007-40790c9fdf4a?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/LwKJvlRcv3I"
        },
        {
            id: 10,
            title: "The Man from Toronto",
            year: 2022,
            rating: "PG-13",
            description: "Action-packed comedy with great chemistry.",
            image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/mWCHJH5N9fk"
        },
        {
            id: 11,
            title: "Black Widow",
            year: 2021,
            rating: "PG-13",
            description: "Spy action with Marvel intensity.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/Fp9pNPdNwjI"
        },
        {
            id: 12,
            title: "Uncharted",
            year: 2022,
            rating: "PG-13",
            description: "Adventure and treasure hunting action.",
            image: "https://images.unsplash.com/photo-1532519432176-be8cba30757f?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/K_eFOj_cQAE"
        }
    ],
    comedy: [
        {
            id: 13,
            title: "The Lost City",
            year: 2022,
            rating: "PG-13",
            description: "Romance and adventure with plenty of laughs.",
            image: "https://images.unsplash.com/photo-1519640471654-76ce0107ad1b?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/RHar_J3xBxw"
        },
        {
            id: 14,
            title: "Free Guy",
            year: 2021,
            rating: "PG-13",
            description: "Video game action comedy adventure.",
            image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/0K6yXjsVeXw"
        },
        {
            id: 15,
            title: "The Adam Project",
            year: 2022,
            rating: "PG-13",
            description: "Time-travel comedy with Ryan Reynolds.",
            image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/XKmVrZLe-3c"
        },
        {
            id: 16,
            title: "Red Notice",
            year: 2021,
            rating: "PG-13",
            description: "Heist comedy with A-list stars.",
            image: "https://images.unsplash.com/photo-1516251193558-e2b6b3cb3dbb?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/KS1yda5d18w"
        },
        {
            id: 17,
            title: "Bullet Train",
            year: 2022,
            rating: "R",
            description: "Comedic action on a high-speed train.",
            image: "https://images.unsplash.com/photo-1484412243519-b7f93f4e8d5f?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/0j1_Gl1fDmg"
        },
        {
            id: 18,
            title: "Jungle Cruise",
            year: 2021,
            rating: "PG-13",
            description: "Adventure comedy with The Rock and Emily Blunt.",
            image: "https://images.unsplash.com/photo-1533009408658-79be2fb5f409?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/WJE6BDlpAOc"
        }
    ],
    thriller: [
        {
            id: 19,
            title: "A Quiet Place Part II",
            year: 2021,
            rating: "PG-13",
            description: "Intense thriller with minimal dialogue.",
            image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/F0VnYe0p8Uk"
        },
        {
            id: 20,
            title: "Scream",
            year: 2022,
            rating: "R",
            description: "Slasher horror brings back the legacy.",
            image: "https://images.unsplash.com/photo-1496361c6e9b95a7e0f8c64d3a5e8e8f?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/2b1J9qSVhSI"
        },
        {
            id: 21,
            title: "Uncharted",
            year: 2022,
            rating: "PG-13",
            description: "Thrilling adventure mystery.",
            image: "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/K_eFOj_cQAE"
        },
        {
            id: 22,
            title: "The Woman in the Window",
            year: 2021,
            rating: "PG-13",
            description: "Psychological thriller full of twists.",
            image: "https://images.unsplash.com/photo-1516251193558-e2b6b3cb3dbb?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/A8qzlCHCCBY"
        },
        {
            id: 23,
            title: "No Time to Die",
            year: 2021,
            rating: "PG-13",
            description: "James Bond's final mission with intense action.",
            image: "https://images.unsplash.com/photo-1533928298208-27ff66555d0d?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/BIhNsAtPbPI"
        },
        {
            id: 24,
            title: "Shang-Chi",
            year: 2021,
            rating: "PG-13",
            description: "Martial arts thriller and superhero origin story.",
            image: "https://images.unsplash.com/photo-1554080221-1c47a5e6e02f?w=200&h=300&fit=crop",
            trailer: "https://www.youtube.com/embed/EJCiSpl1uN8"
        }
    ]
};

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    displayMovies('trending', moviesDatabase.trending);
    displayMovies('action', moviesDatabase.action);
    displayMovies('comedy', moviesDatabase.comedy);
    displayMovies('thriller', moviesDatabase.thriller);
    setHeroMovie();
});

// Display movies in a section
function displayMovies(sectionId, movies) {
    const container = document.getElementById(sectionId + 'Movies');
    if (!container) return;
    
    container.innerHTML = '';
    
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-card-overlay">
                <h3>${movie.title}</h3>
                <p>${movie.year} • ${movie.rating}</p>
                <button onclick="openModal(${movie.id})">Watch Trailer</button>
            </div>
        `;
        container.appendChild(movieCard);
    });
}

// Set the hero banner movie
function setHeroMovie() {
    const heroMovie = moviesDatabase.trending[0];
    document.getElementById('heroTitle').textContent = heroMovie.title;
    document.getElementById('heroDescription').textContent = heroMovie.description;
}

// Play hero trailer
function playHeroTrailer() {
    const heroMovie = moviesDatabase.trending[0];
    openModal(heroMovie.id);
}

// Open modal with movie details
function openModal(movieId) {
    let selectedMovie;
    
    // Find the movie across all categories
    for (let category in moviesDatabase) {
        selectedMovie = moviesDatabase[category].find(m => m.id === movieId);
        if (selectedMovie) break;
    }
    
    if (selectedMovie) {
        document.getElementById('trailerFrame').src = selectedMovie.trailer;
        document.getElementById('modalTitle').textContent = selectedMovie.title;
        document.getElementById('modalDescription').textContent = selectedMovie.description;
        document.getElementById('modalRating').textContent = `Year: ${selectedMovie.year} | Rating: ${selectedMovie.rating}`;
        document.getElementById('movieModal').style.display = 'block';
    }
}

// Close modal
function closeModal() {
    document.getElementById('movieModal').style.display = 'none';
    document.getElementById('trailerFrame').src = '';
}

// Search functionality
function searchMovies() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm === '') {
        alert('Please enter a movie name to search');
        return;
    }
    
    let results = [];
    for (let category in moviesDatabase) {
        results = results.concat(
            moviesDatabase[category].filter(movie => 
                movie.title.toLowerCase().includes(searchTerm)
            )
        );
    }
    
    if (results.length === 0) {
        alert('No movies found matching: ' + searchTerm);
    } else {
        // Display search results
        displayMovies('action', results); // Reuse action section for results
        document.querySelector('.movie-section:nth-child(2) h2').textContent = `Search Results (${results.length} found)`;
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('movieModal');
    if (event.target === modal) {
        closeModal();
    }
}
