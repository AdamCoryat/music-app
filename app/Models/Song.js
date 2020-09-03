export default class Song {
  constructor(data, user) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
    this.sandBox = false
    if (user) {
      this.sandBox = true
    }
  }

  get Template() {
    return `<div class="card col-12">
    <div class="card-body d-flex flex-direction-column">
        <img class="search-image" src="${this.albumArt}" alt="">
        <p class="card-text my-auto  pl-3">${this.title}</p>
        <p class="card-text my-auto  pl-3">${this.artist}</p>
        <p class="card-text my-auto  pl-3">${this.price}</p>
        <button class="btn btn-primary ml-1 m my-auto" onclick="app.songsController.getDetails('${this._id}')">Details</button>
  </div>
</div>
`;
  }

  

  get activeTemplate() {
    return ` <div class="card text-center">
    <img class="card-img-top img-details" src="${this.albumArt}" alt="">
    <div class="card-body">
        <h4 class="card-title">${this.title}</h4>
        <p class="card-text">${this.artist}</p>
        <p class="card-text">${this.price}</p>
        <p class="card-text">${this.artist}</p>
        <audio controls>
  <source src="${this.preview}" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
${this.activeButton}
    </div>
</div>

        `;
  }

  get activeButton(){
    if(this.sandBox){
      return `<button class="btn btn-danger" onclick="app.mySongsController.removeSong('${this._id}')">Remove Song</button>`
    } 
    return `<button class="btn btn-success" onclick="app.songsController.addSong('${this._id}')">Add Song</button>`

  }
}
