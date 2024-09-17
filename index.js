const songs = [
    {
        title: "Baazi",
        artist: "Supreme Sidhu, Talwiinder",
        src: "music/Baazi - Supreme Sidhu, Talwiinder (Official Audio) - www.youtube.com_(www.KeepVid.to).mp3",
        image: "images/baazi.jpeg"
    },
    {
        title: "Be Happy",
        artist: "UNEXPECTED",
        src: "music/Be Happy - UNEXPECTED 320 Kbps.mp3",
        image: "images/be-happy.jpeg"
    },
    {
        title: "Dilan Di Gall",
        artist: "Neeru Bajwa, Wamiqa Gabbi",
        src: "music/Dilan Di Gall - Satinder Sartaaj.mp3",
        image: "images/default.gif"
    },
    {
        title: "Galwakdi",
        artist: "Tarsem Jassar",
        src: "music/Galwakdi.mp3",
        image: "images/galwakdi.jpeg"
    },
    {
        title: "Ik Lamha",
        artist: "Azaan Sami Khan ft. Maya Ali",
        src: "music/Ik Lamha(PagalWorldl).mp3",
        image: "images/ek-lamha.jpeg"
    },
    {
        title: "Udaarian",
        artist: "Satinder Sartaaj",
        src: "music/Udaarian.mp3",
        image: "images/udarian.jpeg"
    }
];

const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const albumArt = document.getElementById('album-art');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentSongIndex = 0;

function loadSong(songIndex) {
    const song = songs[songIndex];
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;

    albumArt.src = song.image;
    albumArt.onerror = function () {
        albumArt.src = "images/default.gif"; // Fallback image in case of an error
    };

    audioPlayer.load(); 
    audioPlayer.play(); 
}

prevButton.addEventListener('click', () => {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1; // Loop to last song if at beginning
    }
    loadSong(currentSongIndex);
});

nextButton.addEventListener('click', () => {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0; // Loop to first song if at the end
    }
    loadSong(currentSongIndex);
});

window.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSongIndex);
});