

cc.Class({
    extends: cc.Component,

    properties: {
        audio: {
            default: null,
            type: cc.AudioClip
        },
    },

    start () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var scene = cc.director.getScene();
            this.node.parent = scene;
            var pos = event.getLocation();
            this.node.setPosition(pos);
         }, this);

    },

    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;
    },


    onCollisionEnter: function () {
        if(musicPlay == 1){
            cc.audioEngine.play(this.audio, false, 1);
            }
        this.node.destroy();
        if (shakeControl == 0){
            wx.vibrateShort();
        }
        //wx.vibrateShort();
  
    }
});
