
cc.Class({
    extends: cc.Component,

    properties: {
        SuccessPrefab: cc.Prefab,
        ColliderTime:0,
    },

    update() {
        CollisionCounter;
        this.success();


    },

    success:function(){
        
    
        if (CollisionCounter == this.ColliderTime){
            var scene = cc.director.getScene();
            var success = cc.instantiate(this.SuccessPrefab);
            success.parent = scene;
            success.setPosition(540,960);
            cc.log("x");
            CollisionCounter += 1;
        }
    },

});

