

cc.Class({
    extends: cc.Component,

    properties: {
  
    },


    start () {
        var decetion =[levelControl1,levelControl2,levelControl3,levelControl4,levelControl5,
            levelControl6,levelControl7,levelControl8,levelControl9,levelControl10,
            levelControl11,levelControl12,levelControl13,levelControl14,levelControl15];
       
        for (var item in decetion)
        {
            
            if (decetion[item] == 1)
            {
                i+=1;
            }
        }
        this.node.getComponent(cc.RichText).string = "<color=BLACK>"+i+"/15</c>";
        i = 0;
        
    },

});
