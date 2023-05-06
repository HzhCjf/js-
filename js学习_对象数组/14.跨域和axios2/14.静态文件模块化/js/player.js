import Heroes from "./heroes.js";

export default class Player {
    constructor(uname) {
        this.uname = uname;

        // 技能的参数 ,传递数据
        let yaseSkills = [{ name: "技能一", ico: "./sources/skills/16610.png" }, { name: "技能二", ico: "./sources/skills/16620.png" }, { name: "技能三", ico: "./sources/skills/16630.png" }]

        let lubanSkills = [{ name: "技能一", ico: "./sources/skills/11210.png" }, { name: "技能二", ico: "./sources/skills/11220.png" }, { name: "技能三", ico: "./sources/skills/11230.png" }]

        // 皮肤的参数 ： 

        let yaseSkins = [{ name: "皮肤一", ico: './sources/heroes/yase1.png', url: "./sources/skins/301660.png" }, { name: "皮肤二", ico: './sources/heroes/yase2.png', url: "./sources/skins/301661.png" },{ name: "皮肤三", ico: './sources/heroes/yase3.png', url: "./sources/skins/301662.png" }]


        let lubanSkins = [{ name: "皮肤一", ico: './sources/heroes/luban1.png', url: "./sources/skins/301120.png" }, { name: "皮肤二", ico: './sources/heroes/luban2.png', url: "./sources/skins/301121.png" },{ name: "皮肤三", ico: './sources/heroes/luban3.png', url: "./sources/skins/301122.png" }];



        this.heroes = [new Heroes("亚瑟", "./sources/heroes/yase1.png", yaseSkills, yaseSkins), new Heroes("鲁班", "./sources/heroes/luban1.png", lubanSkills, lubanSkins)];
    }
}
