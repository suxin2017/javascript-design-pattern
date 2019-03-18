外观模式很简单
  - 组合相似接口
  - 组合不同功能，提供简单接口
  
```js

  //组合两个不同的功能，形成一个功能
  var facede = function(){
    this.video = new Video();
    this.sound = new Sound();
  }
  facede.prototype = {
    on:function(){
      this.video.on()
      this.sound.on()
    },
    off:function(){
      this.video.off()
      this.sound.off()
    }
  }

   function Video(){};
   Video.prototype={on:()=>{console.log("视频已经打开")},off:()=>{console.log("视频已经关闭")}}
   function Sound(){};
   Sound.prototype={on:()=>{console.log("声音已经打开")},off:()=>{console.log("声音已经关闭")}}

  
  //组合两个相识的功能
  /** 
    A 相加
      A.add(a,a)
    B 是累加
      B.add(a)
    两个功能都是获取元素,
    封装一下
  */
  var facede = function(){}
  facede.prototype = {
    getElements:function(){
      if(arguments.length>1){
        A.getElement(arguments[0],arguments[1])
      }else{
        B.getElement(arguments[0])
      }
    }
  }
```