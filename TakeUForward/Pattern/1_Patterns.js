/**
 
    PRINT THE PATTERN

    ****
    ****
    ****
    ****


*/


function pattern1(row, collumn) {

    // Outer Loop
    for (let i = 0; i < row; i++) {

        //inner loop
        let ans = ""

        for (let j = 0; j < collumn; j++) {
            ans += "* "
        }
        console.log(ans)

    }
}


pattern1(4, 4)