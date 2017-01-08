/* 3.2 
   push와 pop의 두 가지 연산뿐 아니라, 
   최소값을 갖는 원소를 반환하는 min 연산을 갖춘 스택은 어떻게 구현할 수 있겠는가?
   push, pop 그리고 min은 공히 O(1)시간에 처리되어야 한다.
*/


function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    this.min = 0;
    this.getMin = getMin;
    this.setMin = setMin;
}

function push(element) {
    this.dataStore[this.top++] = element;
    this.setMin();
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top-1];
}

function length() {
    return this.top;
}

function clear() {
    return this.top = 0;
}


// function min() {
//     var index = this.length();
//     var value = this.pop();

//     while(index >= 0) {
//         index = this.length();
//         var newValue = this.pop();

//         if(value > newValue) {
//             value = newValue;
//         }
//     }

//     return value;
// }

function setMin() {
    var value = this.peek();
    if(this.length() > 1) {
        if(value < this.min) {
            this.min = value;
        }
    } else {
        this.min = value;
    }
}

function getMin() {
    return this.min;
}
