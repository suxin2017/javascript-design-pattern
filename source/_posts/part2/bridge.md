```js

//桥接模式

// A=>bridge
// B=>bridge
// C=>bridge
// 提出公共部分，将业务与代码解耦

// 场景
// 不同业务，但是逻辑代码相同，提出逻辑代码
var Bridge = function(obj){
  this.obj = obj
}
Bridge.prototype = {
  setColor:function(color){
    console.log(`set ${color} to ${this.obj}`)
    return this;
  },
  setTitle:function(title){
    console.log(`set ${title} to ${this.obj}`)
    return this;
  }
}

new Bridge('input').setColor('red').setTitle('输入框')
new Bridge('button').setColor('blue').setTitle('按钮')

```