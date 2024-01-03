// Day functions
const localeSettings = {};
dayjs.locale(localeSettings);
$(function () {
  // Get the current hour of the day using the dayjs library.
  const currentHour = dayjs().format('H');
// The function below changes the color of each time block based on whether it's in the "past, present, or future" relative to the current hour.
  function hourlyColor() {
    $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      $(this).toggleClass('past', blockHour < currentHour);
      $(this).toggleClass('present', blockHour === currentHour);
      $(this).toggleClass('future', blockHour > currentHour);
    });
  }
   // The  function below will save the user's input in a textarea to localStorage - only when the corresponding save button has been clicked.
   function textEntry() {
    $('.saveBtn').on('click', function() {
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }

 // This function creates the time block between past, present and future to the relative of the time
  function refreshColor() {
    $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      if (blockHour == currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else if (blockHour < currentHour) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }

  // This is the local storage to create the text area values to work
  $('.time-block').each(function() {
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  });

// This is a timer function for the calander // 
  function updateTime() {
    const dateElement = $('#date');
    const timeElement = $('#time');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    const currentTime = dayjs().format('hh:mm:ss A');
    dateElement.text(currentDate);
    timeElement.text(currentTime);
  }
  hourlyColor();
  textEntry();                
  refreshColor();
  setInterval(updateTime, 1000);
});
