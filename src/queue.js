const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.bashka = 0;
    this.hvost = 0;
  }

  getUnderlyingList() {
   return this.bashka;
  }

  enqueue(znachenie ) {
   
    if (this.bashka !== null) {
      let tochka = new ListNode (znachenie);
      this.hvost.sled = tochka;
      this.hvost = tochka;
    } else {
      this.bashka = new ListNode (znachenie);
      this.hvost = this.head;
    }


  }

  dequeue() {
    let znachenie = this.bashka.value;
    this.bashka = this.bashka.sled;
    return znachenie;
  }
}

module.exports = {
  Queue
};
