var txt = 'The Annual Fest of Shaheed Sukhdev College of Business Studies';
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

document.addEventListener("DOMContentLoaded", function () {
  var teleportBtn = document.getElementById("teleport-btn");
  var loaderBgImg = document.querySelector(".loader-bg-img");
  var loadingTxt = document.querySelector(".loading-txt");
  var opacityCheckInterval;

  function enforceOpacity() {
    loaderBgImg.style.opacity = 0;
    loadingTxt.style.opacity = 0;
  }

  function startOpacityCheck() {
    enforceOpacity();
    opacityCheckInterval = setInterval(enforceOpacity, 1000); // Adjust the interval as needed
  }

  teleportBtn.addEventListener("click", function () {
    startOpacityCheck();
  });
});


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
  const mobBackground = document.querySelector('.model-video');
  const mobnavStack = document.querySelector('.navbtn-stack-mob');
  const mobnavBtn = document.querySelector('.nav-btn');
  const logoSubtext = document.querySelector('#logo-subtext');
  const promBtn = document.querySelector('.space-btn');


  let isToggled = false;
  toggleNav.addEventListener('click', function () {
    if (!isToggled) {
      navStack.style.opacity = '1';
      navStack.style.pointerEvents = 'auto';
      mobnavStack.style.opacity = '1';
      mobnavStack.style.pointerEvents = 'auto';
      mobnavBtn.style.pointerEvents = 'auto';
      landingText.style.opacity = '0';
      toggleNav.style.filter = 'sepia(1)';
      background.style.filter = 'blur(2px) grayscale(1)';
      mobBackground.style.filter = 'grayscale(1)';
      logoSubtext.style.display = 'block';
      isToggled = true;
      promBtn.style.filter = 'blur(2px) grayscale(1)';
      promBtn.style.pointerEvents = 'none';
    } else {
      navStack.style.opacity = '0';
      navStack.style.pointerEvents = 'none';
      mobnavStack.style.opacity = '0';
      mobnavStack.style.pointerEvents = 'none';
      mobnavBtn.style.pointerEvents = 'none';
      landingText.style.opacity = '1';
      toggleNav.style.filter = 'invert(1)';
      background.style.filter = 'sepia(0.5)';
      mobBackground.style.filter = 'none';
      logoSubtext.style.display = 'none';
      isToggled = false;
      promBtn.style.filter = 'none';
      promBtn.style.pointerEvents = 'auto';
    }
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const toggleNav = document.querySelector('.toggle-nav');
  const mobileBackground = document.querySelector('.model-video');

  toggleNav.addEventListener('click', function () {

    mobileBackground.classList.toggle('active');
  });
});



(function () {
  function commentOutModelViewer() {
    var screenWidth = window.innerWidth;
    var modelViewer = document.getElementById("sscbs-model");

    if (screenWidth <= 765 && !modelViewer.hasAttribute("data-commented")) {
      var commentedCode = document.createComment(modelViewer.outerHTML);
      modelViewer.parentNode.replaceChild(commentedCode, modelViewer);
      modelViewer.setAttribute("data-commented", "true");
    } else if (screenWidth > 765 && modelViewer.hasAttribute("data-commented")) {
      var uncommentedCode = document.createRange().createContextualFragment(modelViewer.outerHTML);
      modelViewer.parentNode.replaceChild(uncommentedCode, modelViewer.previousSibling);
      modelViewer.removeAttribute("data-commented");
    }
  }

  window.addEventListener("load", commentOutModelViewer);

  window.addEventListener("resize", commentOutModelViewer);
})();






document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.artist-vid, .model-video, .popup-vid');


  function playVideos() {
    videos.forEach(video => {
      video.muted = true;
      video.play();
    });
    window.removeEventListener('scroll', playVideos);
    window.removeEventListener('click', playVideos);
  }

  window.addEventListener('scroll', playVideos);
  window.addEventListener('click', playVideos);
});




document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.querySelector('.popup-container');
  const mainWebsite = document.querySelector('.main-website');
  const teleportBtn = document.getElementById('teleport-btn');
  const closeBtn = document.querySelector('.fa.fa-times');

  teleportBtn.addEventListener('click', function () {
    setTimeout(function () {
      popupContainer.classList.add('open');
      mainWebsite.classList.add('open');
    }, 15000);
  });

  closeBtn.addEventListener('click', function () {
    popupContainer.classList.remove('open');
    mainWebsite.classList.remove('open');
  });
});


const porContacts = document.querySelectorAll('.por-container');

porContacts.forEach(function (porContact) {
  const phoneIcon = porContact.querySelector('.fa.fa-phone');
  const porCall = porContact.querySelector('.por-call');

  phoneIcon.addEventListener('mouseover', function () {
    porCall.classList.add('show');
  });

  phoneIcon.addEventListener('mouseout', function () {
    porCall.classList.remove('show');
  });
});

function filterEvents() {
  var filterValue = document.getElementById("filter").value;
  var eventCards = document.querySelectorAll(".event-box");
  eventCards.forEach(function (card) {
      var classes = card.classList;

      if (filterValue === "all") {
          card.style.display = "block"; 
      } else if (classes.contains(filterValue)) {
          card.style.display = "block"; 
      } else {
          card.style.display = "none"; 
      }
  });
}
document.getElementById("filter").addEventListener("change", filterEvents);
filterEvents();