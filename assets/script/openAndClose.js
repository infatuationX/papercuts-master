cc.Class({
    extends: cc.Component,

    properties: {
        dealay_time: 5,
    },



    onLoad:function () {


        this.node.scale = 0;
        var s1 = cc.scaleTo(0.3, 1);
        var delay = cc.delayTime(this.dealay_time);
        var s2 = cc.scaleTo(0.3, 0);
        var end_func = cc.callFunc(function() {
            this.node.removeFromParent();
        }.bind(this));

        // 队列容器;
        var seq = cc.sequence([s1, delay, s2, end_func]);
        this.node.runAction(seq);
    },


  
});
