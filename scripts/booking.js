/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let totalCost = 0;
let dayCounter = 0;



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let dayButton = document.getElementsByClassName("blue-hover");
for (let i = 0; i < 5; i++) {
    dayButton[i].addEventListener("click", function(){
        if (!dayButton[i].classList.contains("clicked")) {
            dayButton[i].classList.add("clicked");
            dayCounter += 1;
            calculateCost();
        }   
    });
}
 

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearDays);

function clearDays() {
    for (let i = 0; i < 5; i++) {
        dayButton[i].classList.remove("clicked");
        dayCounter = 0;
        calculateCost();
        }

    halfDayButton.classList.remove("clicked");
    fullDayButton.classList.add("clicked");
    dailyRate = 35;
}
    


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let halfDayButton = document.getElementById("half");
let fullDayButton = document.getElementById("full");
halfDayButton.addEventListener("click", changeToHalf);

function changeToHalf() { 
    dailyRate = 20;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculateCost();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", changeToFull);

function changeToFull() { 
    dailyRate = 35;
    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");
    calculateCost();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
let totalCostLabel = document.getElementById("calculated-cost");

function calculateCost() {
    totalCost = dailyRate * dayCounter;
    totalCostLabel.innerHTML = totalCost;
}
