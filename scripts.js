function enroll(courseName) {
    alert(`You have successfully enrolled in the ${courseName} course!`);
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'student' && password === 'password123') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
