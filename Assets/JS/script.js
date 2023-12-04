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
  
  // Display Day and time
  var currentTime = dayjs().format('h a');
  var currentTimeNum = dayjs().format('h');
  var currentTimeAPm = dayjs().format('a');
  var currentDay =  dayjs().day(7).format(' dddd');
  console.log(currentTime);
  $("p#currentDay").text('Today is: ' + currentDay);
  $("p#currentTime").text('Time: ' + currentTime);



  $('.btn').click(function (e) { 
    e.preventDefault();
    
  }); 



  var timeBlockAm =  $('.time-block-am').prop('outerHTML');
  var timeBlockPm =  $('.time-block-pm').prop('outerHTML');
  var containerAm = $('.container-lg-am');
  var containerPm = $('.container-lg-pm');
  var timeCardsAm = 12;
  var timeCardsPm = 12;

//loops to generate the time blocks
for (let index = 1; index <= timeCardsAm; index++) {
  containerAm.append(timeBlockAm);
  var cardTime = '.card-' + index;
  var assembledTimeAm = index + ' am';
  var currentCard = containerAm.find('.time-block-am').last();
  currentCard.removeClass('hidden').addClass(cardTime);
  currentCard.find('.hour').text(assembledTimeAm);
  if (assembledTimeAm == currentTimeNum){
    currentCard.addClass("present");
  }
  if (currentTimeNum < index){
    if (currentTimeAPm ==  'am'){
      currentCard.addClass("future");
    }
  }
}

for (let index = 1; index <= timeCardsPm; index++) {
  containerPm.append(timeBlockPm);
  var cardTime = '.card-pm-' + index;
  var assembledTimePm = index + ' pm';
  var currentCard = containerPm.find('.time-block-pm').last();
  currentCard.removeClass('hidden').addClass(cardTime);
  currentCard.find('.hour').text(assembledTimePm);
  if (assembledTimePm == currentTime){
    currentCard.addClass("present");
  }
  if (currentTimeNum < index){
    if (currentTimeAPm == 'pm'){
      currentCard.addClass("future");
    }
  }
}



var nowCardAm = assembledTimeAm;
// var nowCardPm = assembledTimePm;

// if (nowCardAm == currentTime){
  
// }else if (nowCardPm == currentTime)


// console.log(nowCardAm);
  




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});


