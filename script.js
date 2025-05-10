// Load existing credentials on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    document.getElementById('existing').style.display = 'inline-block';
  }
});

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const remember = document.getElementById('checkbox').checked;

  alert(`Logged in as ${username}`);

  if (remember) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  // Show or hide "existing user" button based on credentials
  const existingBtn = document.getElementById('existing');
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    existingBtn.style.display = 'inline-block';
  } else {
    existingBtn.style.display = 'none';
  }
});

// Handle "Login as existing user"
document.getElementById('existing').addEventListener('click', () => {
  const username = localStorage.getItem('username');
  if (username) {
    alert(`Logged in as ${username}`);
  }
});
