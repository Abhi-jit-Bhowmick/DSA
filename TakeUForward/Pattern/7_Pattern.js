/*

    LINK:: https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/


    PRINT ----->

        *    
       ***   
      *****  
     ******* 
    *********

    

    ----*----   [4space , 1star, 4space]    [(n-i-1) , (2i+1) , (n-i-1)]
    ---***---   [3space , 3star, 3space]    
    --*****--   [2space , 5star, 2pace]
    -*******-   [1space , 7star, 1space]
    *********   [0space , 9star, 0space]

*/


function pattern(n) {

    for (let i = 0; i < n; i++) {

        let ans = ""
        //  Space

        for (let j = 0; j < n - 1 - i; j++) {
            ans += " "
        }

        // Star
        for (let k = 0; k < (2 * i) + 1; k++) {
            ans += "*"
        }


        // Space
        for (let j = 0; j < i - 1 - i; j++) {
            ans += " "
        }

        console.log(ans)
    }
}


pattern(4)