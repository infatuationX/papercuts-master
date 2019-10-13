

cc.Class({
    extends: cc.Component,

    properties: {
        SceneName:"",
        clipName:"",

    },

   
    onLoad () {
        cc.director.preloadScene(this.SceneName, function () {
        });
    },

    play(){
        this.getComponent(cc.Animation).play(this.clipName);
    },
    
    XG_001(){
        //cc.director.loadScene("stageMode");
        cc.director.loadScene(this.SceneName);

    }
    

  
});
