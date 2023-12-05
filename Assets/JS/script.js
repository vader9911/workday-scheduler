
$(document).ready(function () {

  
  // Display Day and time
  var currentTime = dayjs().format('h a');
  var currentTimeNum = dayjs().format('h');
  var currentTimeAPm = dayjs().format('a');
  var currentDay =  dayjs().day(7).format(' dddd');
  $("p#currentDay").text('Today is: ' + currentDay);
  $("p#currentTime").text('Time: ' + currentTime);
  
  //save button event 
  $('.container-lg-am').on('click', '.time-block-am button', function (e) {
    e.preventDefault();
    // Get the textarea that corresponds to the clicked button
    var currentTextArea = $(this).closest('.time-block-am').find('textarea');
    var textareaId = currentTextArea.attr('id');
    // Get the text from the textarea
    var inputValue = currentTextArea.val();
    var key = 'textAm_' + textareaId;
    // Store the text in local storage with the textareaId as the key
    localStorage.setItem(key, inputValue);

    console.log('Text stored in local storage with key:', key);
});

//save button click listener
$('.container-lg-pm').on('click', '.time-block-pm button', function (e) {
  e.preventDefault();
  // Get the textarea that corresponds to the clicked button
  var currentTextArea = $(this).closest('.time-block-pm').find('textarea');
  var textareaId = currentTextArea.attr('id');
  // Get the text from the textarea
  var inputValue = currentTextArea.val();
  var key = 'textPm_' + textareaId;
  // Store the text in local storage with the textareaId as the key
  localStorage.setItem(key, inputValue);
});

//func to populate the time cards with the saved data
function populateTextAreasAm() {
  
  for (let index = 1; index <= timeCardsAm; index++) {
    // Get the key for the current time block
    var key = 'textAm_' + index;
    console.log('Checking for key:', key);
    var storedText = localStorage.getItem(key);
    console.log('Stored text:', storedText);
    // If there is a stored value, populate the corresponding text area
    if (storedText !== null) {
      console.log('Found stored text:', storedText);
      var currentTextArea = $('.time-block-am textarea#' + index);
      console.log('Found textarea:', currentTextArea);
      // Set the value of the text area
      currentTextArea.val(storedText);
      console.log('Set value in textarea:', storedText);
    } else {
      console.log('No stored text for key:', key);
    }
  }
}

//func to populate the time cards with the saved data
function populateTextAreasPm() {
  for (let index = 1; index <= timeCardsPm; index++) {
    // Get the key for the current time block
    var key = 'textPm_' + (index - 1);
    console.log('Checking for key:', key);
    var storedText = localStorage.getItem(key);
    console.log('Stored text:', storedText);
    // If there is a stored value, populate the corresponding text area
    if (storedText !== null) {
      console.log('Found stored text:', storedText);
      var currentTextArea = $('.time-block-pm').eq(index - 1).find('textarea');
      // Set the value of the text area
      currentTextArea.val(storedText);
    } else {
      console.log('No stored text for key:', key);
    }
  }
}


  var timeBlockAm =  $('.time-block-am');
  var timeBlockPm =  $('.time-block-pm');
  var containerAm = $('.container-lg-am');
  var containerPm = $('.container-lg-pm');
  var timeCardsAm = 12;
  var timeCardsPm = 12;

//loops to generate the time blocks for am & pm
for (let index = 1; index <= timeCardsAm; index++) {
  containerAm.append(timeBlockAm.clone());
  var assembledTimeAm = index + ' am';
  var currentCard = containerAm.find('.time-block-am').last();
  var currentCardText = currentCard.find('.description');

  currentCard.removeClass('hidden').addClass('card-' + index);
  currentCard.find('.hour').text(assembledTimeAm);
  currentCardText.attr('id', index);

  // Add check to color blocks
  if (index == currentTimeNum && currentTimeAPm == 'am') {
    currentCard.addClass("present");
  }
  if (currentTimeNum < index && currentTimeAPm == 'am') {
    currentCard.addClass("future");   
  }
}

for (let index = 1; index <= timeCardsPm; index++) {
  containerPm.append(timeBlockPm.clone());
  var assembledTimePm = index + ' pm';
  var currentCard = containerPm.find('.time-block-pm').last();
  var currentCardText = currentCard.find('.description');

  currentCard.removeClass('hidden').addClass('card-' + index);
  currentCard.find('.hour').text(assembledTimePm);
  currentCardText.attr('id', index);

  // Add check to color blocks
  if (index == currentTimeNum && currentTimeAPm == 'pm') {
    currentCard.addClass("present");
  }
  if (currentTimeNum < index && currentTimeAPm == 'pm') {
    currentCard.addClass("future");   
  }
}

populateTextAreasAm();
populateTextAreasPm();

});


