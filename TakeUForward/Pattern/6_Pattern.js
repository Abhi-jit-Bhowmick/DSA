/*

    LINK:: https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/
 
    PRINT ------->

    12345
    1234
    123
    12
    1


*/


function pattern(row) {
    for (let i = row; i > 0; i--) {

        let ans = ""

        for (let j = 0; j < i; j++) {
            ans += j + 1
        }

        console.log(ans)
    }
}

pattern(4)