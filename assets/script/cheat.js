var touch = 0;

cc.Class({
    extends: cc.Component,

    properties: {
        touchTime:0,

    },

    onLoad:function(){
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            touch += 1;
            cc.log(touch)
        },this);
       
    },

    update () {
        touch;
        this.eggSpawn();
    },

    eggSpawn(){
        if (touch == this.touchTime)
        {
            levelControl1 = 1;
            levelControl2 = 1;
            levelControl3 = 1;
            levelControl4 = 1;
            levelControl5 = 1;
            levelControl6 = 1;
            levelControl7 = 1;
            levelControl8 = 1;
            levelControl9 = 1;
            levelControl10 = 1;
            levelControl11 = 1;
            levelControl12 = 1;
            levelControl13 = 1;
            levelControl14 = 1;
            levelControl15 = 1;
            cc.sys.localStorage.setItem('Control1', levelControl1);
            cc.sys.localStorage.setItem('Control2', levelControl2);
            cc.sys.localStorage.setItem('Control3', levelControl3);
            cc.sys.localStorage.setItem('Control4', levelControl4);
            cc.sys.localStorage.setItem('Control5', levelControl5);
            cc.sys.localStorage.setItem('Control6', levelControl6);
            cc.sys.localStorage.setItem('Control7', levelControl7);
            cc.sys.localStorage.setItem('Control8', levelControl8);
            cc.sys.localStorage.setItem('Control9', levelControl9);
            cc.sys.localStorage.setItem('Control10', levelControl10);
            cc.sys.localStorage.setItem('Control11', levelControl11);
            cc.sys.localStorage.setItem('Control12', levelControl12);
            cc.sys.localStorage.setItem('Control13', levelControl13);
            cc.sys.localStorage.setItem('Control14', levelControl14);
            cc.sys.localStorage.setItem('Control15', levelControl15);
            touch = 0;
            cc.log("success");
        }
    }




});
