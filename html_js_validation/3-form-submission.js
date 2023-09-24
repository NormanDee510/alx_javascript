// Function to handle form submission and perform validation
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const errorElement = document.getElementById("error");
    const successElement = document.getElementById("success");

    // Retrieve values from form fields
    const name = nameField.value.trim();
    const email = emailField.value.trim();

    // Reset error and success messages
    errorElement.textContent = "";
    successElement.textContent = "";

    // Validate form fields
    if (name === "" || email === "") {
        errorElement.textContent = "Please fill in all required fields.";
    } else {
        // Form submission successful
        successElement.textContent = "Form submitted successfully!";
        
    }
}

// Add an event listener to the form to handle form submission
document.getElementById("submitForm").addEventListener("submit", handleFormSubmit);
