var today = dayjs();
$('#currentTime').text(today.format('MMM D, YYYY, HH:mm'));
//shows current date and time
var timeBlockEl = document.querySelector('.container');
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var textValue = $(this).siblings('.description').val();
    var timeKey = $(this).parent().attr('id');
    // added event listener to save button, linked to specific id based on cursor location
    localStorage.setItem(timeKey, textValue)
    })

    function timeFunction() {
      var hourTime = today.hour();
      //pulls current hour for function
      $(".time-block").each(function(){
        var setTime = parseInt($(this).attr("id").split("hour")[1]);
        if (setTime < hourTime) {
          $(this).addClass("past");
          }
        else if (setTime === hourTime) {
          $(this).removeClass('past');
          $(this).removeClass('future');
          $(this).addClass('present');
          }
        else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
          }
        }
      )}
      //add class-defining logic based on what time block is selected by the user
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    // saves and pulls to/from local storage
    timeFunction();
})

