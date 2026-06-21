/* ==========================================================================
   GREENTECH SOLUTIONS - MAIN JAVASCRIPT FILE (60-Hour Milestone Project)
   ========================================================================== */

// We wrap everything in an Event Listener that waits for the HTML page to load completely.
// This ensures JavaScript can find our HTML elements properly.
document.addEventListener("DOMContentLoaded", function() {

    // ----------------------------------------------------------------------
    // FEATURE 1: GREEN CO2 CARBON CALCULATOR (DOM Manipulation & Math)
    // ----------------------------------------------------------------------
    
    // Grab the elements from the page using their unique IDs
    const calcButton = document.getElementById("calculate-btn");
    const milesInput = document.getElementById("weekly-miles");
    const resultResultText = document.getElementById("calc-result");

    // Check if these elements exist on the current page before running code
    if (calcButton && milesInput && resultResultText) {
        
        calcButton.addEventListener("click", function() {
            // Get the value typed by the user and convert it from text to a number
            const miles = parseFloat(milesInput.value);

            // Simple validation check: make sure they entered a real, positive number
            if (isNaN(miles) || miles < 0) {
                resultResultText.textContent = "Please enter a valid number of miles.";
                resultResultText.style.color = "#e74c3c"; // Turn text red for error
                return;
            }

            // Standard environmental logic: roughly 0.404 kg of CO2 per mile driven
            const co2Emissions = miles * 0.404 * 52; // Multiplied by weeks in a year
            
            // Round the final answer to one decimal place so it looks neat
            const finalOutput = co2Emissions.toFixed(1);

            // Print the result directly onto the page dynamically
            resultResultText.textContent = "Your car produces roughly " + finalOutput + " kg of CO2 per year. GreenTech can help you reduce this!";
            resultResultText.style.color = "#2e7d32"; // Turn text green for success
        });
    }

    // ----------------------------------------------------------------------
    // FEATURE 2: INTERACTIVE FAQ ACCORDION (Looping & Style Toggling)
    // ----------------------------------------------------------------------
    
    // Select all the question headers on the FAQ section
    const faqQuestions = document.querySelectorAll(".faq-question");

    // Loop through each question button to add a click listener
    faqQuestions.forEach(function(question) {
        question.addEventListener("click", function() {
            
            // Find the answer container that sits directly next to this question box
            const answer = this.nextElementSibling;

            // Toggle visibility: if it's open, close it. If it's closed, open it.
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });

});