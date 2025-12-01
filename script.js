// When the page loads
window.onload = function() {
    console.log("Website is ready!");
};

// Example: Show an alert when a button is clicked
function showMessage() {
    alert("You clicked the button!");
}

// Example: Change text when a button is clicked
function changeText() {
    document.getElementById("message").innerHTML = "The text has been changed!";
}

// Example: Toggle dark mode
function toggleDarkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
}
