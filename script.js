//your JS code here. If required.
// Function to show an alert with the current username
function showAlert(username) {
    alert(`Logged in as ${username}.`);
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;

    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    showAlert(username);
    updateExistingButton();
}

// Function to handle login as existing user
function handleExistingUserLogin() {
    const username = localStorage.getItem('username');
    if (username) {
        showAlert(username);
    }
}

// Function to update the visibility of the "Login as existing user" button
function updateExistingButton() {
    const existingButton = document.getElementById('existing');
    if (localStorage.getItem('username')) {
        existingButton.style.display = 'block';
    } else {
        existingButton.style.display = 'none';
    }
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    updateExistingButton();
    document.getElementById('login-form').addEventListener('submit', handleFormSubmit);
    document.getElementById('existing').addEventListener('click', handleExistingUserLogin);
});
