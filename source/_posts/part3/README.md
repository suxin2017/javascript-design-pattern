# 第三部分

## 行为型设计模式
  
第一部分关注如何生成一个对象，制🧱场的奥秘

第二部分关注如何拓展功能点，添砖加瓦

最后关于常用设计模式的一部分，是行为型设计模式

关注对象之间职责划分，算法抽象，对象之间交流

- [模版方法模式](/javascript-design-pattern/part3/templete)
  模版模式，定义一组算法骨架，将具体实现放置到子类去实现，让子类不改变父类就能重定义实现步骤,
  关注对模版的拓展
- [观察者模式](/javascript-design-pattern/part3/Observer)
  观察者模式，A 触发一个动作然后通知 B， B 接受这个动作作出响应的反应， 也叫发布-订阅模式,
- [状态模式](/javascript-design-pattern/part3/state)
  当一个对象内部改变时候，会改变他的行为，这看起来改变了对象，简化逻辑分支
- [策略模式](/javascript-design-pattern/part3/strategy.ms)
  将定义的一组算法封装起来使其可以相互替换，和状态模式很想，不同的是策略模式不需要管理状态，状态之间没有依赖，封装算法
- [职责链模式](/javascript-design-pattern/part3/chain_of_responsibility)
  将同一类请求进行分解，实现请求在多个对象之间传递，突然想到koa的中间件，mvc模式
- [命令模式](/javascript-design-pattern/part3/command)
  命令模式，将请求与实现接耦并风力成独立对象，使不同的请求对客户端的实现参数化
- [访问者模式](/javascript-design-pattern/part3/vistor)
  针对于对象结构中的元素，定义在不改变该对象的前提下访问结构中元素的新方法,不改变方法，值改变当前函数运行环境
- [中介者模式](/javascript-design-pattern/part3/mediator)
  封装对象之间交互，使对象之间不再引用，降低耦合。
  中介者和观察者模式很像，不同点在于中介这数据流动是单项的
- [备忘录模式](/javascript-design-pattern/part3/memento)
  在不破坏对象的封装的前提下，在对象外捕获并保存对象内部的状态，以便对象日后使用或者恢复 
- [迭代器模式](/javascript-design-pattern/part3/iterator)
  在不暴露对象内部结构的同事，顺序访问聚合对象内部的元素 
- [解释器模式](/javascript-design-pattern/part3/interpreter)
  给出语言文法表现形式，定义一种解释器，通过解释器解释语句中定义的意思，
