// Excel Functions Handling (excel.html)
document.getElementById("calculateBtn").addEventListener("click", function () {
    const input = document.getElementById("numbers").value.trim();

    // Check if the input is empty
    if (!input) {
        alert("Please enter some numbers!");
        return;
    }

    // Convert input to an array of numbers
    const numbers = input
        .split(' ')               // Split by space
        .map(Number)              // Convert to numbers
        .filter(n => !isNaN(n));  // Remove invalid numbers

    let result;

    // Check which radio button is selected and calculate accordingly
    if (document.getElementById("sum").checked) {
        result = numbers.reduce((a, b) => a + b, 0);
    } else if (document.getElementById("avg").checked) {
        result = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    } else if (document.getElementById("max").checked) {
        result = Math.max(...numbers);
    } else if (document.getElementById("min").checked) {
        result = Math.min(...numbers);
    }

    // Display the result
    document.getElementById("result").innerText = `Result: ${result}`;
});
