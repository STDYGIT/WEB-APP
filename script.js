const toggleSwitch = document.getElementById('toggle-switch');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const formTitle = document.getElementById('form-title');
const toggleLabel = document.querySelector('.toggle-container label');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    formTitle.textContent = 'Signup';
    toggleLabel.textContent = 'Login'; // Change label to 'Login'
  } else {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    formTitle.textContent = 'Login';
    toggleLabel.textContent = 'Signup'; // Change label to 'Signup'
  }
});