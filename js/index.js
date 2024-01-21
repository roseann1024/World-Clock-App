function updateTime() {
  let denverElement = document.querySelector("#denver");
  let denverElementDate = denverElement.querySelector(".date");
  let denverElementTime = denverElement.querySelector(".time");
  let denverTime = moment().tz("America/Denver");

  denverElementDate.innerHTML = denverTime.format("dddd, MMMM D, YYYY");
  denverElementTime.innerHTML = denverTime.format(
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
