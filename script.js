const clockElement = document.getElementById('clock');
const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

// Create tick marks for each hour
for (let i = 0; i < 12; i++) {
const tick = document.createElement('div');
//   tick.classList.add('tick');
tick.style.transform = `rotate(${i * 30}deg) translateX(-50%)`;
clockElement.appendChild(tick);
}

// Create numbers 1 to 12
// We place them using simple trigonometry (cos, sin)
// Angle offset: each number is 30° from the next (360° / 12)
// We shift them so "12" is at -90° (i.e., top)
const centerX = 150; // half of clock's width
const centerY = 150; // half of clock's height
const radius = 110;  // distance from center to numbers
for (let i = 1; i <= 12; i++) {
const numberDiv = document.createElement('div');
numberDiv.classList.add('number');
numberDiv.textContent = i;

const angle = ((i * 30) - 90) * (Math.PI / 180);
const x = centerX + radius * Math.cos(angle);
const y = centerY + radius * Math.sin(angle);

numberDiv.style.left = `${x}px`;
numberDiv.style.top = `${y}px`;

clockElement.appendChild(numberDiv);
}

function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate angles
    const secondsAngle = (seconds / 60) * 360;
    const minutesAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hoursAngle = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

    // Rotate hands
    secondHand.style.transform = `translateX(-50%) rotate(${secondsAngle}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the correct time immediately