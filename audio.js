function toggleMute() {
    const audio = document.getElementById('audio');
    const muteBtn = document.getElementById('mute-btn');
    const unmuteBtn = document.getElementById('unmute-btn');

    if (audio.muted) {
        audio.muted = false;
        muteBtn.style.display = 'none';
        unmuteBtn.style.display = 'inline';
    } else {
        audio.muted = true;
        muteBtn.style.display = 'inline';
        unmuteBtn.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    // audio.muted = true;
    document.getElementById('mute-btn').style.display = 'none';
    document.getElementById('unmute-btn').style.display = 'inline';
 
});







document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".btn-glitch-fill, .nav-btn");
    var clickSound = document.getElementById("clickSound");
    var hoverSound = document.getElementById("hoverSound");
    var toggleNav = document.querySelector('.toggle-nav');
    var toggleSound = document.getElementById('toggleSound');
    var nextBtn = document.querySelectorAll('.loader-btn');
    var telBtn = document.getElementById('teleport-btn');


    buttons.forEach(function (button) {
        var audioPlayed = false;

        button.addEventListener("mouseenter", function (event) {
            if (!audioPlayed) {
                playHoverSound();
                audioPlayed = true;
            }
        });

        button.addEventListener("mouseleave", function (event) {
            audioPlayed = false;
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

    nextBtn.forEach(function (btn) {
        btn.addEventListener('click', function () {
            toggleSound.play();
        });
    });

    telBtn.addEventListener('click', function () {
        playClickSound();
    });


});