

cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab:cc.Prefab,
    },

    onLoad:function(){
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            var pos = event.getLocation();
            cc.log(pos);
            this.node.destroy();
            var scene = cc.director.getScene();
            var block = cc.instantiate(this.blockPrefab);
            block.parent = scene;
            block.setPosition(pos);
            ScrollviewControl = 0;
            
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            ScrollviewControl = 1;
        }, this);

    },




    // update (dt) {},
});
