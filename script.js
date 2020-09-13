//global variables
var timeOfDay = moment().format('MMMM Do YYYY, h:mm a')
var planning


//display current date and time
  $(document).ready (function(){
      displayDate()
  });

  function displayDate(){
    $('#timeofDay').append(timeOfDay);
    }


/*

//insert class past, present and future based on the time of day to the workhours class with an if statment

//if past current time, append class past
function theTime(){
    if timeOfDay; time is in the past.....Type-Something-Here.addClass("past")
}

//if current time, append class present
}
    else if timeOfDay;  {
     time is in the present.....Type-Something-Here.addClass("past")
}

//if after current time, append class future
    else if timeOfDay; {
     time is in the future.....Type-Something-Here.addClass("past") 
}

*/

//keep entered text in local storage if save btn pressed
var saveBtn1 = document.querySelector(".hour1")
saveBtn1.addEventListener("click", makePlan);
function makePlan(){
    console.log("details have been saved")
}

var saveBtn2 = document.querySelector(".hour2")
saveBtn2.addEventListener("click", makePlan);
function makePlan(){
    console.log("details have been saved")
}

var saveBtn3 = document.querySelector(".hour3")
saveBtn3.addEventListener("click", makePlan);
function makePlan(){
    console.log("details have been saved")
}

var saveBtn4 = document.querySelector(".hour4")
saveBtn4.addEventListener("click", makePlan);
function makePlan(){
    console.log("details have been saved")
}

var saveBtn5 = document.querySelector(".hour5")
saveBtn5.addEventListener("click", makePlan);
function makePlan(){
    console.log("details have been saved")
}

var saveBtn6 = document.querySelector(".hour6")
saveBtn6.addEventListener("click", makePlan);
function makePlan(){
    console.log("details have been saved")
}

var saveBtn7 = document.querySelector(".hour7")
saveBtn7.addEventListener("click", makePlan);
function makePlan(){
    console.log("details have been saved")
}

var saveBtn8 = document.querySelector(".hour8")
saveBtn8.addEventListener("click", makePlan);
function makePlan(){
    console.log("details have been saved")
}

var saveBtn9 = document.querySelector(".hour9")
saveBtn9.addEventListener("click", makePlan);
function makePlan(){
    console.log("details have been saved")
}



//button to clear local storage
var clearDay = document.querySelector(".clearDay")

clearDay.addEventListener("click", clearLocalStorage);

function clearLocalStorage(){
    window.localStorage.clear();
    alert("day has been cleared")
}