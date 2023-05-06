
import Skills from "./skills.js";
import Skins from "./skins.js";
export default class Heroes{
    constructor(name,ico,skillsConfig,skinsConfig){
        this.name = name;//英雄的名字
        this.ico = ico;//英雄的图像地址
        this.skills = [];//英雄的技能
        this.skins = [];//英雄的皮肤
        skillsConfig.forEach(({name,ico})=>{
            this.skills.push(new Skills(name,ico))
        })
        skinsConfig.forEach(({name,ico,url})=>{
            this.skins.push(new Skins(name,ico,url))
        })
        
    }
}