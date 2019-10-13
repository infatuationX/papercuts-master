
cc.Class({
    extends: cc.Component,

    properties: {
        ima1: {
            type: cc.SpriteFrame,
            default: null
        },
        ima2: {
            type: cc.SpriteFrame,
            default: null
        },
        ima3: {
            type: cc.SpriteFrame,
            default: null
        },
        ima4: {
            type: cc.SpriteFrame,
            default: null
        },
        ima5: {
            type: cc.SpriteFrame,
            default: null
        },
        ima6: {
            type: cc.SpriteFrame,
            default: null
        },
    },



    start() {
        if (volumeControl == 1) {
            this.changeFrame1();
        }
        else {
            this.changeFrame2();
        }

        if (shakeControl == 0) {
            this.changeFrame3();
        }
        else {
            this.changeFrame4();
        }

        if (difficultControl == 0) {
            this.changeFrame5();
        }
        else {
            this.changeFrame6();
        }

    },

    update() {

        volumeControl;
        difficultControl;
        shakeControl;
    },

    changeFrame1: function () {
        var com = this.node.getChildByName("settingPanel").getChildByName("audioControl").getChildByName("music111").getComponent(cc.Sprite);
        com.spriteFrame = this.ima1;
    },

    changeFrame2: function () {
        //var com=this.node.getComponent("cc.Sprite");
        var com = this.node.getChildByName("settingPanel").getChildByName("audioControl").getChildByName("music111").getComponent(cc.Sprite);
        com.spriteFrame = this.ima2;
    },

    changeFrame3: function () {
        var com = this.node.getChildByName("settingPanel").getChildByName("shake").getChildByName("shake1").getComponent(cc.Sprite);
        com.spriteFrame = this.ima3;
    },

    changeFrame4: function () {
        //var com=this.node.getComponent("cc.Sprite");
        var com = this.node.getChildByName("settingPanel").getChildByName("shake").getChildByName("shake1").getComponent(cc.Sprite);
        com.spriteFrame = this.ima4;
    },

    changeFrame5: function () {
        var com = this.node.getChildByName("settingPanel").getChildByName("difficult").getChildByName("Background").getComponent(cc.Sprite);
        com.spriteFrame = this.ima5;
    },

    changeFrame6: function () {
        //var com=this.node.getComponent("cc.Sprite");
        var com = this.node.getChildByName("settingPanel").getChildByName("difficult").getChildByName("Background").getComponent(cc.Sprite);
        com.spriteFrame = this.ima6;
    }



});
