
cc.Class({
    extends: cc.Component,

    properties: {
        ima1:{
            type:cc.SpriteFrame,
            default:null
            },
        ima2:{
            type:cc.SpriteFrame,
            default:null
            },
    },



    start () {
        
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            if(volumeControl == 1)
            {
                var com=this.node.getChildByName("music111").getComponent("cc.Sprite");
                com.spriteFrame=this.ima1;
            }
            else
            {
                var com=this.node.getChildByName("music111").getComponent("cc.Sprite");
                com.spriteFrame=this.ima2;
            }
        }, this);
       

    },

    update(){
        
        volumeControl;  
    },

   

});
