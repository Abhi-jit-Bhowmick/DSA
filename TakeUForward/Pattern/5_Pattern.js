/*

    LINK:: https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/
 
    PRINT----->

    *****
    ****
    ***
    **
    *

*/


function pattern(row) {

    for (let i = row; i > 0; i--) {

        let ans = ""


        for (let j = 0; j < i; j++) {
            ans += "* "
        }

        console.log(ans);
    }
}

pattern(4)