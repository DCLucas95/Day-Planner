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

//keep entered text in local storage if save btn pressed

$(".saveBtn").on("click", function() {
    console.log("details have been saved")
    //save text to local storage
  });

//button to clear local storage
var clearDay = document.querySelector(".clearDay")

clearDay.addEventListener("click", clearLocalStorage);

function clearLocalStorage(){
    window.localStorage.clear();
    alert("day has been cleared")
}