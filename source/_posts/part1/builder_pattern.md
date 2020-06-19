```js
//房子
var Hose = function(){
  this.window = new Window();
  this.door = new WIndow();
  this.wall = new Wall();
}

var Window = function(){
  var that = this;
  this.say = "我是来自中国的窗户"
  (function(){
    //自执行
  })()
}

var Wall = function(){
  var that = this;
  this.say = "我是来自长城的瓷砖"
}

var Door = function(){
  this.say = "我是来自南天门的门"
}
```