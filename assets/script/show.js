

cc.Class({
    extends: cc.Component,

    properties: {
        clipName:"",
    },


    onLoad:function () {
        var decetion =[levelControl1,levelControl2,levelControl3,levelControl4,levelControl5,
            levelControl6,levelControl7,levelControl8,levelControl9,levelControl10,
            levelControl11,levelControl12,levelControl13,levelControl14,levelControl15];
       var c = 0;
        for (var item in decetion)
        {
            
            if (decetion[item] == 1)
            {
                c+=1;
            }
        }
        if(c == 15)
        {
            this.node.active = true;
        } 
        else{
            this.node.active = false;
        }
        c = 0;
    },

    play(){
        this.getComponent(cc.Animation).play(this.clipName);
    },

    


});
