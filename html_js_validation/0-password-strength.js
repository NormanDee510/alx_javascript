// Function to validate the password
function validatePassword() {
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");

    // Define regular expressions for each validation rule
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*]/;

    // Check each rule and display error messages as needed
    if (!lengthRegex.test(password)) {
        errorElement.textContent = "Password must be at least 8 characters long.";
        return false;
    }
    if (!uppercaseRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one uppercase letter.";
        return false;
    }
    if (!lowercaseRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one lowercase letter.";
        return false;
    }
    if (!digitRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one numeric digit.";
        return false;
    }
    if (!specialCharRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one special character (e.g., !@#$%^&*).";
        return false;
    }

    // Clear any previous error messages and allow form submission
    errorElement.textContent = "";
    return true;
}

// Add an event listener to the form to call validatePassword on submit
document.getElementById("passwordForm").addEventListener("submit", function (event) {
    if (!validatePassword()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
