
```js
//a=>b=>c
//a<=b<=c

var A = function(){
  this.think = '我想买个房子'
  this.type = 'buy'
  //但是没有时间去看
}
var C = function(){
  this.type = 'sell'
  this.think = '我想卖房子'
  //但是不想操心怎么找买家
}
var B = function(){
  //代理缓存
  this.sell = []
  this.buy = []
}
B.prototype = {
  register : function(obj){
    this[obj.type].push(obj)
    this.match()
  },
  match:function(){
    let length = this.sell.length > this.buy.length ?this.sell.length:this.buy.length;
    for(let i =0;i<length;i++){
      if(this.sell[i]&&this.buy[i]){
        console.log('成功代理一单','买方',this.buy[i],'卖方',this.sell[i])
        this.sell.splice(i,1)
        this.buy.splice(i,1)
      }
    }
  }

}
var Proxy = new B()
Proxy.register(new A)
Proxy.register(new B)
```