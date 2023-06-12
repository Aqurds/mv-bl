import { luxon } from "./luxon.min.js";

let dateTimeCustom = () => {
  // Set date & time dynamically in "under navigation" & footer
  const dateTime = new Date();
  const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentYear = dateTime.getFullYear();
  const currentMonth = monthList[dateTime.getMonth()];
  const currentDateTimeString = dateTime.toLocaleString().split('/');
  // document.querySelector('#date-time').innerHTML = `${currentMonth} ${currentDateTimeString[1]} ${currentDateTimeString[2]}`;
  document.querySelector('#date-time').innerHTML = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATETIME_FULL_WITH_SECONDS)

  document.querySelector('#footer-year').innerHTML = currentYear;
};

export default dateTimeCustom;