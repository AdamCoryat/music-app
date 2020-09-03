import { ProxyState } from "../AppState.js";
import { sandBoxApi } from "./AxiosService.js";
import Song from "../Models/Song.js";


class MySongsService {
  async removeSong(id) {
    let res = await sandBoxApi.delete(id)
    ProxyState.activeSong = null
    let index = ProxyState.mySongs.findIndex(s => s._id == id)
    if (index == -1) {
      throw Error
    }
    ProxyState.mySongs.splice(index, 1)
    ProxyState.mySongs = ProxyState.mySongs
  }


  constructor() {
    console.log("my song service")
  }

  async getMySongs() {
    let res = await sandBoxApi.get('')
    ProxyState.mySongs = res.data.data.map(s => new Song(s))
  }
  async addSong() {
    let res = await sandBoxApi.post('', ProxyState.activeSong)
    ProxyState.activeSong = null
    ProxyState.mySongs = [...ProxyState.mySongs, new Song(res.data.data)]
  }
  getDetails(id) {
    let song = ProxyState.mySongs.find(s => s._id == id)
    ProxyState.activeSong = song
  }


}
const MYSONGSSERVICE = new MySongsService();
export default MYSONGSSERVICE