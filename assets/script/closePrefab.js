
cc.Class({
    extends: cc.Component,

    properties: {
        closeSpeed:0.3,
    },


    start() {
        this.closePrefab();

    },


    closePrefab:function(){
           
        this.node.on(cc.Node.EventType.TOUCH_END, function (touch, event) {
  
            this.node.scale = 1;
            var s2 = cc.scaleTo(this.closeSpeed, 0);
            var end_func = cc.callFunc(function() {
                this.node.destroy();
            }.bind(this));
            var seq = cc.sequence([s2, end_func]);
            this.node.runAction(seq);
        }, this);

    }

});
