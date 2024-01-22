function updateTime() {
  let denverElement = document.querySelector("#current");
  if (denverElement) {
    let denverElementDate = denverElement.querySelector(".date");
    let denverElementTime = denverElement.querySelector(".time");
    let denverTime = moment().tz("America/Denver");

    denverElementDate.innerHTML = denverTime.format("dddd, MMMM D, YYYY");
    denverElementTime.innerHTML = denverTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let manilaElement = document.querySelector("#manila");
  if (manilaElement) {
    let manilaElementDate = manilaElement.querySelector(".date");
    let manilaElementTime = manilaElement.querySelector(".time");
    let manilaTime = moment().tz("Asia/Manila");

    manilaElementDate.innerHTML = manilaTime.format("dddd, MMMM D, YYYY");
    manilaElementTime.innerHTML = manilaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let israelElement = document.querySelector("#jerusalem");
  if (israelElement) {
    let israelElementDate = israelElement.querySelector(".date");
    let israelElementTime = israelElement.querySelector(".time");
    let israelTime = moment().tz("Israel");

    israelElementDate.innerHTML = israelTime.format("dddd, MMMM D, YYYY");
    israelElementTime.innerHTML = israelTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let saipanElement = document.querySelector("#saipan");
  if (saipanElement) {
    let saipanElementDate = saipanElement.querySelector(".date");
    let saipanElementTime = saipanElement.querySelector(".time");
    let saipanTime = moment().tz("Pacific/Saipan");

    saipanElementDate.innerHTML = saipanTime.format("dddd, MMMM D, YYYY");
    saipanElementTime.innerHTML = saipanTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let sanFranciscoElement = document.querySelector("#san-francisco");
  if (sanFranciscoElement) {
    let sanFranciscoElementDate = sanFranciscoElement.querySelector(".date");
    let sanFranciscoElementTime = sanFranciscoElement.querySelector(".time");
    let sanFranciscoTime = moment().tz("America/Los_Angeles");

    sanFranciscoElementDate.innerHTML =
      sanFranciscoTime.format("dddd, MMMM D, YYYY");
    sanFranciscoElementTime.innerHTML = sanFranciscoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#container-two");

  citiesElement.innerHTML = `
  <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format(
                      "dddd, MMMM D, YYYY"
                    )}</div>
                </div>
                <div class="time">${cityTime.format(
                  "h:mm:ss"
                )} <small>${cityTime.format("A")}</small></div>
            </div>
            
            
             <button class="back"><a href="https://world-clock-rva.netlify.app/">Back to main page👈</a>
        </button>
            
            `;
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
