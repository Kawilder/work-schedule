var value = document.getElementById("input")

let currentDayNow;
setInterval(() => {
  currentDayNow = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
  $("#currentDay").text(currentDayNow);
  for (var i = 8; i <= 18; i++) {
    if (i === moment().hour()) {
      $("#hour-" + i + " .form-control").removeClass("past present future").addClass("present");
    } else if (i < moment().hour()) {
      $("#hour-" + i + " .form-control").removeClass("past present future").addClass("past");
    } else {
      $("#hour-" + i + " .form-control").removeClass("past present future").addClass("future")
    }
  }
}, 1000)

$(".saveBtn").on("click", function (event) {
  event.preventDefault;
  let textareaInput = $(this).siblings(".form-control").val();
  let time = $(this).parent().attr("id");

  if (input.length > 0 ){
    window.localStorage.setItem(time, textareaInput);
  }     
});

$("textarea").each(function () {
  let scheduleInput = $(this).parent().attr("id");
  let scheduler = window.localStorage.getItem(scheduleInput);
  $(this).val(scheduler)
  console.log(scheduler)   
});
