
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
            if(shakeControl == 0)
            {
                var com=this.node.getChildByName("shake1").getComponent("cc.Sprite");
                com.spriteFrame=this.ima1;
            }
            else
            {
                var com=this.node.getChildByName("shake1").getComponent("cc.Sprite");
                com.spriteFrame=this.ima2;
            }
        }, this);
       

    },

    update(){
        
        shakeControl;  
    },

});
