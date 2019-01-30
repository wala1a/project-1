// var counters = {
//     X:0,
//     O:0
// }

let gameOver = false;
function WhoWin() {

    var cell1 = $("#1").text();
    var cell2 = $("#2").text();
    var cell3 = $("#3").text();
    var cell4 = $("#4").text();
    var cell5 = $("#5").text();
    var cell6 = $("#6").text();
    var cell7 = $("#7").text();
    var cell8 = $("#8").text();
    var cell9 = $("#9").text();

    if ((cell1 === cell2) && (cell2 === cell3) && (cell2 !== "")) {
        //console.log("Win 1");
        //counters [turn]++
        alert(" Win! " + cell3);
        gameOver = true;

    }
    else if ((cell4 === cell5) && (cell5 === cell6) && ( cell5 !== "")) {
        //console.log("Win 2");
        //counters [turn]++
        gameOver = true;
        alert(" Win! " + cell6);
    } else if ((cell7 === cell8) && (cell8 === cell9) && (cell8 !== "")) {
        //console.log("Win 3");
        //counters [turn]++
        gameOver = true;
        alert(" Win! ")+ cell9;
    } else if ((cell1 === cell4) && (cell4 === cell7) && (cell1 !== '')) {
       // console.log("Win 4");
        //counters [turn]++
        gameOver = true;
        alert(" Win! " + cell7);
    } else if ((cell2 === cell5 )&& (cell5 === cell8) && (cell2 !== '')) {
        //console.log("Win 5");
        //counters [turn]++
        gameOver = true;
       alert(" Win! " + cell8);
    } else if ((cell3 === cell6) && (cell6 === cell9) && (cell3 !== '') ){
        //console.log("Win 6");
        //counters [turn]++
        gameOver = true;
        alert(" Win! " + cell9);

    } else if ((cell3 === cell5) && (cell5) === cell7 && (cell3 !== '')) {
        //console.log("Win 7");
        //counters [turn]++
        gameOver = true;
        alert(" Win! " + cell7);
    } else if ((cell1 === cell5) && (cell5 === cell9) && (cell1 !== '')) {
        //console.log("Win 8");
        //counters [turn]++
        gameOver = true;
        alert(" Win! " + cell9);

    } else if ((cell1 !== '')  && (cell2 !== '') && (cell3 !== '') && (cell4 !== '') && (cell5 !== '') &&(cell6 !== '') && (cell7 !== '') && (cell8 !== '') && (cell9 !== '')){
        //console.log("tie");
        gameOver = true;
        alert(" No one Win ");
    }


}

var turn = "X";
function cellclicked(event) {
    if ($(event.target).text() === '' && gameOver === false) {
        if (turn === "X") {
            $(event.target).text("X")
            turn = "O";
            //WhoWin();
        } else {
            $(event.target).text("O");
            turn = "X";
        } WhoWin();           

    }  
}




   
$("td").on("click", cellclicked);

function resetGame (){
    var cell1 = $("#1").text("");
    var cell2 = $("#2").text("");
    var cell3 = $("#3").text("");
    var cell4 = $("#4").text("");
    var cell5 = $("#5").text("");
    var cell6 = $("#6").text("");
    var cell7 = $("#7").text("");
    var cell8 = $("#8").text("");
    var cell9 = $("#9").text("");
    gameOver = false;
}
$("button").on("click",resetGame);





















 //var winnerArray = [[1,2,3],
    //[4,5,6],
    //[7,8,9],
    //[1,4,7],
    //[2,5,8],
   // [3,6,9],
    //[3,5,7],
    //[1,5,9]]
