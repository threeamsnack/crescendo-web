var txt = 'The Annual Cultural Fest of \nShaheed \nSukhdev College \nof Business \nStudies';
var speed = 70;

function typeWriter() {
  var i = 0;
  var interval = setInterval(function () {
    document.getElementById("landing-text").innerHTML += txt.charAt(i);
    i++;
    if (i > txt.length - 1) {
      clearInterval(interval);
    }
  }, speed);
}


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
  audio.play();
}


function toggleFullScreen() {
  if (!document.fullscreenElement &&
    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
      toggleButtonVisibility();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
      toggleButtonVisibility();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
      toggleButtonVisibility();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      toggleButtonVisibility();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      toggleButtonVisibility();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
      toggleButtonVisibility();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
      toggleButtonVisibility();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      toggleButtonVisibility();
    }
  }
}





function toggleButtonVisibility() {
  var fullscreenButton = document.querySelector('.fullscreen-button');
  var compressButton = document.querySelector('.compress-btn');


  if (fullscreenButton.style.display === 'none') {
    fullscreenButton.style.display = 'inline-block';
    compressButton.style.display = 'none';
  } else {
    fullscreenButton.style.display = 'none';
    compressButton.style.display = 'inline-block';
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const toggleNav = document.querySelector('.toggle-nav');
  const navStack = document.querySelector('.navbtn-stack');
  const landingText = document.getElementById('landing-text');
  const background = document.querySelector('#sscbs-model');
  const mobileBackground = document.querySelector('.model-video');


  toggleNav.addEventListener('click', function () {

    toggleNav.classList.toggle('active');
    navStack.classList.toggle('active');
    landingText.classList.toggle('active');
    background.classList.toggle('active');
    mobileBackground.classList.toggle('active');
  });
});