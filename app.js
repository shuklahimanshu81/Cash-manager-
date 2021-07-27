var billDiv = document.querySelector("#billDiv");
var billAmt = document.querySelector("#bill");
var nextBtn = document.querySelector("#next");
var rcvdAmt = document.querySelector("#cash");
var cashRcvdDiv = document.querySelector("#cashRcvd");
var checkBtn = document.querySelector("#check");
var returnDiv = document.querySelector("#return");
var noOfNote = document.querySelectorAll("#noOfNotes");
var errorDiv = document.querySelector("#errorDiv")


var noteAmt = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]



nextBtn.addEventListener('click', clickHandler)

function clickHandler() {
 
if ( (Number(billAmt.value)) > 0) {
        console.log("Himanshu Shukla")
        nextBtn.style.display = "none";
        cashRcvdDiv.style.display = "block";
    } else {

        errorIs("Bill amount is not valid.");
    }
}

checkBtn.addEventListener('click', clickHandler1)

function clickHandler1() {
    let bill = Number(billAmt.value);
    let rcvd = Number(rcvdAmt.value);

    if (bill > 0 && rcvd > 0)
    {

        if ((!Number.isInteger(bill)) && (!Number.isInteger(rcvd))) {
            errorIs("Looks like you entered invalid amount of either bill or cash received by customer.")
        }
    if ( bill > rcvd ) {
        errorIs("Bill is more than received amount please ask for more cash from customer.")
    }

    splitReturn(bill,rcvd);

}
else {
    errorIs("Cash received by customer is invalid. Please enter valid amount.");
}


}


function splitReturn(price,amtRcvd){
    let returnAmt = amtRcvd - price;


    returnDiv.style.display  = "block";
    for(let i=0; i<noteAmt.length ; i++)
    {
        returnAmt =  amtAfter(returnAmt,noteAmt[i],i);
    }


}

function amtAfter(remainingAmt,currency,j){
    if(remainingAmt >= currency){
        let noteCount = Math.floor(remainingAmt/currency);
        remainingAmt = remainingAmt - noteCount*currency;
        noOfNote[j].innerHTML = noteCount;
    }

    return remainingAmt;
}

function errorIs(text) {
    errorDiv.style.display = "block";
    errorDiv.innerText = text;
    returnDiv.style.display = "none";
}