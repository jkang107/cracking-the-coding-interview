abcccccccaaa라면
    a2b1c7a3과 같이 압축되어야 한다. 압축결과로 만들어지는 문자열이
    원래 문자열보다 짧아지지 않는 경우, 이 메서드는 원래 문자열을 그대로 반환해야 한다.

*/

function test(str) {
    var copy_str = str.split('');
    var newArr = [];
    var temp = null;
    var count = 1;

    for(var i = 0; i < copy_str.length; i++) {
        if(!temp) {
            temp = copy_str[0];
            newArr.push(copy_str[0]);
            continue;
        }

        if(temp == copy_str[i]) {
            count++;
        } else {
            if(count !== 1) {
                newArr.push(count);       
            }
            count = 1;
            temp = copy_str[i];
            newArr.push(copy_str[i]);    
        }
    }
    

    return newArr.join('').length < copy_str.length ? newArr.join('') : str
    
}
