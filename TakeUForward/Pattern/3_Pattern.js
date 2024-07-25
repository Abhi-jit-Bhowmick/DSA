/* 
    PRINT ---->

    1
    12
    123
    1234
    12345

*/


function pattern(row) {
    for (let i = 0; i < row; i++) {
        ans = ""

        for (let j = 0; j <= i; j++) {
            ans += j + 1 + " "
        }

        console.log(ans)
    }
}

pattern(4)