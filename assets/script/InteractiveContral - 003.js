
cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {
        var flag = false;
        if(levelControl3 == 1)
        {
            flag = true;
        }
        else
        {
            flag = false;
        }
        this.node.getComponent(cc.Button).interactable = flag;
    },

});