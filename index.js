document.getElementById('ButtonMoDiha').onclick = function () {
  let orderSummaryText = '';
  let total = 0;

  const items = [
    { name: 'PAKBET WITH KABET', quantity: parseInt(document.getElementById('quantity').value), price: 25 },
    { name: 'MONGO NA GULAY', quantity: parseInt(document.getElementById('quantity1').value), price: 35 },
    { name: 'BIHON NA LAMIIH', quantity: parseInt(document.getElementById('quantity2').value), price: 30 },
    { name: 'CURRY TUMIRA NG TRES', quantity: parseInt(document.getElementById('quantity3').value), price: 35 },
    { name: 'KILAWIN TIKA UNYA', quantity: parseInt(document.getElementById('quantity4').value), price: 45 },
    { name: 'SINIGANGBANG', quantity: parseInt(document.getElementById('quantity5').value), price: 40 }
  ];

  items.forEach(item => {
    if (!isNaN(item.quantity) && item.quantity > 0) {
      const itemTotal = item.quantity * item.price;
      total += itemTotal;
      orderSummaryText += `${item.name} - Quantity: ${item.quantity}, Subtotal: ₱${itemTotal.toFixed(2)}<br>`;
    }
  });

  if (total > 0) {
    orderSummaryText += `<br><strong>Grand Total: ₱${total.toFixed(2)}</strong>`;
    document.getElementById('orderSummary').innerHTML = orderSummaryText;
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('myModalBuang').style.display = 'none';
  } else {
    document.getElementById('myModalBuang').style.display = 'block';
    document.getElementById('myModal').style.display = 'none';
  }
};

document.getElementById('reservebtn').onclick = function () {
  const printContent = document.querySelector('.modal-content').innerHTML;
  const originalContent = document.body.innerHTML;

  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalContent;
  location.reload(); // Reload the page to reset the content
};

const calculateTotalForPakbet = () => {
  const quantity = document.getElementById('quantity').value;
  const total = quantity * 25;
  document.getElementById('totalPakbet').innerText = `₱${total.toFixed(2)}`;
  calculateGrandTotal();
};

const calculateTotalForMongo = () => {
  const quantity = document.getElementById('quantity1').value;
  const total = quantity * 35;
  document.getElementById('totalMongo').innerText = `₱${total.toFixed(2)}`;
  calculateGrandTotal();
};

const calculateTotalForBihon = () => {
  const quantity = document.getElementById('quantity2').value;
  const total = quantity * 30;
  document.getElementById('totalBihon').innerText = `₱${total.toFixed(2)}`;
  calculateGrandTotal();
};

const calculateTotalForCurry = () => {
  const quantity = document.getElementById('quantity3').value;
  const total = quantity * 35;
  document.getElementById('totalCurry').innerText = `₱${total.toFixed(2)}`;
  calculateGrandTotal();
};

const calculateTotalForKilawin = () => {
  const quantity = document.getElementById('quantity4').value;
  const total = quantity * 45;
  document.getElementById('totalKilawin').innerText = `₱${total.toFixed(2)}`;
  calculateGrandTotal();
};

const calculateTotalForSinigang = () => {
  const quantity = document.getElementById('quantity5').value;
  const total = quantity * 40;
  document.getElementById('totalSinigang').innerText = `₱${total.toFixed(2)}`;
  calculateGrandTotal();
};

const calculateGrandTotal = () => {
  const pakbetTotal = parseFloat(document.getElementById('totalPakbet').innerText.replace('₱', '')) || 0;
  const mongoTotal = parseFloat(document.getElementById('totalMongo').innerText.replace('₱', '')) || 0;
  const bihonTotal = parseFloat(document.getElementById('totalBihon').innerText.replace('₱', '')) || 0;
  const curryTotal = parseFloat(document.getElementById('totalCurry').innerText.replace('₱', '')) || 0;
  const kilawinTotal = parseFloat(document.getElementById('totalKilawin').innerText.replace('₱', '')) || 0;
  const sinigangTotal = parseFloat(document.getElementById('totalSinigang').innerText.replace('₱', '')) || 0;

  const grandTotal = pakbetTotal + mongoTotal + bihonTotal + curryTotal + kilawinTotal + sinigangTotal;
  document.getElementById('total').innerText = `₱${grandTotal.toFixed(2)}`;
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Icon modal map
const iconModal = document.getElementById("iconModal");
const iconbtn = document.querySelector(".btn-open-icon");

iconbtn.onclick = function () {
  iconModal.style.display = "flex";
};

const closeBtnMap = document.querySelector(".modal-content-map");

closeBtnMap.onclick = function () {
  iconModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == iconModal) {
    iconModal.style.display = "none";
  }
};
// ----------------- TOGGLE MENU 
document.getElementById('toggleMenuButton').addEventListener('click', function () {
  var content = document.getElementById('content');
  var main_div = document.getElementById('main-div');


  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    main_div.style.display = 'none';
    this.textContent = 'HIDE MENU';
  } else {
    content.style.display = 'none';
    main_div.style.display = 'flex';
    this.textContent = 'MENU';
  }
});
// ------------------------location
document.getElementById('toggleLocationButton').addEventListener('click', function () {
  var content = document.getElementById('contentlocation');
  var main_div = document.getElementById('main-div');

  if (content.style.display === 'none' || content.style.display === '') {
    main_div.style.display = 'none';

    content.style.display = 'block';
    this.textContent = 'HIDE LOCATION';
  } else {
    content.style.display = 'none';
    main_div.style.display = 'flex';

    this.textContent = 'LOCATION';
  }
});
document.getElementById('toggleAboutusButton').addEventListener('click', function () {
  var content = document.getElementById('contentAboutus');
  var main_div = document.getElementById('main-div');
  if (content.style.display === 'none' || content.style.display === '') {
    main_div.style.display = 'none';
    content.style.display = 'block';
    this.textContent = 'HIDE ABOUT US';
  } else {
    main_div.style.display = 'flex';
    content.style.display = 'none';
    this.textContent = 'ABOUT US';
  }
});
document.getElementById('toggleContactusButton').addEventListener('click', function () {
  var content = document.getElementById('contentContactus');
  var main_div = document.getElementById('main-div');
  if (content.style.display === 'none' || content.style.display === '') {
    main_div.style.display = 'none';
    content.style.display = 'block';
    this.textContent = 'HIDE CONTACT US';
  } else {
    main_div.style.display = 'flex';
    content.style.display = 'none';
    this.textContent = 'CONTACT US';
  }
});
document.getElementById('toggleFollowusButton').addEventListener('click', function () {
  var content = document.getElementById('contentFollowus');
  var main_div = document.getElementById('main-div');
  if (content.style.display === 'none' || content.style.display === '') {
    main_div.style.display = 'none';
    content.style.display = 'block';
    this.textContent = 'HIDE FOLLOW US';
  } else {
    main_div.style.display = 'flex';
    content.style.display = 'none';
    this.textContent = 'FOLLOW US';
  }
});