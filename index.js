/*  Function for date and time
function getCurrentDateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const time = `${hours}:${minutes}`;

  //Days
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getDay()];

  return { time, day };
}

// Function to search for city
function newCity(event) {
  event.preventDefault();

  let searchCity = document.querySelector(".search-input").value;
  let currentCity = document.querySelector(".current-city");
  currentCity.textContent = searchCity;

  let { time, day } = getCurrentDateTime();
  let currentDayAndTimeElement = document.querySelector(".current-details");

  currentDayAndTimeElement.innerHTML = `${day} ${time}, moderate rain <br /> Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>`;
}

let search = document.querySelector("form");
search.addEventListener("submit", newCity);

*/