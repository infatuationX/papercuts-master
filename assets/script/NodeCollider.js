

cc.Class({
    extends: cc.Component,
    properties: {
        blockPrefab: cc.Prefab,
        xPosition:0,
        yPosition:0,
    },


    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;
        
    },

    onCollisionEnter: function () {
        CollisionCounter += 1;
        cc.log(CollisionCounter);
        this.spawnBlock();
    },

    onCollisionExit: function(){
        this.node.scale = 1;

        var s2 = cc.scaleTo(0, 0);
        var end_func = cc.callFunc(function() {
            this.node.destroy();
        }.bind(this));
        var seq = cc.sequence([s2, end_func]);
        this.node.runAction(seq);

    },

    spawnBlock: function() {
        var scene = cc.director.getScene();
        var block = cc.instantiate(this.blockPrefab);
        block.parent = scene;
        block.setPosition(this.xPosition , this.yPosition);
    },

});
