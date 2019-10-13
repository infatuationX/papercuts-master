
cc.Class({
    extends: cc.Component,

    properties: {
        _isShow: false,
        x1:0,
        y1:0,
        x2:0,
        y2:0,
        speed:0.2,
    },


    showSearchBlock () {
        this._isShow = !this._isShow;
        let action = null;
        if (this._isShow) {
            action = cc.moveBy(this.speed, cc.v2(this.x1, this.y1));
        }
        else {
            action = cc.moveBy(this.speed , cc.v2(this.x2, this.y2));
        }
        this.node.runAction(action);
    }
});
