import { ProxyState } from "../AppState.js";

function _drawMySongs(){
  console.log("drawing songs")
}
export default class MySongsController{
  constructor(){
    console.log("My Songs Controller")
    ProxyState.on('mySongs', _drawMySongs)
  }
}