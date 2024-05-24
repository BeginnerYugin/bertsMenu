
document.getElementById('BotttonMoDiha').onclick = function () {
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

  orderSummaryText += `<br><strong>Grand Total: ₱${total.toFixed(2)}</strong>`;

  document.getElementById('orderSummary').innerHTML = orderSummaryText;
  document.getElementById('myModal').style.display = 'block';
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

let slideIndex = 0; // Initialize slideIndex

// Call showSlides function to start the slideshow
showSlides();

// Function to display slideshow
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
}
