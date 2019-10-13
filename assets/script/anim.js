cc.Class({
    extends: cc.Component,

    properties: {
        anim:cc.Animation,
        upBtn:cc.Button,
        bottomBtn:cc.Button

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    play(){
        this.anim.play('sub_up')
    
    },
    playback(){
        this.anim.play('sub_down')
    
    },

    onFinishAnim(isHide){
        this.upBtn.node.active = isHide;
        this.bottomBtn.node.active = !isHide;
    },
    start () {

    },

    // update (dt) {},
});