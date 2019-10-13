cc.Class({
    extends: cc.Component,
    properties: {
    audio: {
    default: null,
    type: cc.AudioClip
    }
    },
     start(){},
    onLoad: function () {
    this.current = cc.audioEngine.play(this.audio, false, 1);
    },
     
    onDestroy: function () {
    cc.audioEngine.stop(this.current);
    }
    });