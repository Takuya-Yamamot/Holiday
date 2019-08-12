/**
 * Function
 * return true when today is on Monday
 */
function isMonday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 1) {
    return true;
  }
}
/**
 * Function
 * return true when today is on Tuesday
 */
function isTuesday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 2) {
    return true;
  }
}
/**
 * Function
 * return true when today is on Wednesday
 */
function isWednesday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 3) {
    return true;
  }
}
/**
 * Function
 * return true when today is on Thursday
 */
function isThursday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 4) {
    return true;
  }
}
/**
 * Function
 * return true when today is on Friday
 */
function isFriday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 5) {
    return true;
  }
}
/**
 * Function
 * return true when today is on Saturday
 */
function isSaturday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 6) {
    return true;
  }
}
/**
 * Function
 * return true when today is on Sunday
 */
function isSunday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 7) {
    return true;
  }
}
/**
 * Function
 * return true when today is on one of weekends
 */
function isWeekend(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 6 || week == 7) {
    return true;
  }
}
/**
 * Function
 * return true depending on Japanese Holidays
 */
function isHoliday(){
  var calendars = CalendarApp.getCalendarsByName('日本の祝日');
  var isEvent = calendars[0].getEventsForDay(new Date()).length; 
  if(isEvent >= 1){
   return true;
  }
}