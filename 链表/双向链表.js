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

  // 2.将链表转化为字符串
  // 2.1 toString
  DoublyLinkedList.prototype.toString = () => {
    return this.backwardString()
  }

  // 2.2 forwardString
  DoublyLinkedList.prototype.forwardString = () => {
    let current = this.head;
    let string = "";
    while (current) {
      string += current.data + " ";
      current = current.next;
    }
    return string;
  }

  // 2.3 backwardString
  DoublyLinkedList.prototype.backwardString = () => {
    let current = this.tail;
    let string = "";
    while (current) {
      string += current.prev + "";
      current = current.prev;
    }
    return string;
  }


}