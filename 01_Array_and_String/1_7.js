
n test(arr) {
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
