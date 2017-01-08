
n Stack() {
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
