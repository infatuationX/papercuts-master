

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    
    onLoad: function(){
        //开启右上角的分享
        wx.showShareMenu();
        //监听右上角的分享调用 
            wx.onShareAppMessage(function(res){
                return {
                    title: "快来干我一起体验剪纸游戏的船新版本吧！",
                    imageUrl:"https://papercuts-1259306033.cos.ap-chengdu.myqcloud.com/share.png",
                    success(res){
                        console.log("转发成功!!!")
                    },
                    fail(res){
                        console.log("转发失败!!!")
                    } 
                }
            })
    },

    start () {

    },

    // update (dt) {},
});
