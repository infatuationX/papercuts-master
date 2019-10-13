cc.Class({
    extends: cc.Component,

    properties: {
    
        audio: {
            type: cc.AudioSource, 
            default: null,
        },
    },



        start () {
            this.audio2 = this.node.getComponent(cc.AudioSource);
            if(volumeControl == 1){
                // this.scheduleOnce(function() {
                // this.audio2.pause(); // 暂停
                // }.bind(this), 3);
    
                this.audio2.mute = false;
            }else{
                // this.scheduleOnce(function() {
                // this.audio2.resume(); // 恢复
                //  }.bind(this), 6);
    
                this.audio2.mute = true;
            }
            

    },
    
        
        

   
});
