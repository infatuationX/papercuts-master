cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    start () {

    },
    onLoad() {

        },

    share:function() {
        //share 
        wx.shareAppMessage({
            title:"快来干我一起游玩剪纸游戏的船新版本！",
            imageUrl:"https://papercuts-1259306033.cos.ap-chengdu.myqcloud.com/share.png",
            success:function(res){
                console.log("分享成功!!!")//成功
            },
            fail:function(res){
                console.log("分享失败!!!")//失败
            }
        })
    }
    // update (dt) {},
});
