
cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad: function () {

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            cc.director.getCollisionManager().enabled = false;
            this.opacity = 100;
            var delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;
        }, this.node);

        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.opacity = 255;
            cc.director.getCollisionManager().enabled = true;
        }, this.node);
    },

    update: function (dt) {

    },
});
