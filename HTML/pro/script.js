// Simple login functionality
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === 'admin' && password === 'password') {
    alert('Login successful!');
    // You can redirect the user to another page or perform additional actions here
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
