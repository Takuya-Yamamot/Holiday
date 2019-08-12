function isMonday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 1) {
    return true;
  }
}

function isTuesday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 2) {
    return true;
  }
}

function isWednesday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 3) {
    return true;
  }
}

function isThursday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 4) {
    return true;
  }
}

function isFriday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 5) {
    return true;
  }
}

function isSaturday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 6) {
    return true;
  }
}

function isSunday(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 7) {
    return true;
  }
}

function isWeekend(){
  var week = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'u');
  if (week == 6 || week == 7) {
    return true;
  }
}

function isHoliday(){
  var calendars = CalendarApp.getCalendarsByName('日本の祝日');
  var isEvent = calendars[0].getEventsForDay(new Date()).length; 
  if(isEvent >= 1){
   return true;
  }
}