import { Node } from "./node";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  toString() {
    let str = "";
    let temp = this.head;
    while (temp) {
      str += '(' + temp.value + ') -> ';
      temp = temp.next;
    }
    str += 'null';
    return str;
  }

  append(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  prepend(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
      return;
    }
    let temp = this.head;
    this.head = node;
    node.next = temp;
  }

  getSize() {
    let size = 0;
    let temp = this.head;
    while(temp){
        size++;
        temp = temp.next;
    }
    return size;
  }

  getHead() {
    return this.head.value;
  }

  getTail() {
    return this.tail.value;
  }

  at(index) {
    if (index > this.getSize() - 1) {
      return "Index is out of bound";
    }
    let i = 0;
    let temp = this.head;
    while (i != index) {
      temp = temp.next;
      i++;
    }
    return temp.value;
  }

  pop() {
    if (!this.head) {
      console.log("Linked List Empty!");
      return;
    }
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    let temp = this.head;
    while (temp.next != this.tail) {
      temp = temp.next;
    }
    temp.next = null;
    this.tail = temp;
  }

  contains(value){
    let temp = this.head;
    while(temp){
        if(temp.value == value){
            return true;
        }
        temp = temp.next;
    }
    return false;
  }

  find(value){
    let temp = this.head;
    let index = 0;
    while(temp){
        if(temp.value == value){
            return index;
        }
        temp = temp.next;
        index++;
    }
    return null;
  }

  insertAt(value, index){
    let newNode = new Node(value);
    if(index < 0){
        console.log("Index cannot be negative!");
        return;
    }
    if(index > this.getSize()){
        console.log("Index exceeds Linked List size!");
        return;
    }
    if(index == 0){
        this.prepend(newNode);
        return;
    }
    let count = 0;
    let temp = this.head;
    while(count != index-1){
        temp = temp.next;
        count++;
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }

  removeAt(index){
    if(index < 0){
        console.log("Index cannot be negative!");
        return;
    }
    if(index >= this.getSize()){
        console.log("Index must be lesser than Linked List size!");
        return;
    }
    let temp = this.head;
    if(index == 0){
        this.head = this.head.next;
        temp.next = null;
        return;
    }
    let count = 0;
    while(count < index - 1){
        count++;
        temp = temp.next;
    }
    temp.next = temp.next.next;
  }
}

export { LinkedList };
