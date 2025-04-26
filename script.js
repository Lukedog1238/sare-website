document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    const correctUsername = 'SAREADMIN221124'; // Replace with your desired username
    const correctPassword = 'pA?9!Lg#vQz'; // Replace with your desired password

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
            // Redirect to the admin dashboard or another secure area
            window.location.href = 'dashboard.html'; // Replace with your actual admin dashboard URL
        } else {
            errorMessage.textContent = 'Invalid username or password. Please try again.';
        }
    });
});