document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const password = document.getElementById('password').value;

    localStorage.setItem('password', password);

    
    window.location.href = 'profile3.html';
});
