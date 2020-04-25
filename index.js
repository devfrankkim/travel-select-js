const countryText = document.querySelector(".text");
const country = document.getElementById("country");
const storageCOUNTRY = "country";

country.addEventListener("click", e => {
  if (e.returnValue && e.target.label !== "--- Choose Your Country ---") {
    countryText.innerText = `Great choice for ${e.target.label}! Good luck!`;
    localStorage.setItem(storageCOUNTRY, countryText.innerText);
  }
});

function loadCountry() {
  const currentCountry = localStorage.getItem(storageCOUNTRY);
  if (currentCountry === null) {
    return (countryText.innerHTML = "");
  } else {
    countryText.innerHTML = `${currentCountry}`;
  }
}

function init() {
  loadCountry();
}

init();
