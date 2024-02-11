document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    var landingSection = document.getElementById('landingSection');
    var mainContentSection = document.getElementById('mainContentSection');
    var continueButton = document.getElementById('continueButton');
    var yesButton = document.getElementById('yesBtn'); // Make sure this ID matches your HTML
    var noButton = document.getElementById('noBtn'); // Make sure this ID matches your HTML
    var generalMusic = document.getElementById('generalMusic');
    var happyMusic = document.getElementById('happyMusic');
    var sadMusic = document.getElementById('sadMusic');
    
    document.getElementById('continueButton').addEventListener('click', function() {
        // Hide landing section and show main content section
        console.log('con button clicked');
        landingSection.style.display = 'none';
        mainContentSection.style.display = 'block';
        // Play the general music
        if (generalMusic.paused) {
            generalMusic.play().catch(error => console.error('Error playing the audio:', error));
        }
    });

    yesButton.addEventListener('click', function() {
        // Handle 'Yes' button action
        console.log('Yes button clicked');
        if (!generalMusic.paused) {
            generalMusic.pause();
        }
        mainContentSection.style.display = 'none'; // Hide content
        // Display the message
        yesMessage.style.display = 'block';
        document.body.style.backgroundImage = "url('public/happy.jpg')";
        if (happyMusic.paused) {
            happyMusic.play().catch(error => console.error('Error playing the audio:', error));
        }
        // Trigger the confetti effect
        triggerConfetti(); // Make sure this function is properly defined to start the confetti effect
    });

    noButton.addEventListener('click', function() {
        // Handle 'No' button action
        mainContentSection.style.display = 'none'; // Hide content
        console.log('No button clicked');
        if (!generalMusic.paused) {
            generalMusic.pause();
        }
        document.body.style.backgroundImage = "url('public/Crying.jpg')";
        if (sadMusic.paused) {
            sadMusic.play().catch(error => console.error('Error playing the audio:', error));
        }
        // Show the 'I am sorry' button and message
    });

    // Display mobile message if on mobile device
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.getElementById('mobileMessage').style.display = 'block';
    }
});

function triggerConfetti() {
    var end = Date.now() + (15 * 1000); // Run the confetti for 15 seconds for example

    // You can adjust the options for different confetti styles
    var colors = ['#bb0000', '#ffffff', '#0000bb'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });
            requestAnimationFrame(frame);
    }());
}
