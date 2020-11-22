// promise都是基于回调模式的

// 高阶函数
// 1、如果你的函数的参数是一个函数
// 2、如果一个函数返回一个函数


// 基于源代码扩展

type Callback = () => void;
type ReturnFn = (...args:any[]) => void;
declare global {
  interface Function {  //接口的合并
    before(fn:Callback):ReturnFn;
  } 
}


Function.prototype.before = function (fn) {
  // this 箭头函数里没有this会向上查找
  return (...args) => {  //此处是把所有参数转变为一个数组
    fn();  //先调用before方法
    this(...args); //在调用原有的core方法 把数组展开
  }
}

function core(...args) {
  console.log('core...', ...args);
}

let fn = core.before(() => {
  console.log('before core...');

})

fn(1, 2, 3);

export {}
