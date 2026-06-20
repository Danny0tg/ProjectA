

// We wrap everything in an Event Listener that waits for the HTML page to load completely.
// This ensures JavaScript can find our HTML elements properly.
document.addEventListener("DOMContentLoaded", function() {

    const calcButton = document.getElementById("calculate-btn");
    const milesInput = document.getElementById("weekly-miles");
    const resultResultText = document.getElementById("calc-result");

   
    if (calcButton && milesInput && resultResultText) {
        
        calcButton.addEventListener("click", function() {
           
            const miles = parseFloat(milesInput.value);

           
            if (isNaN(miles) || miles < 0) {
                resultResultText.textContent = "Please enter a valid number of miles.";
                resultResultText.style.color = "#e74c3c"; // Turn text red for error
                return;
            }

               const co2Emissions = miles * 0.404 * 52; // Multiplied by weeks in a year
           at
            const finalOutput = co2Emissions.toFixed(1);

           
            resultResultText.textContent = "Your car produces roughly " + finalOutput + " kg of CO2 per year. GreenTech can help you reduce this!";
            resultResultText.style.color = "#2e7d32"; // Turn text green for success
        });

    const faqQuestions = document.querySelectorAll(".faq-question");

   
    faqQuestions.forEach(function(question) {
        question.addEventListener("click", function() {
            
                        const answer = this.nextElementSibling;

           
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });

    