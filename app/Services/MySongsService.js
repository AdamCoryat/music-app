import { ProxyState } from "../AppState.js";
import { sandBoxApi } from "./AxiosService.js";
import Song from "../Models/Song.js";


class MySongsService{
  constructor(){
    console.log("my song service")
  }

  async getMySongs(){
    
  }

}
const MYSONGSSERVICE = new MySongsService();
export default MYSONGSSERVICE