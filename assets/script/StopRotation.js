
cc.Class({
    extends: cc.Component,

    properties: {

    },
    
    onLoad:function(){
        if (difficultControl == 1)
        {
        var a = Math.random()*6
        if (a<1)
        {
            var repeat = cc.repeatForever(cc.rotateBy(3, 360));
            this.node.runAction(repeat);
        }
        if(a>=1 && a<2)
        {
            var repeat = cc.repeatForever(cc.rotateBy(3,-360));
            this.node.runAction(repeat);
        }
        if(a>=2 && a<3)
        {
            var repeat = cc.repeatForever(cc.rotateBy(2,-360));
            this.node.runAction(repeat);
        }
        if(a>=3 && a<4)
        {
            var repeat = cc.repeatForever(cc.rotateBy(4,-360));
            this.node.runAction(repeat);
        }
        if(a>=4 && a<5)
        {
            var repeat = cc.repeatForever(cc.rotateBy(2,360));
            this.node.runAction(repeat);
        }
        if(a>=5 && a<6)
        {
            var repeat = cc.repeatForever(cc.rotateBy(4,360));
            this.node.runAction(repeat);
        }
        }
    },


    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            // this.node.rotation=false;
            if (difficultControl == 1)
            {
            this.node.stopAction();
        }
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (difficultControl == 1)
            {
                var b = Math.random()*6
                if (b<1)
                {
                    var repeat = cc.repeatForever(cc.rotateBy(3, 360));
                    this.node.runAction(repeat);
                }
                if(b>=1 && b<2)
                {
                    var repeat = cc.repeatForever(cc.rotateBy(3,-360));
                    this.node.runAction(repeat);
                }
                if(b>=2 && b<3)
                {
                    var repeat = cc.repeatForever(cc.rotateBy(2,-360));
                    this.node.runAction(repeat);
                }
                if(b>=3 && b<4)
                {
                    var repeat = cc.repeatForever(cc.rotateBy(4,-360));
                    this.node.runAction(repeat);
                }
                if(b>=4 && b<5)
                {
                    var repeat = cc.repeatForever(cc.rotateBy(2,360));
                    this.node.runAction(repeat);
                }
                if(b>=5 && b<6)
                {
                    var repeat = cc.repeatForever(cc.rotateBy(4,360));
                    this.node.runAction(repeat);
                }
                }
        }, this);
        
    },

});
