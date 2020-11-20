window.player = {
  cover: document.querySelector(".card-image"),
  title: document.querySelector(".card-content h5"),
  artist: document.querySelector(".artist"),
  audio: document.querySelector("audio"),
  audioData: album1,
  currentAudio: {},
  currentPlaying: 0,
  start() {
    this.update()

    this.audio.onended = () => this.next()
  },
  next() {
    this.currentPlaying++;
    this.update()
    this.audio.play();
  },
  update() {

    this.currentAudio = this.audioData[this.currentPlaying];

    this.cover.style.background = `url("${this.currentAudio.cover}") no-repeat center center / cover`;
    this.artist.innerText = this.currentAudio.artist;
    this.title.innerText = this.currentAudio.title;
    this.audio.src = this.currentAudio.file;
  },
};
