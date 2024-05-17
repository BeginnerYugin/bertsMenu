const fixedPrice1 = 25; // Fixed price per piece
const fixedPrice2 = 35;
const fixedPrice3 = 30;
const fixedPrice4 = 35;
const fixedPrice5 = 45;
const fixedPrice6 = 40;

let finaltotalBihon = 0;
let finaltotalPakbet = 0;
let finaltotalMongo = 0;
let finaltotalCurry = 0;
let finaltotalKilawin = 0;
let finaltotalSinigang = 0;

function calculateTotalForPakbet() {
  const quantity = document.getElementById("quantity").value;
  const total = quantity * fixedPrice1;
  finaltotalPakbet = total;
  document.getElementById("totalPakbet").innerText =
    "₱" + (isNaN(total) ? 0 : total.toFixed(2));
  updateButtonVisibility();
}

function calculateTotalForMongo() {
  const quantity = document.getElementById("quantity1").value;
  const total = quantity * fixedPrice2;
  finaltotalMongo = total;
  document.getElementById("totalMongo").innerText =
    "₱" + (isNaN(total) ? 0 : total.toFixed(2));
  updateButtonVisibility();
}

function calculateTotalForBihon() {
  const quantity = document.getElementById("quantity2").value;
  const total = quantity * fixedPrice3;
  finaltotalBihon = total;
  document.getElementById("totalBihon").innerText =
    "₱" + (isNaN(total) ? 0 : total.toFixed(2));
  updateButtonVisibility();
}

function calculateTotalForCurry() {
  const quantity = document.getElementById("quantity3").value;
  const total = quantity * fixedPrice4;
  finaltotalCurry = total;
  document.getElementById("totalCurry").innerText =
    "₱" + (isNaN(total) ? 0 : total.toFixed(2));
  updateButtonVisibility();
}

function calculateTotalForKilawin() {
  const quantity = document.getElementById("quantity4").value;
  const total = quantity * fixedPrice5;
  finaltotalKilawin = total;
  document.getElementById("totalKilawin").innerText =
    "₱" + (isNaN(total) ? 0 : total.toFixed(2));
  updateButtonVisibility();
}

function calculateTotalForSinigang() {
  const quantity = document.getElementById("quantity5").value;
  const total = quantity * fixedPrice6;
  finaltotalSinigang = total;
  document.getElementById("totalSinigang").innerText =
    "₱" + (isNaN(total) ? 0 : total.toFixed(2));
  updateButtonVisibility();
}

function updateButtonVisibility() {
  const btnReserve = document.getElementById("BotttonMoDiha");
  const divBuang = document.getElementById("modal-hide-and-show-buang");

  if (
    finaltotalPakbet == 0 &&
    finaltotalMongo == 0 &&
    finaltotalBihon == 0 &&
    finaltotalCurry == 0 &&
    finaltotalKilawin == 0 &&
    finaltotalSinigang == 0
  ) {
    btnReserve.classList.add("hidden");
    divBuang.classList.remove("hidden");
  } else {
    btnReserve.classList.remove("hidden");
    divBuang.classList.add("hidden");
  }
}
function calculateTotal() {
  const total =
    finaltotalPakbet +
    finaltotalMongo +
    finaltotalBihon +
    finaltotalCurry +
    finaltotalKilawin +
    finaltotalSinigang;
  // Display the total
  document.getElementById("total").innerText = "₱ " + total.toFixed(2);
}

// Initial calculation to set the default total
calculateTotal();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".open-modal-btn");

// Get the <span> element that closes the modal
var span = document.querySelector(".close-btn");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// boang modal
const buangModal = document.getElementById("myModalBuang");
const buangBtn = document.getElementById("open-modal-btn-buang");
const buangClose = document.querySelector(".close-btn-buang");
buangBtn.onclick = function () {
  buangModal.style.display = "flex";
};
buangClose.onclick = function () {
  buangModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == buangModal) {
    modal.style.display = "none";
  }
};

// --------------- icon modal -----------------------
const iconModal = document.getElementById("iconModal");
const iconbtn = document.querySelector(".btn-open-icon");

iconbtn.onclick = function () {
  iconModal.style.display = "flex";
};

const closeBtnMap = document.querySelector(".modal-content-map");
closeBtnMap.onclick = function () {
  iconModal.style.display = "none";
};
window.onclick = function (evewnt) {
  if (event.target == iconModal) {
    iconModal.style.display = "none";
  }
};

// ---------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  calculateTotalForPakbet();
  calculateTotalForMongo();
  calculateTotalForBihon();
  calculateTotalForCurry();
  calculateTotalForKilawin();
  calculateTotalForSinigang();
});

// Add event listeners for quantity inputs
document
  .getElementById("quantity")
  .addEventListener("input", calculateTotalForPakbet);
document
  .getElementById("quantity1")
  .addEventListener("input", calculateTotalForMongo);
document
  .getElementById("quantity2")
  .addEventListener("input", calculateTotalForBihon);
document
  .getElementById("quantity3")
  .addEventListener("input", calculateTotalForCurry);
document
  .getElementById("quantity4")
  .addEventListener("input", calculateTotalForKilawin);
document
  .getElementById("quantity5")
  .addEventListener("input", calculateTotalForSinigang);

// -------------SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
