function determineCoolness() {
    let number = parseInt(prompt("On a scale from 0 to 100, how cool do you think you are?"));

    if (isNaN(number)) {
        alert("That's not a valid number!");
        return;
    }

    if (number < 0 || number > 100) {
        alert("Please enter a number between 0 and 100.");
        return;
    }

    if (number === 0) {
        alert("Come on! Give yourself some credit!");
    } else if (number <= 20) {
        alert("You're cooler than you think!");
    } else if (number <= 40) {
        alert("You've got a bit of cool in you!");
    } else if (number <= 60) {
        alert("You're pretty cool!");
    } else if (number <= 80) {
        alert("You're super cool!");
    } else if (number <= 99) {
        alert("Almost maxed out on coolness!");
    } else {
        alert("100% cool! You're the definition of cool!");
    }
}

// Call the function
determineCoolness();
