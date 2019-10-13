

cc.Class({
    extends: cc.Component,

    properties: {
        SceneName:"",
    },

   
    onLoad () {
        cc.director.preloadScene(this.SceneName, function () {
        });
    },
    play(){
        this.getComponent(cc.Animation).play('Main1');
    },
    onFinish(){
        //cc.director.loadScene("stageMode");
        cc.director.loadScene(this.SceneName);

    }
    

  
});
