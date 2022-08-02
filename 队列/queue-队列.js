function Queue() {
  this.items = [];

  // 进入队列
  Queue.prototype.enqueue = (ele) => this.items.push(ele)
  // 删除第一个
  Queue.prototype.dequeue = (ele) => this.items.shift(ele)
  // 查看第一个
  Queue.prototype.front = (ele) => this.items[0]
  // 是否为空
  Queue.prototype.isEmpty = () => this.items.length == 0;
  // 元素个数
  Queue.prototype.size = () => this.items.length;
  // toSting
  Queue.prototype.toString = () => {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i].toString();
    }
    return str
  }
}

// 击鼓传花
function passGame(nameList, num) {
  // 1.创建队列
  let queue = new Queue();
  // 2.循环入队
  nameList.map(item => queue.enqueue(item))
  // 3.数数
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  let endName = queue.front()
  return nameList.indexOf(endName)
}

let one = passGame(['xianlan', 'yifan', 'chengshuai'], 3)
console.log(one);
