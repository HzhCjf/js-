// 游戏类:可以登录游戏
// 复用性.扩展性高

import Player from "./player.js";
export default class Game{
    constructor(){
        this.player = null; //初始化玩家为空
    }
    login(uname){
        this.player = new Player(uname)
    }
}