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

  let israelElement = document.querySelector("#israel");
  let israelElementDate = israelElement.querySelector(".date");
  let israelElementTime = israelElement.querySelector(".time");
  let israelTime = moment().tz("Israel");

  israelElementDate.innerHTML = israelTime.format("dddd, MMMM D, YYYY");
  israelElementTime.innerHTML = israelTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let saipanElement = document.querySelector("#saipan");
  let saipanElementDate = saipanElement.querySelector(".date");
  let saipanElementTime = saipanElement.querySelector(".time");
  let saipanTime = moment().tz("Pacific/Saipan");

  saipanElementDate.innerHTML = saipanTime.format("dddd, MMMM D, YYYY");
  saipanElementTime.innerHTML = saipanTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
