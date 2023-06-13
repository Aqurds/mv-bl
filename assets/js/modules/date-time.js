const dateTimeCustom = () => {
  document.querySelector("#date-time").innerHTML =
    luxon.DateTime.local().toLocaleString(
      luxon.DateTime.DATETIME_FULL_WITH_SECONDS
    );

  document.querySelector("#footer-year").innerHTML = luxon.DateTime.now().year;
};

export default dateTimeCustom;
