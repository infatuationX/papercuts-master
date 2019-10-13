
cc.Class({
    extends: cc.Component,

    properties: {
        layer: 0,
    },


    onLoad:function() {
        this.node.zIndex = this.layer;
    },

    start () {

    },



    // update (dt) {},
});
