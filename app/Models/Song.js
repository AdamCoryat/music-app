export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.trackId || data._id;
  }

  get Template() {
    return `<div class="card col-12">
    <div class="card-body d-flex flex-direction-column">
        <img class="search-image" src="${this.albumArt}" alt="">
        <p class="card-text my-auto  pl-3">${this.title}</p>
        <p class="card-text my-auto  pl-3">${this.artist}</p>
        <p class="card-text my-auto  pl-3">${this.price}</p>
        <button class="btn btn-primary ml-1 m my-auto" onclick="app.SongsController.getDetails('${this._id}')">Details</button>
  </div>
</div>
`;
  }

  get playlistTemplate() {
    return `

        `;
  }
}
