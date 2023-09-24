// Function to validate the email
function validateEmail() {
    const email = document.getElementById("email").value;
    const errorElement = document.getElementById("error");    
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    // Check if the email matches the regex pattern
    if (!emailRegex.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        return false;
    }
    // Clear any previous error messages and allow form submission
    errorElement.textContent = "";
    return true;
}
// Add an event listener to the form to call validateEmail on submit
document.getElementById("emailForm").addEventListener("submit", function (event) {
    if (!validateEmail()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
