let local = localStorage.getItem('email');

if (!local) {
    document.write = '';
    window.location.href = 'login';
}