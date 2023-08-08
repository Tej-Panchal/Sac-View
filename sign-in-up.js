// Mock user database
const users = [];

// Function to sign up a new user
function signUp(username, password) {
    // Check if the username is already taken
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert('Username already taken');
        return;
    }

    // Create a new user and add it to the database
    const newUser = { username, password };
    users.push(newUser);

    // Redirect to the signin page
    window.location.href = 'signin.html';
}

// Function to sign in a user
function signIn(username, password) {
    // Check if the user exists and the password is correct
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        alert('Invalid username or password');
        return;
    }

    // Store user session information (in a real application, you'd use more secure methods)
    sessionStorage.setItem('currentUser', JSON.stringify(user));

    // Redirect to the main page
    window.location.href = 'main.html';
}

// Handle form submissions
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    signUp(username, password);
});

document.getElementById('signinForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    signIn(username, password);
});
