const fixedPrice1 = 25; // Fixed price per piece
const fixedPrice2 = 35;
const fixedPrice3 = 30;
const fixedPrice4 = 35;
const fixedPrice5 = 45;
const fixedPrice6 = 40;

let finaltotalBihon = 0
let finaltotalPakbet = 0
let finaltotalMongo = 0
let finaltotalCurry = 0
let finaltotalKilawin = 0
let finaltotalSinigang = 0



function calculateTotalForPakbet() {
    const quantity = document.getElementById('quantity').value;
    const total = quantity * fixedPrice1;
    finaltotalPakbet = total
    document.getElementById('totalPakbet').innerText = '₱' + (isNaN(total) ? 0 : total.toFixed(2));
    calculateTotal()
};


function calculateTotalForMongo() {
    const quantity = document.getElementById('quantity1').value;
    const total = quantity * fixedPrice2;
    finaltotalMongo = total
    document.getElementById('totalMongo').innerText = '₱' + (isNaN(total) ? 0 : total.toFixed(2));
    calculateTotal()

}
function calculateTotalForBihon() {
    const quantity = document.getElementById('quantity2').value;
    const total = quantity * fixedPrice3;
    finaltotalBihon = total
    document.getElementById('totalBihon').innerText = '₱' + (isNaN(total) ? 0 : total.toFixed(2));
    calculateTotal()

}
function calculateTotalForCurry() {
    const quantity = document.getElementById('quantity3').value;
    const total = quantity * fixedPrice4;
    finaltotalCurry = total
    document.getElementById('totalCurry').innerText = '₱' + (isNaN(total) ? 0 : total.toFixed(2));
    calculateTotal()
}
function calculateTotalForKilawin() {
    const quantity = document.getElementById('quantity4').value;
    const total = quantity * fixedPrice5;
    finaltotalKilawin = total
    document.getElementById('totalKilawin').innerText = '₱' + (isNaN(total) ? 0 : total.toFixed(2));
    calculateTotal()
}
function calculateTotalForSinigang() {
    const quantity = document.getElementById('quantity5').value;
    const total = quantity * fixedPrice6;
    finaltotalSinigang = total
    document.getElementById('totalSinigang').innerText = '₱' + (isNaN(total) ? 0 : total.toFixed(2));
    calculateTotal()
}
function calculateTotal() {
    const total = finaltotalPakbet + finaltotalMongo + finaltotalBihon + finaltotalCurry + finaltotalKilawin + finaltotalSinigang;

    console.log(total)
    // Display the total
    document.getElementById('total').innerText = '₱ ' + total.toFixed(2);

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
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}