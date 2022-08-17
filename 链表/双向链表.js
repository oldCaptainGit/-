// 双向链表：既可以从头到尾，又可以从尾到头
// 双向链表封装
function DoublyLinkedList() {
  // 内部类： 节点类
  function DoublyNode(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
  // 属性
  this.head = null;
  this.tail = null;
  this.length = 0;

  // 常见操作
  // 1.append
  DoublyLinkedList.prototype.append = (data) => {
    // 1.创建元素
    var node = new DoublyNode(data);
    // 判断是否为第一个节点
    if (this.head = null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  // 2.toString
  // 2.1 toString
  DoublyLinkedList.prototype.toString = () => {
    return this.backwardString();
  }

  // 2.2 forwardToString
  DoublyLinkedList.prototype.forwardString = () => {
    let current = this.tail;
    let resultString = "";

    while (current) {
      resultString += current.data + " ";
      current = current.prev;
    }
    return resultString;
  }

  // 2.3 backwardString
  DoublyLinkedList.prototype.backwardString = () => {
    let current = this.head;
    let resultString = "";

    while (current) {
      resultString += current.data + " ";
      current = current.next;
    }
    return resultString;
  }

  // 3.insert方法
  DoublyLinkedList.prototype.insert = (position, newNode) => {
    if (position < 0 || position > this.length) return;

    if (position == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (position == this.length) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      var current = this.head;
      var index = 0;
      while (index++ < position) {
        current = current.next;
      }
      newNode.next = current;
      newNode.prev = current.prev;
      current.prev.next = newNode;
      current.prev = newNode;
    }
  }

  // 4.get方法
  DoublyLinkedList.prototype.get = (position) => {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  }

  // 5.indexOf方法
  DoublyLinkedList.prototype.indexOf = (data) => {
    var current = this.head;
    var index = 0;
    while (current) {
      if (current.data == data) {
        return index
      }
      current = current.next;
      index += 1;
    }
    return -1
  }


}