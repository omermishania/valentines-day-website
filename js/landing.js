
document.addEventListener('DOMContentLoaded', function () {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.getElementById('mobileMessage').style.display = 'block';
    }
    document.getElementById('continueButton').addEventListener('click', function () {
        window.location.href = 'public/index.html'; // Update this if the path to your main page is different
    });
});
