

cc.Class({
    extends: cc.Component,

    properties: {

    },


    start () {

    },

    backHome(){
        cc.director.loadScene("mainScene");
    },
    
    SwitchTeachMode(){
        cc.director.loadScene("teachMode");
    },

    SwitchStageMode(){
        cc.director.loadScene("stageMode");
    },

    
    SwitchStageZero(){
        cc.director.loadScene("stageZero");
    },


    SwitchStageOne(){
        cc.director.loadScene("stageOne");
    },

    SwitchStageTwo(){
        cc.director.loadScene("stageTwo");
    },

    SwitchStageThree(){
        cc.director.loadScene("stageThree");
    },

    SwitchStageFour(){
        cc.director.loadScene("stageFour");
    },

    SwitchStageFive(){
        cc.director.loadScene("stageFive");
    },

    SwitchStageSix(){
        cc.director.loadScene("stageSix");
    },

    SwitchStageSeven(){
        cc.director.loadScene("stageSeven");
    },

    SwitchStageEight(){
        cc.director.loadScene("stageEight");
    },

    SwitchStageNine(){
        cc.director.loadScene("stageNine");
    },

    SwitchStageTen(){
        cc.director.loadScene("stageTen");
    },

    SwitchStageEleven(){
        cc.director.loadScene("stageEleven");
    },

    SwitchStageTwelve(){
        cc.director.loadScene("stageTwelve");
    },

    SwitchStageThirteen(){
        cc.director.loadScene("stageThirteen");
    },

    SwitchStageFourteen(){
        cc.director.loadScene("stageFourteen");
    },

    SwitchLiHuiMode(){
        cc.director.loadScene("LiHui");
    },

    changeCommon(){
        CollisionCounter = 0;
    },

    level1(){
        levelControl1 = 1;
        cc.sys.localStorage.setItem('Control1', levelControl1);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "1"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },

    level2(){
        levelControl2 = 1;
        cc.sys.localStorage.setItem('Control2', levelControl2);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "2"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },

    level3(){
        levelControl3 = 1;
        cc.sys.localStorage.setItem('Control3', levelControl3);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "3"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },
    
    level4(){
        levelControl4 = 1;
        cc.sys.localStorage.setItem('Control4', levelControl4);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "4"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },
    
    level5(){
        levelControl5 = 1;
        cc.sys.localStorage.setItem('Control5', levelControl5);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "5"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },
    
    level6(){
        levelControl6 = 1;
        cc.sys.localStorage.setItem('Control6', levelControl6);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "6"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },
    
    level7(){
        levelControl7 = 1;
        cc.sys.localStorage.setItem('Control7', levelControl7);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "7"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },
    
    level8(){
        levelControl8 = 1;
        cc.sys.localStorage.setItem('Control8', levelControl8);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "8"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },
    
    level9(){
        levelControl9 = 1;
        cc.sys.localStorage.setItem('Control9', levelControl9);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "9"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },
    
    level10(){
        levelControl10 = 1;
        cc.sys.localStorage.setItem('Control10', levelControl10);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "10"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },

    level11(){
        levelControl11 = 1;
        cc.sys.localStorage.setItem('Control11', levelControl11);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "11"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },
    

    level12(){
        levelControl12 = 1;
        cc.sys.localStorage.setItem('Control12', levelControl12);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "12"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },

    level13(){
        levelControl13 = 1;
        cc.sys.localStorage.setItem('Control13', levelControl13);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "13"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },

    
    level14(){
        levelControl14 = 1;
        cc.sys.localStorage.setItem('Control14', levelControl14);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "14"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },


    
    level15(){
        levelControl15 = 1;
        cc.sys.localStorage.setItem('Control15', levelControl15);
        window.wx.setUserCloudStorage({
            KVDataList: [{key: "level", value: "15"}],
            success: function (res) {
                console.log('setUserCloudStorage', 'success', res)
            },
            fail: function (res) {
                console.log('setUserCloudStorage', 'fail')
            },
            complete: function (res) {
                console.log('setUserCloudStorage', 'ok')
            }
        });
    },
 

    close(){
        this.node.destroy();
    },

    
    shakeControl(){
        if (shakeControl == 0){
            shakeControl = 1;
        }
        else if (shakeControl == 1 ){
            shakeControl = 0;
        }

    }






});
