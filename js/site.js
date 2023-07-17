//get string from the page
//controller

function getString() {

    document.getElementById("alert").classList.add("visible");//Make alert invisible when getValue is called

    let userString = document.getElementById("userString").value;

    let returnObj = checkPalindrome(userString);

    displayMessage(returnObj);

}

//check if its a palindrome
//logic
function checkPalindrome(palindrome) {
    
     //make all lower case letters
     palindrome = palindrome.toLowerCase();

    //first remove special characters 
    let regex = /[^a-z0-9]/gi;
    palindrome = palindrome.replace(regex,"");

    let revString = [];

    let returnObj = {};

    for (let index = palindrome.length-1; index >= 0; index--) {

        revString += palindrome[index];

    }

    if (revString == palindrome) {

        returnObj.msg = "Well Done! You entered a palindrome!";
    }else {
            returnObj.msg = "Sorry, you did not enter a palindrome!";
        }
    
        returnObj.reversed = revString;

        return returnObj;
    
    }
   

//display
//view
function displayMessage(returnObj){

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

}
