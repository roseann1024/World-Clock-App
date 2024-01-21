function updateTime() {
  let newYorkElement = document.querySelector("#newyork");
  let newYorkElementDate = newYorkElement.querySelector(".date");
  let newYorkElementTime = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkElementDate.innerHTML = newYorkTime.format("dddd, MMMM D, YYYY");
  newYorkElementTime.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let manilaElement = document.querySelector("#manila");
  let manilaElementDate = manilaElement.querySelector(".date");
  let manilaElementTime = manilaElement.querySelector(".time");
  let manilaTime = moment().tz("Asia/Manila");

  manilaElementDate.innerHTML = manilaTime.format("dddd, MMMM D, YYYY");
  manilaElementTime.innerHTML = manilaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let londonElement = document.querySelector("#london");
  let londonElementDate = londonElement.querySelector(".date");
  let londonElementTime = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonElementDate.innerHTML = londonTime.format("dddd, MMMM D, YYYY");
  londonElementTime.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let adelaideElement = document.querySelector("#adelaide");
  let adelaideElementDate = adelaideElement.querySelector(".date");
  let adelaideElementTime = adelaideElement.querySelector(".time");
  let adelaideTime = moment().tz("Australia/Adelaide");

  adelaideElementDate.innerHTML = adelaideTime.format("dddd, MMMM D, YYYY");
  adelaideElementTime.innerHTML = adelaideTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
