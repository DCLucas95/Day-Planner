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


//Way to loop my HTML???

/* for (i = 0; i < SOMETHING TO SHOW THE LENGTH; i++) {
$("container")



<div class="row">
        <p class="col-2 workhours">12AM</p>
        <textarea class="col-8 description"></textarea>
        <button type="submit" class="col-2 saveBtn"><i class="far fa-save"></i></button>
      </div> 




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
var saveBtn = document.querySelector(".saveBtn")

saveBtn.addEventListener("click", makePlan);

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