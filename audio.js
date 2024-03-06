document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".btn-glitch-fill");
    var clickSound = document.getElementById("clickSound");
    var hoverSound = document.getElementById("hoverSound");
    var toggleNav = document.querySelector('.toggle-nav');
    var toggleSound = document.getElementById('toggleSound');


    buttons.forEach(function (button) {
        var audioPlayed = false;

        button.addEventListener("mouseenter", function (event) {
            // Check if the audio has already been played for this button
            if (!audioPlayed) {
                playHoverSound();
                audioPlayed = true; // Set the flag to true to indicate that audio has been played
            }
        });

        button.addEventListener("mouseleave", function (event) {
            audioPlayed = false; // Reset the flag when the mouse leaves the button
        });

        button.addEventListener("click", function (event) {
            playClickSound();
        });
    });

    function playHoverSound() {
        if (hoverSound.paused) {
            hoverSound.play();
        } else {
            hoverSound.currentTime = 0;
        }
    }

    function playClickSound() {
        if (clickSound.paused) {
            clickSound.play();
        } else {
            clickSound.currentTime = 0;
        }
    }

    toggleNav.addEventListener('click', function () {
        toggleSound.play();
    });

});



// document.addEventListener('DOMContentLoaded', function () {
//     var toggleNav = document.querySelector('.toggle-nav');
//     var toggleSound = document.getElementById('toggleSound');

//     toggleNav.addEventListener('click', function () {
//         toggleSound.play();
//     });

// });