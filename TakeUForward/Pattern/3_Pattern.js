/* 
    
    LINK:: https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/
 

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