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