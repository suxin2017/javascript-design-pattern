```js
模版模式两步走
  1. 提取公共抽象
  2. 子类拓展具体实现

  比如创建一个提示框模版
  //创建抽象方法
  var Alert = function(data){
    if(!data){
      return;
    }
    this.content = data.content;
  }
  Alert.prototype = {
    init:function(){
      console.log('初始化')
    }
    alert:function(){
      alert(this.content)
    }
  }
  //子类拓展
  var RightAlert = function(data){
    //构造函数基层
    Alert.call(this,data)
    this.config = 'right'
  }
  //原型链继承
  RightAlert.prototype = new Alert();
```