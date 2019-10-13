

cc.Class({
    extends: cc.Component,

    properties: {
        blockPrefab: cc.Prefab,
        xPosition:0,
        yPosition:0,
    },

    spawnBlock: function() {
        var scene = cc.director.getScene();
        var block = cc.instantiate(this.blockPrefab);
        block.parent = scene;
        block.setPosition(this.xPosition , this.yPosition);
    },



  

    start () {
        this.node.on(cc.Node.EventType.TOUCH_END, function (event){
           this.spawnBlock();
        //    this.node.destroy();

        }, this);

        // this.node.on(cc.Node.EventType.TOUCH_END, function (event){
        //     this.node.destroy();
 
        //  }, this);
        



    },

    
});
