

cc.Class({
    extends: cc.Component,

    properties: {
        delayScale:0,
        delayStop:1,

    },



    onLoad:function () {
        var delay = cc.delayTime(1);
            this.node.scale = 0;
            var s1 = cc.scaleTo(this.delayScale, 1);
            var seq = cc.sequence([s1,delay]);
        this.scheduleOnce(function(){

            //this.addBarriers();   
            this.node.runAction(seq);
       
       },this.delayStop);//延时时间修改这里的3
    },


  
});
