
/*
    1.7 
    M x N 행렬을 순회하면서 0인 원소를 발견하면, 해당 원소가 속한 행과 열의
    모든 원소를 0으로 설정하는 알고리즘을 작성하라.


*/

function test(arr) {
    var newArr = [];

    var col, row;
    for(var i = 0; i < arr.length; i ++) {
        for(var j = 0; j < arr[i].length; j++) {
            if(arr[i][j] == 0) {
                newArr.push([i,j]);
            }
        }
    }

    for(var k=0; k < newArr.length; k++) {
        
        row = newArr[k][0];
        col = newArr[k][1];

        for(var i = 0; i < arr.length; i ++) {
            for(var j = 0; j < arr[i].length; j++) {
                if(i == row) {
                    arr[i][j] = 0;
                }

                if(j == col) {
                    arr[i][j] = 0;
                }
            }
        }
    }

    var result = '';
    
    for(var i = 0; i < arr.length; i ++) {
        for(var j = 0; j < arr[i].length; j++) {
            result += arr[i][j]+ ', ';
        }
        result += "\n";
    }

    return result;
}
