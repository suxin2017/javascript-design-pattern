在产品经理纵横的时代，需求总是说变就变
身为一个开发小白，无奈只能屈服在它的魔爪之下

上篇说到的简单工厂在拓展性上会有些不足
工厂方法应然而生
书中介绍的场景是个广告场景，也就是说各种个样的广告
标题和内容是不断变化的
dom样式格式是基本不变的
```js
  var Factory = function(type,content){
    //保证当前this指向Factory
    if(this instanceof Factory){
      var result = new this[type](content);

    }else{
      //如果不是返回一个实例
      return new Factory(type,content)
    }
  }
  Factory.prototype = {
    basics:function(content,predefine){
      return `<div class="box">
      <div class="content">${content}</div> 
      </div>`
    }
    Java:function(content){
      return this.basics(content)
    }
    Php:function(content){
      return this.basics(content)
    }
  }

  //demo

  Factory("java","人潮人海中哪里有工作")
  Factory("php","拍黄片的不是我")
  
```

昨天突然想到工厂方法不仅可以创建对象而且还可以创建方法
比如我一个util
这样就封装了一系列的方法 
```js 
util={
  math:func
  max:func
}
```