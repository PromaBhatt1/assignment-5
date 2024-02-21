const addButton = document.querySelectorAll(".add-btn");
const remainingSeat = document.getElementById("changeable-seat");
const countSeat = document.getElementById("counted-seat");
const seatName = document.getElementById("button-value");
const seatClass = document.getElementById("seat-class");
const price = document.getElementById("price");
const couponInput = document.getElementById("coupon");
const applyCouponButton = document.getElementById("apply-coupon-button");
const applyButton = document.getElementById("apply-button");
const grandTotal = document.getElementById("grand-total");
const totalPrice = document.getElementById("total-cost");
const label = document.getElementById("coupon-label");

let totalSeats = 8;
let selectedSeats = 0;
let countedSeats = 0;
let selectedSeatNames = [];
let perSeatPrice = 550;
let discountPercent = 0;

function updateRemainingSeats() {
    const remainingSeats = totalSeats - selectedSeats;
    remainingSeat.innerText = remainingSeats;
  }
  

function updateSeatClass() {
    let selectedClass = selectedSeatNames.length > 0 ? "Economy" : "";
    let seatClassText = "";
    for (let i = 0; i < selectedSeatNames.length; i++) {
        seatClassText += " " + selectedClass;
    }
    seatClass.innerText = seatClassText;
}



function showPrice() {
    price.textContent = "";

    for (let i = 0; i < selectedSeatNames.length; i++) {
        let seatPrice = document.createElement("div");
        seatPrice.textContent = " " + perSeatPrice;
        price.appendChild(seatPrice);
    }
}

  function updateTotalPrice() {
    const total = selectedSeats * perSeatPrice;
    totalPrice.innerText = total;
    grandTotal.innerText = total;
  }


  function applyCoupon() {
    const couponCode = couponInput.value.toLowerCase();
  
    if (couponCode=== "" && selectedSeats !== 4) {
      alert("Please enter a coupon code.");
      return;
    } 
    else if (couponCode !== "" && selectedSeats !== 4) {
      alert("Please select 4 seats before applying the coupon.");
      applyCouponButton.disabled = false;
      return;
    } 

    else {
        if (couponCode === "new15") {
            discountPercent = 15;
        } else if (couponCode === "couple 20") {
            discountPercent = 20;
        } else {
            discountPercent = 0;
            alert("Invalid coupon code.");
            return;
        }

      calculateGrandTotal();
    }
  }
  
  function calculateGrandTotal() {
    const totalPrice = selectedSeats * perSeatPrice;
    const discountAmount = (discountPercent / 100) * totalPrice;
    const discountedTotal = totalPrice - discountAmount;
  
    grandTotal.innerText = " " + discountedTotal;
  }

function handleSeatButtonClick(btn) {
    if (btn.style.backgroundColor === "green") {
        btn.style.backgroundColor = "";
        selectedSeats = selectedSeats - 1;
        countedSeats = countedSeats - 1;
  
      const seatIndex = selectedSeatNames.indexOf(btn.innerText);
      if (seatIndex !== -1) {
        selectedSeatNames.splice(seatIndex, 1);
      }
    } 
    else {
      if (selectedSeats < 4) {
        btn.style.backgroundColor = "green";
        selectedSeats++;
        countedSeats++;
        seatName.innerText = btn.innerText;
        selectedSeatNames.push(btn.innerText);
      }
    }
  
    updateSeatClass();
    updateRemainingSeats();
    countSeat.innerText = countedSeats;
    seatName.innerText = selectedSeatNames.join("\n");
    showPrice();
    calculateGrandTotal();
    updateTotalPrice();
  

    applyButton.disabled = selectedSeats !== 4;
  }
  

function initializeEventListeners() {
    for (let i = 0; i < addButton.length; i++) {
        (function(btn) {
            btn.addEventListener("click", function() {
                handleSeatButtonClick(btn);
            });
        })
        (addButton[i]);
    }



    applyCouponButton.disabled = true;
  

    couponInput.addEventListener("input", function(){
      applyCouponButton.disabled = couponInput.value === "";
    });
    applyCouponButton.addEventListener("click", function(){
      applyCoupon();
      const couponCode = couponInput.value.toLowerCase();
  
      if (
        couponCode === "new15" ||
        (couponCode === "couple 20" && selectedSeats === 4)
      ) {
        label.style.display = "none";
      }
    });
  }
  

  updateRemainingSeats();
  initializeEventListeners();
  