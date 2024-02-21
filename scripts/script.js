// // BUTTON A1 COLOR CHANGE 
// const buttonA1 = document.getElementById('a-one');
// buttonA1.addEventListener('click',function(){
//     buttonA1.style.backgroundColor = 'green';
// });
// // BUTTON A2 COLOR CHANGE 
// const buttonA2 = document.getElementById('a-two');
// buttonA2.addEventListener('click',function(){
//     buttonA2.style.backgroundColor = 'green';
// });
// // BUTTON A3 COLOR CHANGE 
// const buttonA3 = document.getElementById('a-three');
// buttonA3.addEventListener('click',function(){
//     buttonA3.style.backgroundColor = 'green';
// });
// // BUTTON A4 COLOR CHANGE 
// const buttonA4 = document.getElementById('a-four');
// buttonA4.addEventListener('click',function(){
//     buttonA4.style.backgroundColor = 'green';
// });
// // BUTTON B1 COLOR CHANGE 
// const buttonB1 = document.getElementById('b-one');
// buttonB1.addEventListener('click',function(){
//     buttonB1.style.backgroundColor = 'green';
// });
// // BUTTON B2 COLOR CHANGE 
// const buttonB2 = document.getElementById('b-two');
// buttonB2.addEventListener('click',function(){
//     buttonB2.style.backgroundColor = 'green';
// });
// // BUTTON B3 COLOR CHANGE 
// const buttonB3 = document.getElementById('b-three');
// buttonB3.addEventListener('click',function(){
//     buttonB3.style.backgroundColor = 'green';
// });
// // BUTTON B4 COLOR CHANGE 
// const buttonB4 = document.getElementById('b-four');
// buttonB4.addEventListener('click',function(){
//     buttonB4.style.backgroundColor = 'green';
// });

// // Seats Lefts for A1

// const totalSeatsA1 = document.getElementById('left-seats');

// const bookA1 = document.getElementById('a-one');
// bookA1.addEventListener('click',function(){
//     const newTotalSeatA1 = parseInt(totalSeatsA1.innerText);
//     if(newTotalSeatA1 > 0){
//         const recentTotalSeatA1 = newTotalSeatA1 - 1;
//         totalSeatsA1.innerText = recentTotalSeatA1;
//     }
//     else{
//         alert('Sorry,all seats have been booked.');
//     }
// })

// // Seats Lefts for A2

// const totalSeatsA2 = document.getElementById('left-seats');

// const bookA2 = document.getElementById('a-two');
// bookA2.addEventListener('click',function(){
//     const newTotalSeatA2 = parseInt(totalSeatsA2.innerText);
//     if(newTotalSeatA2 > 0){
//         const recentTotalSeatA2 = newTotalSeatA2 - 1;
//         totalSeatsA2.innerText = recentTotalSeatA2;
//     }
//     else{
//         alert('Sorry,all seats have been booked.');
//     }
// })

// // Seats Lefts for A3

// const totalSeatsA3 = document.getElementById('left-seats');

// const bookA3 = document.getElementById('a-three');
// bookA3.addEventListener('click',function(){
//     const newTotalSeatA3 = parseInt(totalSeatsA3.innerText);
//     if(newTotalSeatA3 > 0){
//         const recentTotalSeatA3 = newTotalSeatA3 - 1;
//         totalSeatsA3.innerText = recentTotalSeatA3;
//     }
//     else{
//         alert('Sorry,all seats have been booked.');
//     }
// })

// // Seats Lefts for A4

// const totalSeatsA4 = document.getElementById('left-seats');

// const bookA4 = document.getElementById('a-four');
// bookA4.addEventListener('click',function(){
//     const newTotalSeatA4 = parseInt(totalSeatsA4.innerText);
//     if(newTotalSeatA4 > 0){
//         const recentTotalSeatA4 = newTotalSeatA4 - 1;
//         totalSeatsA4.innerText = recentTotalSeatA4;
//     }
//     else{
//         alert('Sorry,all seats have been booked.');
//     }
// })

// // Seats Lefts for B1

// const totalSeatsB1 = document.getElementById('left-seats');

// const bookB1 = document.getElementById('b-one');
// bookB1.addEventListener('click',function(){
//     const newTotalSeatB1 = parseInt(totalSeatsB1.innerText);
//     if(newTotalSeatB1 > 0){
//         const recentTotalSeatB1 = newTotalSeatB1 - 1;
//         totalSeatsB1.innerText = recentTotalSeatB1;
//     }
//     else{
//         alert('Sorry,all seats have been booked.');
//     }
// })

// // Seats Lefts for B2

// const totalSeatsB2 = document.getElementById('left-seats');

// const bookB2 = document.getElementById('b-two');
// bookB2.addEventListener('click',function(){
//     const newTotalSeatB2 = parseInt(totalSeatsB2.innerText);
//     if(newTotalSeatB2 > 0){
//         const recentTotalSeatB2 = newTotalSeatB2 - 1;
//         totalSeatsB2.innerText = recentTotalSeatB2;
//     }
//     else{
//         alert('Sorry,all seats have been booked.');
//     }
// })

// // // Seats Lefts for B3

// const totalSeatsB3 = document.getElementById('left-seats');

// const bookB3 = document.getElementById('b-three');
// bookB3.addEventListener('click',function(){
//     const newTotalSeatB3 = parseInt(totalSeatsB3.innerText);
//     if(newTotalSeatB3 > 0){
//         const recentTotalSeatB3 = newTotalSeatB3 - 1;
//         totalSeatsB3.innerText = recentTotalSeatB3;
//     }
//     else{
//         alert('Sorry,all seats have been booked.');
//     }
// })

// // Seats Lefts for B4

// const totalSeatsB4 = document.getElementById('left-seats');

// const bookB4 = document.getElementById('b-four');
// bookB4.addEventListener('click',function(){
//     const newTotalSeatB4 = parseInt(totalSeatsB4.innerText);
//     if(newTotalSeatB4 > 0){
//         const recentTotalSeatB4 = newTotalSeatB4 - 1;
//         totalSeatsB4.innerText = recentTotalSeatB4;
//     }
//     else{
//         alert('Sorry,all seats have been booked.');
//     }
// })





// const countedSeatDisplay = document.getElementById('counted-seat');
// const changeableSeatDisplay = document.getElementById('changeable-seat');
// const totalPriceDisplay = document.getElementById('total-cost');
// const applyCouponButton = document.getElementById('apply-coupon-button');
// const couponInput = document.getElementById('coupon');

// let leftSeats = 8;
// let changeableSeat = 0;
// let totalPrice = 0;

// for(let i = 1; i <= leftSeats; i++){
//     const seatButton = document.getElementsByClassName('same-button-class');
//     seatButton.textContent = 'same-button-class' + i;
//     seatButton.addEventListener('click',function(){
//         if(changeableSeat < 4 && leftSeats >0){
//             changeableSeat++;
//             leftSeats--;
//             totalPrice += 550;
//             updateDisplay();
//             // seatButton.add('seat');
//         }
//     })
// }
// function updateDisplay(){
//     countedSeatDisplay.textContent = leftSeats;
//     changeableSeatDisplay.textContent = changeableSeat;
//     totalPriceDisplay.textContent = totalPrice;

//     if(changeableSeat === 4){
//         applyCouponButton.removeAttribute('disabled');
//     }
// }

// applyCouponButton.addEventListener('click',function(){
//     const couponCode = couponInput.value.trim();
//     if(couponCode === 'Couple 20'){
//         totalPrice *= 0.8;
//         totalPriceDisplay.textContent = totalPrice;
//         applyCouponButton.setAttribute('disabled',true);
//     }
// })


// const allBtn = document.getElementsByClassName('add-btn')

// for (const btn of allBtn) {
//     btn.addEventListener('click',function(event){
//         console.log(event.target);
//     })
// }

// const addSeatEconomyPrice = document.getElementById('add-seat-economy-price');

// const newDiv = document.createElement('div');
//         newDiv.setAttribute('class', 'flex justify-between');

//         const tag1 = document.createElement('p');
//         tag1.innerText = add-btn;
//         newDiv.appendChild(tag1);

//         const tag2 = document.createElement('p');
//         tag2.innerText = 'Economoy';
//         newDiv.appendChild(tag2);

//         const tag3 = document.createElement('p');
//         tag3.innerText = ticketPrice;
//         newDiv.appendChild(tag3);

//         addSeatEconomyPrice.appendChild(newDiv);

        // const bookingSit = document.getElementById('booking-sit');
        // bookingSit.appendChild(newDiv);


// function getConvertedValue(id){
//     const availableSeats = document.getElementById(id).innerText;
//     const convertAvailableSeats = parseInt(availableSeats);
//     return convertAvailableSeats;
// }



// TRY-------------------------------------------------------------------



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

// COUPON INPUT 

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
  