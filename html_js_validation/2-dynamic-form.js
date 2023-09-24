// Function to generate dynamic input fields based on the selected value
function generateInputFields(numFields) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear previous fields

    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field " + i;
        inputContainer.appendChild(inputField);
    }
}

// Function to validate the form before submission
function validateForm() {
    const numFieldsSelect = document.getElementById("numFields");
    const selectedValue = parseInt(numFieldsSelect.value);
    const inputContainer = document.getElementById("inputContainer");
    const errorElement = document.getElementById("error");

    // Generate dynamic input fields based on the selected value
    generateInputFields(selectedValue);

    // Check if any dynamically generated fields are empty
    const inputFields = inputContainer.querySelectorAll("input");
    for (const inputField of inputFields) {
        if (inputField.value.trim() === "") {
            errorElement.textContent = "Please fill in all fields.";
            return false;
        }
    }

    // Clear any previous error messages and allow form submission
    errorElement.textContent = "";
    return true;
}

// Add an event listener to the form to call validateForm on submit
document.getElementById("dynamicForm").addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Add an event listener to the dropdown menu to dynamically update input fields
document.getElementById("numFields").addEventListener("change", function () {
    validateForm();
});
