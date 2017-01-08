/*
    3.4 
    유명한 하노이 탑 문제에는 3개의 탑과 N개의 원판이 등장하는데,
    각 원판은 어느 탑으로도 옮길 수 있다.
    하노이 탑 퍼즐은 세 개의 탑 가운데 하나에 이 N개의 원판을 쌓아두고 시작한다.
    이 때 원판들은 지름이 작은 원판이 위쪽에 오도록 배열된다.
    하노이 탑 퍼즐에는 다음과 같은 제약 조건들이 있다.

    1) 한 번에 하나의 원판만 옮길 수 있다.
    2) 탑의 맨 꼭대기에 있는 원판은 옆에 있는 탑으로 옮길 수 있다.
    3) 원판은 자기보다 지름이 큰 원판 위로만 옮길 수 있다.

    스택을 사용하여, 첫 번째 탑에 있는 모든 원판을 마지막 탑으로 옮기는 프로그래밍을 작성하라.
*/



function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
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


function hanoiTop(n) {
    this.print = print;
    this.top = 3;
    this.numOfBoard = n;
    this.move = move;
    this.init = init;

    this.init();
}

function init() {
    this.top_1 = new Stack();
    this.top_2 = new Stack();
    this.top_3 = new Stack();

    for(var i = this.numOfBoard; i > 0; i--) {
        this.top_1.push(i);
    }
}

function print() {
    
    console.log("1 번째 탑 \n");
    while(this.top_1.length() > 0) {
        console.log(this.top_1.pop() + "\n");
    }

    console.log("2 번째 탑 \n");
    while(this.top_2.length() > 0) {
        console.log(this.top_2.pop() + "\n");
    }

    console.log("3 번째 탑 \n");
    while(this.top_3.length() > 0) {
        console.log(this.top_3.pop() + "\n");
    }
    
}

function move() {
    var tmp_stack;

    while(this.top_1.length() > -1) {
        // 1번에서 peek한다.
        var value_1 = this.top_1.peek();
        var value_2 = this.top_2.peek();
        var value_3 = this.top_3.peek();
        var tmp;
        

        // 1-1)그 값이 2, 3번이 비어 있거나, 작을 경우,
        if( value_2 == undefined || value_1 < value_2 ) {
            // 1-1)1번에서 pop 한다.
            tmp = this.top_1.pop();
            this.top_2.push(tmp);

        } else if( value_3 == undefined || value_1 < value_3 ) {
            // 1-1)1번에서 pop 한다.
            tmp = this.top_1.pop();
            this.top_3.push(tmp);

        } else {
            // 1-2)그 값이 2, 3번이 차있고, 클 경우,
            // 1-2)2, 3 번을 각각 peek하고 둘 중 작은 애를 pop하고, 다른쪽으로 push한다.
            

            if(value_2 < value_3) {
                tmp = this.top_2.pop();
                if(tmp_stack == this.top_2) {
                    this.top_1.push(tmp);
                } else {
                    this.top_3.push(tmp);
                }
                tmp_stack = this.top_2;
                
            } else {
                tmp = this.top_3.pop();
                if(tmp_stack == this.top_3) {
                    this.top_1.push(tmp);
                } else {
                    this.top_2.push(tmp);
                }
                tmp_stack = this.top_3;
            }
        }    
    }
    
    this.print();
}
