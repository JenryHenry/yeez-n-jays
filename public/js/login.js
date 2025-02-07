// Login handler from week 14 activities
const loginFormHandler = async (event) => {
  event.preventDefault();
  const username = document
    .querySelector('#username-yeeznjays-login')
    .value.trim();
  const password = document
    .querySelector('#password-yeeznjays-login')
    .value.trim();

  if (!username && !password) {
    alert('Username and password can not be blank.');
  } else if (!username) {
    alert('Username can not be blank.');
  } else if (!password) {
    alert('Password can not be blank.');
  } else if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      alert('Credentials not found. Please create an account');
      document.location.replace('/signup');
    } else if (response.ok) {

      document.location.replace('/');
    } else {
      alert('Failed to log in. Please check your credentials.');
    }
  }
};
document
  .querySelector('.yeeznjays-login-form')
  .addEventListener('submit', loginFormHandler);
