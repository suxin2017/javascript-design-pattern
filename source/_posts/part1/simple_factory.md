基础代码
  建立一个工厂，生产A,B,C三种产品

  ```js
  var FunctionDemo = function(name){
    switch(name){
      case 'A':
       return new A();
      case 'B':
       return new B();
      case 'C':
       return new C();
    }
  }

  var A = function(){
    this.body="A"
  }

  var B = function(){
    this.body="B"
  }

  var C = function(){
    this.body="C"
  }

  var result = FunctionDemo('A')

  console.log(result.body)
  // A

  ```

  js 用工厂模式创建对象，这是JavaScript的一种延伸。
  ⚠️:不过这里有个问题就是用工厂创建的方法没有办法使用instanceof 去比较类型，后期回更新出一个JavaScript的面向对象的文档

  ```js
  function createBook(name,time,type){
    //创建缓存对象
    var o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    o.getName = ()=>{
      console.log(this.name)
    }
    return o;
  }
  ```
  
