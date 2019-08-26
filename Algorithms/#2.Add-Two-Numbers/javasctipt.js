/*
2. Add Two Numbers [Medium] [Linked-List]
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let current = new ListNode(0);
    let result = current;
    
    while(l1 || l2) {
        
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        sum = sum > 9 ? 1 : 0;
    }
    console.log(current)
    if(sum) {
        current.next = new ListNode(sum);
    }
    
    return result.next;
};

const first = { val: 2, next: { val: 4, next: { val: 3, next: null} } }
const second = { val: 5, next: { val: 6, next: { val: 4, next: null} } }

let test = addTwoNumbers(first,second)
console.log(test.val, test.next.val, test.next.next.val)