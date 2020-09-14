//start code once page has loaded
$(document).ready(planDay);

//global variables
var timeOfDay = moment().format('MMMM Do YYYY, h:mm a')
var schedule = [];


// function that initializes the page
function planDay() {

//display current date and time
    $("#timeofDay").text(moment().format("dddd, MMMM Do"));
    
    


/*
//insert class past, present and future based on the time of day to the workhours class with an if statment

//if past current time, append class past
function theTime(){
    timeOfDay > actualTime then .addClass - past
}

//if current time, append class present
}
    else if timeOfDay;  {
     timeOfDay = actualTime then .addClass - present
}

//if after current time, append class future
    else if timeOfDay; {
     timeOfDay < actualTime then .addClass - future 
}

*/


// attach click event on all save buttons buttons on the page
$('.saveBtn').on('click', saveButtonClick);
}

//function executed everytime a save button is pressed:\
function saveButtonClick() {
var hourSelected = parseInt($(this).attr('data-hour'));
console.log(hourSelected)

var description = $('#hour-' + hourSelected + ' .description')
  .val()
  schedule[hourSelected] = description;
  
//save strings in local storage
localStorage.setItem(hourSelected, description);
}

// read from local storage and display
$("#hour-9 .description").val(localStorage.getItem('9'));
$("#hour-10 .description").val(localStorage.getItem('10'));
$("#hour-11 .description").val(localStorage.getItem('11'));
$("#hour-12 .description").val(localStorage.getItem('12'));
$("#hour-13 .description").val(localStorage.getItem('13'));
$("#hour-14 .description").val(localStorage.getItem('14'));
$("#hour-15 .description").val(localStorage.getItem('15'));
$("#hour-16 .description").val(localStorage.getItem('16'));
$("#hour-17 .description").val(localStorage.getItem('17'));

//button to clear local storage
$('.clearDay').on('click', clearLocalStorage);

function clearLocalStorage(){
    location.reload()
    window.localStorage.clear();
    alert("day has been cleared")
}