
cc.Class({
    extends: cc.Component,

    properties: {
        x:0,
        y:0,

        speed:0.2,
    },


    showBlock () {
        let action = null;
        action = cc.moveTo(this.speed, cc.v2(this.x, this.y));
        this.node.runAction(action);
    }
});
