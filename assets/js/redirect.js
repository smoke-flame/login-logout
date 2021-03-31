let item = localStorage.getItem('email');

if (item) {
    body.write = '';
    window.location.href = 'admin';
}