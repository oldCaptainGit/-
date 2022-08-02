function PriorityQueue() {
  // 内部类
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  // 封装属性
  this.items = [];
  // 实现插入方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    // 1.创建queueElement对象
    let queueElement = new QueueElement(element, priority);

    // 2.判断队列是否为空
    if (this.items.length == 0) {
      this.items.push(queueElement);
    } else {
      let addFlag = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          addFlag = true;
          break;
        }
      }
      if (!addFlag) {
        this.items.push(queueElement)
      }
    }
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('aba', 100)
priorityQueue.enqueue('abc', 90)
priorityQueue.enqueue('abd', 130)
console.log(priorityQueue);