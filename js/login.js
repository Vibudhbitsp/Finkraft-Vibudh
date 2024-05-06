// Mock login functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Mock login logic
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        // Redirect to dashboard page upon successful login
        window.location.href = '../dashboard.html'; // Corrected relative path
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
