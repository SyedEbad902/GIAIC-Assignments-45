// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let arry = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar"];
let i = 3;
if (arry[i]) {
    console.log(
        arry[i]
    );
} else { 
    console.log("Index error")
} 
