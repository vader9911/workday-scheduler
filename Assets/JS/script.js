// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  $('.btn').click(function (e) { 
    e.preventDefault();
    
  }); 
  var timeBlockAm =  $('.time-block-am').prop('outerHTML');
  var timeBlockPm =  $('.time-block-pm').prop('outerHTML');
  var containerAm = $('.container-lg-am');
  var containerPm = $('.container-lg-pm');
  var timeCardsAm = 12;
  var timeCardsPm = 12;
  var timeAm = 1; 
  var timePm = 1;

  
for (let index = 1; index < timeCardsAm; index++) {
  containerAm.append(timeBlockAm);

  $('.time-block-am').addClass(function( index ) {
    return "card-" + index; 
  });

  for (let index = 0; index < timeAm; index++) {
    if (timeAm < 13){
      console.log(timeAm);
      timeAm == timeAm++;  
  }
  $('.card-'+timeAm).text(timeAm);
  
 }
}




// for (let index = 0; index < timeCardsPm; index++) {
//   containerPm.append(timeBlockPm);
//   $('.time-block-pm').addClass(function( index ) {
//     return "card-" + index; 
//   });
  








// for (let index = 0; index < hours; index++) {
// $("div#timeAm").text(timeAm+'am');  
// timeAm++;
// }

// if (timeAm < 12) {
//   $("div#timeAm").text(timeAm+'am');  
  
// }else{
//   timeAm++;
// };



// if (timeCards !== 24){
//   $($("div.row")).appendTo($('.container-lg'));
 
// }


  // $('.time-block').appendTo("div.row.time-block");
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?





  
// Display Day and time
var currentTime = dayjs().format('h a');
var currentDay =  dayjs().day(12).format(' dddd');


$("p#currentDay").text('Today is: ' + currentDay);
$("p#currentTime").text('Time: ' +currentTime);


});


