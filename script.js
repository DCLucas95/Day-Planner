//initialize the page after the page is loaded (document is reaady)
$(document).ready(init);

//global variables
var timeOfDay = moment().format('MMMM Do YYYY, h:mm a')
var schedule = [];


// function that initializes the page
function init() {
  console.log('page is ready');

//display current date and time
      displayDate();

  function displayDate(){
    $('#timeofDay').append(timeOfDay);
    }


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

// read schedule from local storage and display it
//displaySchedule();
}

//function executed everytime a save button is pressed:\
function saveButtonClick() {
var hourSelected = parseInt($(this).attr('data-hour'));

var description = $('#hour-' + hourSelected + ' .description')
  .val()
  .trim();
  
  schedule[hourSelected] = description;
  
//you can save only strings in the local storage
var stringSchedule = JSON.stringify(schedule);

localStorage.setItem('myDay', stringSchedule);
}

// read schedule from local storage and display it
function displaySchedule() {
var stringSchedule = localStorage.getItem('myDay');

//convert string back to array
schedule = JSON.parse(stringSchedule);

console.log('stored schedule is:', schedule);

// read every line in the schedule that was on the local
// storage and set the schedule timetable on the screen accordingly
for (var hour = 0; hour < schedule.length; hour++) {
  console.log(schedule[hour]);

  $('#hour-' + hour + ' .description').val(schedule[hour]);
}
}

//button to clear local storage
$('.clearDay').on('click', clearLocalStorage);

function clearLocalStorage(){
    location.reload()
    window.localStorage.clear();
    alert("day has been cleared")
}