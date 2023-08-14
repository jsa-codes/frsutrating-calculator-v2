function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function compute() {
    const display = document.getElementById('display');
    let result;
    try {
        result = eval(display.value);
        display.value = result; // Set the value first before showing the overlay
    } catch (e) {
        display.value = "Error";
        result = "Error"; // If there's an error, capture that as the result
    }
    showOverlay(result); // Show the result or error in the overlay
}

function fireConfetti() {
    confetti({
        particleCount: 100,
        spread: 75,
        origin: { x: 0.5, y: 0.6 }
    });
}

function showOverlay(value) {
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('message');
    message.innerText = `You pressed: ${value}`;

    overlay.style.opacity = '1';
    overlay.style.display = 'flex';

    fireConfetti();

    // After 10 seconds, hide the overlay gradually
    setTimeout(() => {
        let opacity = 1;
        const fadeOut = setInterval(() => {
            if (opacity <= 0) {
                clearInterval(fadeOut);
                overlay.style.display = 'none';
            } else {
                opacity -= 0.05;
                overlay.style.opacity = opacity;
            }
        }, 20);
    }, 5000);
}
