

cc.Class({
    extends: cc.Component,

    properties: {

    },


    start () {

    },

    onLoad:function()
    {
        if(levelControl15 == 0)
        {
        this.node.active = false;
        }
    }
});
