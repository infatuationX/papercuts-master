

cc.Class({
    extends: cc.Component,

    properties: {

    },


    update(){
        ScrollviewControl;
        if(ScrollviewControl == 1){
            this.node.getComponent(cc.ScrollView).horizontal = false;
        }
        else
        {
            this.node.getComponent(cc.ScrollView).horizontal = true;
        }
    }

    // update (dt) {},
});
