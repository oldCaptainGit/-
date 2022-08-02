function Stack() {
  // 栈中的属性
  this.items = [];

  // 栈的相关操作
  // 1.压栈
  // this.push = (ele) => this.items.push(ele)
  Stack.prototype.push = (ele) => this.items.push(ele)

  // 2.取出元素
  Stack.prototype.pop = () => this.items.pop();

  // 3.查看栈顶元素
  Stack.prototype.peek = () => this.items[this.items.length - 1]

  // 4.判断是否为空
  Stack.prototype.isEmpty = () => this.items.length == 0;
}

// 栈的使用
var s = new Stack();
s.push(20)
s.push(30)
console.log(s);
console.log(s.isEmpty());
console.log(s.peek());

// 将十进制转为二进制
function dec2bin(decNumber) {
  var stack = new Stack();
  while (decNumber > 0) {
    stack.push(decNumber % 2)
    decNumber = Math.floor(decNumber / 2)
  }
  var binaryString = "";
  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString;
}

let res = dec2bin(100)
console.log(res);
