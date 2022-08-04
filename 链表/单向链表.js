function LinkList() {
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  this.head = null;
  this.length = 0;

  // 1.追加方法
  LinkList.prototype.append = function (data) {
    // 创建新的节点
    let newNode = new Node(data);
    // 判断是否为空
    if (this.length == 0) {
      this.head = newNode;
    } else {
      // 找到最后一个节点
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      // 最后节点的next指向新的节点
      current.next = newNode;
    }
    this.length += 1;
  }

  // 2.toString方法
  LinkList.prototype.toString = function () {
    let current = this.head;
    var result = "";
    while (current) {
      result += current.data + " ";
      current = current.next
    }
    return result;
  }

  // 3.insert方法
  LinkList.prototype.insert = (position, data) => {
    if (position < 0 || position > this.length) return false;

    var newNode = new Node(data);
    // 判断插入的位置是否是第一个
    if (position == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      var index = 0;
      var current = this.head;
      var previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous.next = newNode;
    }
    this.length += 1;
    return true;
  }

  // 4.get方法
  LinkList.prototype.get = (position) => {
    if (position < 0 || position >= this.length) return false;

    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }

  // 5.indexOf方法
  LinkList.prototype.indexOf = (data) => {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data == data) {
        return index
      }
      current = current.next;
      index += 1;
    }
    return -1
  }

  // 6.update方法
  LinkList.prototype.update = (position, data) => {
    if (position < 0 || position >= this.length) return false;
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      // 找到当前位置元素
      current = current.next;
    }
    current.data = data;
    return true;
  }

  // remove方法
  // 7.removeAt方法
  LinkList.prototype.removeAt = (position) => {
    if (position < 0 || position >= this.length) return false;
    if (position == 0) {
      this.head = this.head.next;
    } else {
      var index = 0;
      var current = this.head;
      var previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next
      }
      previous.next = current.next;
    }
    this.length -= 1;
    return current.data;
  }

  // 8.remove方法
  LinkList.prototype.remove = (data) => {
    var position = this.indexOf(data);
    return this.removeAt(position);
  }


}

// 测试代码
let linkList = new LinkList()
linkList.append("abc")
linkList.append("def")
linkList.append("ghi")
console.log(linkList.toString());