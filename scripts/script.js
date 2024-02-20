// BUTTON A1 COLOR CHANGE 
const buttonA1 = document.getElementById('a-one');
buttonA1.addEventListener('click',function(){
    buttonA1.style.backgroundColor = 'green';
});
// BUTTON A2 COLOR CHANGE 
const buttonA2 = document.getElementById('a-two');
buttonA2.addEventListener('click',function(){
    buttonA2.style.backgroundColor = 'green';
});
// BUTTON A3 COLOR CHANGE 
const buttonA3 = document.getElementById('a-three');
buttonA3.addEventListener('click',function(){
    buttonA3.style.backgroundColor = 'green';
});
// BUTTON A4 COLOR CHANGE 
const buttonA4 = document.getElementById('a-four');
buttonA4.addEventListener('click',function(){
    buttonA4.style.backgroundColor = 'green';
});
// BUTTON B1 COLOR CHANGE 
const buttonB1 = document.getElementById('b-one');
buttonB1.addEventListener('click',function(){
    buttonB1.style.backgroundColor = 'green';
});
// BUTTON B2 COLOR CHANGE 
const buttonB2 = document.getElementById('b-two');
buttonB2.addEventListener('click',function(){
    buttonB2.style.backgroundColor = 'green';
});
// BUTTON B3 COLOR CHANGE 
const buttonB3 = document.getElementById('b-three');
buttonB3.addEventListener('click',function(){
    buttonB3.style.backgroundColor = 'green';
});
// BUTTON B4 COLOR CHANGE 
const buttonB4 = document.getElementById('b-four');
buttonB4.addEventListener('click',function(){
    buttonB4.style.backgroundColor = 'green';
});

// Seats Lefts for A1

const totalSeatsA1 = document.getElementById('left-seats');

const bookA1 = document.getElementById('a-one');
bookA1.addEventListener('click',function(){
    const newTotalSeatA1 = parseInt(totalSeatsA1.innerText);
    if(newTotalSeatA1 > 0){
        const recentTotalSeatA1 = newTotalSeatA1 - 1;
        totalSeatsA1.innerText = recentTotalSeatA1;
    }
    else{
        alert('Sorry,all seats have been booked.');
    }
})

// Seats Lefts for A2

const totalSeatsA2 = document.getElementById('left-seats');

const bookA2 = document.getElementById('a-two');
bookA2.addEventListener('click',function(){
    const newTotalSeatA2 = parseInt(totalSeatsA2.innerText);
    if(newTotalSeatA2 > 0){
        const recentTotalSeatA2 = newTotalSeatA2 - 1;
        totalSeatsA2.innerText = recentTotalSeatA2;
    }
    else{
        alert('Sorry,all seats have been booked.');
    }
})

// Seats Lefts for A3

const totalSeatsA3 = document.getElementById('left-seats');

const bookA3 = document.getElementById('a-three');
bookA3.addEventListener('click',function(){
    const newTotalSeatA3 = parseInt(totalSeatsA3.innerText);
    if(newTotalSeatA3 > 0){
        const recentTotalSeatA3 = newTotalSeatA3 - 1;
        totalSeatsA3.innerText = recentTotalSeatA3;
    }
    else{
        alert('Sorry,all seats have been booked.');
    }
})

// Seats Lefts for A4

const totalSeatsA4 = document.getElementById('left-seats');

const bookA4 = document.getElementById('a-four');
bookA4.addEventListener('click',function(){
    const newTotalSeatA4 = parseInt(totalSeatsA4.innerText);
    if(newTotalSeatA4 > 0){
        const recentTotalSeatA4 = newTotalSeatA4 - 1;
        totalSeatsA4.innerText = recentTotalSeatA4;
    }
    else{
        alert('Sorry,all seats have been booked.');
    }
})

// Seats Lefts for B1

const totalSeatsB1 = document.getElementById('left-seats');

const bookB1 = document.getElementById('b-one');
bookB1.addEventListener('click',function(){
    const newTotalSeatB1 = parseInt(totalSeatsB1.innerText);
    if(newTotalSeatB1 > 0){
        const recentTotalSeatB1 = newTotalSeatB1 - 1;
        totalSeatsB1.innerText = recentTotalSeatB1;
    }
    else{
        alert('Sorry,all seats have been booked.');
    }
})

// Seats Lefts for B2

const totalSeatsB2 = document.getElementById('left-seats');

const bookB2 = document.getElementById('b-two');
bookB2.addEventListener('click',function(){
    const newTotalSeatB2 = parseInt(totalSeatsB2.innerText);
    if(newTotalSeatB2 > 0){
        const recentTotalSeatB2 = newTotalSeatB2 - 1;
        totalSeatsB2.innerText = recentTotalSeatB2;
    }
    else{
        alert('Sorry,all seats have been booked.');
    }
})

// // Seats Lefts for B3

const totalSeatsB3 = document.getElementById('left-seats');

const bookB3 = document.getElementById('b-three');
bookB3.addEventListener('click',function(){
    const newTotalSeatB3 = parseInt(totalSeatsB3.innerText);
    if(newTotalSeatB3 > 0){
        const recentTotalSeatB3 = newTotalSeatB3 - 1;
        totalSeatsB3.innerText = recentTotalSeatB3;
    }
    else{
        alert('Sorry,all seats have been booked.');
    }
})

// Seats Lefts for B4

const totalSeatsB4 = document.getElementById('left-seats');

const bookB4 = document.getElementById('b-four');
bookB4.addEventListener('click',function(){
    const newTotalSeatB4 = parseInt(totalSeatsB4.innerText);
    if(newTotalSeatB4 >= 0){
        const recentTotalSeatB4 = newTotalSeatB4 - 1;
        totalSeatsB4.innerText = recentTotalSeatB4;
    }
    else{
        alert('Sorry,all seats have been booked.');
    }
})


// seat counted 

const seatCountA1 = document.getElementById('counted-seat');
const seatAddA1 = document.getElementById('add-seat');
const btnA1 = document.getElementById('a-one');
const totalSeatA1 = 0;
seatAddA1.addEventListener('click',function(){
    totalSeatA1++
    seatCountA1.innerText = totalSeatA1;
    seatAddA1.innerText = totalSeatA1;
})
