import { ProxyState } from "../AppState.js";
import mySongsService from "../Services/MySongsService.js";

function _drawMySongs() {
  let template = ""
  ProxyState.mySongs.forEach(s => template += s.Template)
  document.getElementById('my-songs').innerHTML = template
}

function _drawSongDetails() {
  if (ProxyState.activeSong) {
    document.getElementById('song-details').innerHTML = ProxyState.activeSong.activeTemplate
  } else {
    document.getElementById('song-details').innerHTML = ""
  }
}
export default class MySongsController {
  constructor() {
    console.log("My Songs Controller")
    ProxyState.on('mySongs', _drawMySongs)
    ProxyState.on('activeSong', _drawSongDetails)
    this.getMySongs()
  }

  getMySongs() {
    try {
      mySongsService.getMySongs()
    } catch (error) {
      console.error(error);
    }
  }

  addSong() {
    try {
      mySongsService.addSong()
    } catch (error) {
      console.error(error);
    }
  }

  getDetails(id) {
    try {
      mySongsService.getDetails(id)
    } catch (error) {
      console.error(error);
    }
  }
  removeSong(id) {
    try {
      mySongsService.removeSong(id)
    } catch (error) {
      console.error(error);

    }
  }

}