/*

    LINK:: https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/
 

    1
    22
    333
    4444
    55555

*/


function pattern(row) {

    for (let i = 0; i < row; i++) {

        let ans = ""

        for (let j = 0; j <= i; j++) {
            ans += i + 1
        }

        console.log(ans);
    }
}

pattern(5)