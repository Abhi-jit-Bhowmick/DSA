/*
   
    LINK:: https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/
 
    
    PRINT

    *
    **
    ***
    ****
    *****
    ******

*/


function pattern2(row) {

    // Outer loop --->
    for (let i = 0; i < row; i++) {
        let ans = ""

        // Inner loop ----->
        for (let j = 0; j <= i; j++) {
            ans += "* "
        }
        console.log(ans)
    }
}

pattern2(6)

