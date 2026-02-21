const data = {
    rnb: {
        title: "The '74 Classic Soul",
        msg: "Born in '74, a year the world got a little brighter. You’ve walked with grace since the beginning, Dad. This is for the soul that started it all!",
        image: "dad-young.jpeg",
        spotifyID: "2s00ea2N7VeF0rdAXrBmeO" // Little Ghetto Boy
    },
    jazz: {
        title: "The Smooth Professional",
        msg: "Like a well-played jazz standard, your life reflects the mercy and grace of God. Thank you for being our lifeline.",
        image: "dad-cool.jpeg",
        spotifyID: "3PY0uWanYhxkrUHaxniwVM" // When Your Life Was Low
    },
    soul: {
       title: "The Heart of the Family",
       msg: "52 years of favor! Like this song, your life is a complex, beautiful harmony. May God continue to sing His songs of love over you. Happy Birthday!",
       image: "dad-recent.jpeg",
       spotifyID: "2U52Hp8zYnG2kvt2de0M2L" // Something (Snarky Puppy)
    }
};

window.onload = function() {
    createBalloons();
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#bdc3c7', '#ffffff', '#ffcc00', '#e74c3c'] 
        });
    }
};

function createBalloons() {
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        balloon.style.backgroundColor = ['#e74c3c', '#3498db', '#f1c40f'][Math.floor(Math.random() * 3)];
        document.body.appendChild(balloon);
    }
}

function changeTrack(genre) {
    const vinyl = document.getElementById('vinyl');
    const title = document.getElementById('genre-title');
    const msg = document.getElementById('birthday-msg');
    const label = document.querySelector('.record-label');
    const player = document.getElementById('spotify-player');
    const yearText = document.querySelector('.year');

    const playerContainer = document.getElementById('spotify-container');

    if (!data[genre]) return;

    title.innerText = data[genre].title;
    msg.innerText = data[genre].msg;
    label.style.backgroundImage = `url('${data[genre].image}')`;
    label.style.backgroundSize = "cover";
    if (yearText) yearText.style.opacity = "0";

    // Reveal Spotify
    if (playerContainer) {
        playerContainer.style.display = "block"; 
        playerContainer.style.opacity = "1";
    }

    // Spotify Embed URL 
    if (player) {
    player.src = `https://open.spotify.com/embed/track/${data[genre].spotifyID}?utm_source=generator&theme=0`;
    }

    vinyl.classList.add('playing');
}

