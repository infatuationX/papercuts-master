var loadingBg = "https://papercuts-1259306033.cos.ap-chengdu.myqcloud.com/loading.jpg";

 

var scene = new cc.Scene();

 

// 1. Add canvas component

var root = new cc.Node();

var canvas = root.addComponent(cc.Canvas);

root.parent = scene;

 

// 2. Add sprite component

var bgSprite = root.addComponent(cc.Sprite);

var createImage = function (sprite, url) {

if (cc.sys.platform == cc.sys.WECHAT_GAME) {

let image = wx.createImage();

image.onload = function () {

let texture = new cc.Texture2D();

texture.initWithElement(image);

texture.handleLoadedTexture();

sprite.spriteFrame = new cc.SpriteFrame(texture);

};

image.src = url;

}

};

createImage(bgSprite, loadingBg);

 

// 3. Add label component

// var node = new cc.Node();

// var label = node.addComponent(cc.Label);

// label.fontSize = 25;

// label.lineHeight = 30;

// label.string = "正在加载资源中……";

// node.parent = root;

 

module.exports = scene;
