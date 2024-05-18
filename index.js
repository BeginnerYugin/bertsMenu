const fixedPrice1 = 25; // Fixed price per piece
const fixedPrice2 = 35;
const fixedPrice3 = 30;
const fixedPrice4 = 35;
const fixedPrice5 = 45;
const fixedPrice6 = 40;

let finaltotalPakbet = 0;
let finaltotalMongo = 0;
let finaltotalBihon = 0;
let finaltotalCurry = 0;
let finaltotalKilawin = 0;
let finaltotalSinigang = 0;
let BotttonMoDiha = document.getElementById('BotttonMoDiha');

function calculateTotalForPakbet() {
  const quantity = document.getElementById("quantity").value;
  const total = quantity * fixedPrice1;
  finaltotalPakbet = total;
  document.getElementById("totalPakbet").innerText =
    "₱" + (isNaN(total) ? 0 : total.toFixed(2));
  calculateTotal();
}

function calculateTotalForMongo() {
  const quantity = document.getElementById("quantity1").value;
  const total = quantity * fixedPrice2;
  finaltotalMongo = total;
  document.getElementById("totalMongo").innerText =
    "₱" + (isNaN(total) ? 0 : total.toFixed(2));
  calculateTotal();
}

function calculateTotalForBihon() {
  const quantity = document.getElementById("quantity2").value;
  const total = quantity * fixedPrice3;
  finaltotalBihon = total;
  document.getElementById("totalBihon").innerText =
    "₱" + (isNaN(total) ? 0 : total.toFixed(2));
  calculateTotal();
}

function calculateTotalForCurry() {
  const quantity = document.getElementById("quantity3").value;
  const total = quantity * fixedPrice4;
  finaltotalCurry = total;
  document.getElementById("totalCurry").innerText =
    "₱" + (isNaN(total) ? 0 : total.toFixed(2));
  calculateTotal();
}

function calculateTotalForKilawin() {
  const quantity = document.getElementById("quantity4").value;
  const total = quantity * fixedPrice5;
  finaltotalKilawin = total;
  document.getElementById("totalKilawin").innerText =
    "₱" + (isNaN(total) ? 0 : total.toFixed(2));
  calculateTotal();
}

function calculateTotalForSinigang() {
  const quantity = document.getElementById("quantity5").value;
  const total = quantity * fixedPrice6;
  finaltotalSinigang = total;
  document.getElementById("totalSinigang").innerText =
    "₱" + (isNaN(total) ? 0 : total.toFixed(2));
  calculateTotal();
}

function calculateTotal() {
  const total =
    finaltotalPakbet +
    finaltotalMongo +
    finaltotalBihon +
    finaltotalCurry +
    finaltotalKilawin +
    finaltotalSinigang;
  document.getElementById("total").innerText = "₱ " + total.toFixed(2);
}

BotttonMoDiha.addEventListener('click', function () {
  if (
    finaltotalPakbet == 0 &&
    finaltotalMongo == 0 &&
    finaltotalBihon == 0 &&
    finaltotalCurry == 0 &&
    finaltotalKilawin == 0 &&
    finaltotalSinigang == 0
  ) {
    document.getElementById('myModalBuang').style.display = 'flex';
  } else {
    const orderSummary = document.getElementById('orderSummary');
    const totalPrice = document.getElementById('totalPrice');
    let total = 0;

    orderSummary.innerHTML = '';
    if (finaltotalPakbet > 0) {
      const quantity = document.getElementById("quantity").value;
      total += finaltotalPakbet;
      orderSummary.innerHTML += `
        <div class="order-item">
          <p><strong>Pakbet</strong> (SARING GULAY WITH TOYO)</p>
          <p>Quantity: ${quantity}</p>
          <p>Price: ₱${fixedPrice1.toFixed(2)}</p>
          <p>Subtotal: ₱${finaltotalPakbet.toFixed(2)}</p>
        </div>`;
    }
    if (finaltotalMongo > 0) {
      const quantity = document.getElementById("quantity1").value;
      total += finaltotalMongo;
      orderSummary.innerHTML += `
        <div class="order-item">
          <p><strong>Mongo</strong> (Mung bean soup with pork)</p>
          <p>Quantity: ${quantity}</p>
          <p>Price: ₱${fixedPrice2.toFixed(2)}</p>
          <p>Subtotal: ₱${finaltotalMongo.toFixed(2)}</p>
        </div>`;
    }
    if (finaltotalBihon > 0) {
      const quantity = document.getElementById("quantity2").value;
      total += finaltotalBihon;
      orderSummary.innerHTML += `
        <div class="order-item">
          <p><strong>Bihon</strong> (PAMPAHABA NG BUHAY)</p>
          <p>Quantity: ${quantity}</p>
          <p>Price: ₱${fixedPrice3.toFixed(2)}</p>
          <p>Subtotal: ₱${finaltotalBihon.toFixed(2)}</p>
        </div>`;
    }
    if (finaltotalCurry > 0) {
      const quantity = document.getElementById("quantity3").value;
      total += finaltotalCurry;
      orderSummary.innerHTML += `
        <div class="order-item">
          <p><strong>Curry</strong> (GOLDENSTATE)</p>
          <p>Quantity: ${quantity}</p>
          <p>Price: ₱${fixedPrice4.toFixed(2)}</p>
          <p>Subtotal: ₱${finaltotalCurry.toFixed(2)}</p>
        </div>`;
    }
    if (finaltotalKilawin > 0) {
      const quantity = document.getElementById("quantity4").value;
      total += finaltotalKilawin;
      orderSummary.innerHTML += `
        <div class="order-item">
          <p><strong>Kilawin</strong> (HILAW PERO LAMI)</p>
          <p>Quantity: ${quantity}</p>
          <p>Price: ₱${fixedPrice5.toFixed(2)}</p>
          <p>Subtotal: ₱${finaltotalKilawin.toFixed(2)}</p>
        </div>`;
    }
    if (finaltotalSinigang > 0) {
      const quantity = document.getElementById("quantity5").value;
      total += finaltotalSinigang;
      orderSummary.innerHTML += `
        <div class="order-item">
          <p><strong>Sinigang</strong> (ASLOM PERO LAMI)</p>
          <p>Quantity: ${quantity}</p>
          <p>Price: ₱${fixedPrice6.toFixed(2)}</p>
          <p>Subtotal: ₱${finaltotalSinigang.toFixed(2)}</p>
        </div>`;
    }

    totalPrice.innerHTML = `Total: ₱${total.toFixed(2)}`;
    document.getElementById('myModal').style.display = 'flex';
  }
});

document.getElementById('boangCloseBtn').addEventListener('click', function () {
  document.getElementById('myModalBuang').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
  calculateTotalForPakbet();
  calculateTotalForMongo();
  calculateTotalForBihon();
  calculateTotalForCurry();
  calculateTotalForKilawin();
  calculateTotalForSinigang();
});

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

// Slideshow
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
  if (slideIndex > slides.length) { slideIndex = 1; }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Icon modal
const iconModal = document.getElementById("iconModal");
const iconbtn = document.querySelector(".btn-open-icon");

iconbtn.onclick = function () {
  iconModal.style.display = "flex";
};

const closeBtnMap = document.querySelector(".modal-content-map");
closeBtnMap.onclick = function () {
  iconModal.style.display = "none";
};
