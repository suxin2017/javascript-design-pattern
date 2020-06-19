抽象工厂三步走

  1. 建立抽象工厂
  2. 建立抽象类
  3. 创建抽象子类

```js
//1
var VehicleFactory = function(subType,superType){
  //抽象工厂中是否含有抽象类
  if(typeof VehicleFactory[superType] === "function"){
    //缓存类
    function F(){};
    //缓存类继承父类方法和属性
    F.prototype = new VehicleFactory[superType]();
    //如果直接继承生成的
    subType.constructor = subType;
    subType.prototype = new F();
  }else{
    throw new Error("找不到抽象类")
  }
}

//创建抽象类
VehicleFactory.super =function(){
    this.name="Super"
}
//创建抽象方法
VehicleFactory.super.prototype = {
  showName:function(){
      throw new Error("必须实现该方法")
  }
}



//创建子类
var sub = function(){
  this.name="sub"
}

VehicleFactory(sub,"Super")
```

想到的抽象工厂的应用场景
 - 插件
 - 皮肤

抽象工厂的作用是创建一类抽象的类，创建符合该抽象类的规则的抽象类

