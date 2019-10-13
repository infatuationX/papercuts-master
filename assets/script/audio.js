cc.Class({
    extends: cc.Component,

    properties: {
        audio: {
            default: null,
            type: cc.AudioClip
        },
    },


    start(){
        if(musicPlay == 0){
            id = cc.audioEngine.play(this.audio, true, 1);
      
            musicPlay = 1;
           // console.log('musicPlay' + musicPlay);
           
        }
    },

    onLoad () {
      
       
        // if(musicPlay == 0){
        //     id = cc.audioEngine.play(this.audio, true, 1);
      
        //     musicPlay = 1;
        //     console.log('musicPlay' + musicPlay);
        // }
       

    },

    set_volume:function(){
        console.log('volumeControl' + volumeControl);
        
         if(volumeControl == 1){
            cc.audioEngine.setVolume(id,0);
            
            volumeControl = 0;
            console.log('volumeControl' + volumeControl);
        }else{
            cc.audioEngine.setVolume(id,1);
            volumeControl = 1;
            console.log('volumeControl' + volumeControl);
        }
    }


});
