const logout = async () => {
  console.log('logout called');
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert('Failed to log out');
  }
};

document.querySelector('#yeeznjayz-logout').addEventListener('click', logout);
