
cc.Class({
    extends: cc.Component,

    properties: {
        previewPrefab: cc.Prefab,
        x: 540,
        y: 960,
    },
    
    start(){
        
            this.spawnPreviewPrefab();       
    },

    spawnPreviewPrefab: function(){
        this.node.on(cc.Node.EventType.TOUCH_END, function ()
        {  
            var scene = cc.director.getScene();
            var preview = cc.instantiate(this.previewPrefab);
            preview.parent = scene;
            preview.setPosition(this.x, this.y);
        },this);
    },
});
