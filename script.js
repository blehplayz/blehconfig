let isLoggedIn = false;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple check for demo purposes (Replace this with your secure authentication logic)
    if (username === 'user' && password === 'password') {
        isLoggedIn = true;
        alert('Login successful!');
        window.location.replace('index.html');
    } else {
        alert('Invalid username or password.');
    }
}

function buyNow() {
    if (isLoggedIn) {
        const modal = document.getElementById('buy-now-modal');
        modal.style.display = 'block';
    } else {
        alert('Please login to proceed.');
        window.location.replace('login.html');
    }
}

function closeModal() {
    const modal = document.getElementById('buy-now-modal');
    modal.style.display = 'none';
}

function payment(method) {
    // ... (payment logic) ...
}
