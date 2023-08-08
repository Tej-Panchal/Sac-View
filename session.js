// Check if the user is signed in
const isSignedIn = sessionStorage.getItem('isSignedIn');

// Hide or show the homepage content based on the user's sign-in status
const container = document.getElementById('container');
if (isSignedIn) {
    container.style.display = 'none';
} else {
    container.style.display = 'block';
}
