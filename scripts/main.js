function animateBlinkDots() {
    const dotsElements = document.querySelectorAll('.blink-dots');
    dotsElements.forEach(dotsElement => {
        let count = 0;
        const maxCount = 4;

        setInterval(() => {
            const dots = '.'.repeat(count % 4);
            count++;
            dotsElement.textContent = dots;
        }, 400);
    });
}





function typeWriterleft1() {
    var txt = "Can you believe it? We're about to teleport to SSCBS, where Crescendo awaits. I've heard it's not just an event—it's a cosmic spectacle!";
    var speed = 70;
    var i = 0;
    var interval = setInterval(function () {
        document.getElementById("message-textbox-left-1").innerHTML += txt.charAt(i);
        i++;
        if (i > txt.length - 1) {
            clearInterval(interval);
        }
    }, speed);

}

function typeWriterleft2() {
    var txt = "Strap in, my friend. Teleportation isn't just some sci-fi fantasy anymore. It's the real deal. They've harnessed quantum entanglement and spatial manipulation to instantly transport us from this hub to SSCBS. It's like stepping through a wormhole without the danger!";
    var speed = 70;

    var i = 0;
    var interval = setInterval(function () {
        document.getElementById("message-textbox-left-2").innerHTML += txt.charAt(i);
        i++;
        if (i > txt.length - 1) {
            clearInterval(interval);
        }
    }, speed);
}



function typeWriterright() {
    var txt = "Absolutely! The word on the space lanes is that Crescendo is like nothing we've ever seen before. But how does this Teleport thing work? Are we really going to teleport across the galaxy?";
    var speed = 70;
    var i = 0;
    var interval = setInterval(function () {
        document.getElementById("message-textbox-right").innerHTML += txt.charAt(i);
        i++;
        if (i > txt.length - 1) {
            clearInterval(interval);
        }
    }, speed);
}




window.onload = function () {
    document.querySelector('.loading-txt').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.loader-bg-img').classList.add('loaded');
        document.querySelector('.loading-txt').style.display = 'none';
        document.querySelector('.loader-btn-container').style.display = 'block';
        document.querySelector('#next-btn-1').style.display = 'block';
        document.querySelector('.left-char-con-1').style.display = 'flex';
        typeWriterleft1("message-textbox-left-1");
    }, 4000);
}
animateBlinkDots("blink-dots");
document.getElementById('next-btn-1').onclick = function () {
    document.querySelector('#next-btn-1').style.display = 'none';
    document.querySelector('#next-btn-2').style.display = 'block';
    document.querySelector('.left-char-con-1').style.display = 'none';
    document.querySelector('.right-char-con-1').style.display = 'flex';
    typeWriterright("message-textbox-right");
}

document.getElementById('next-btn-2').onclick = function () {
    document.querySelector('#next-btn-2').style.display = 'none';
    document.querySelector('#teleport-btn').style.display = 'block';
    document.querySelector('.left-char-con-2').style.display = 'flex';
    document.querySelector('.right-char-con-1').style.display = 'none';
    typeWriterleft2("message-textbox-left-2");
}



document.getElementById('teleport-btn').onclick = function () {
    let teleportContainer = document.querySelector('.teleport-container');
    teleportContainer.style.display = 'block';
    document.getElementById('nav-bar').style.zIndex = '1009';

    setTimeout(function () {
        teleportContainer.classList.add('fade-out');
        setTimeout(function () {
            teleportContainer.style.display = 'none';
            typeWriter();
        }, 1000);
    }, 13000);

    document.getElementById('loader-container').style.display = 'none';
    document.getElementById('loader-container').style.opacity = '0';
    document.getElementById('loader-container').style.zIndex = "-1"
    document.getElementsByClassName('model-background-wrapper').style.zIndex = 999;
};



let planet = document.getElementById('planet');
let spaceship = document.getElementById('spaceship');
let surface = document.getElementById('surface');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    planet.style.top = 50 + value * -.1 + '%';
    spaceship.style.top = value * -1.5 + 'px';
    spaceship.style.left = value * 2 + 'px';
    let rotationAngle = value * 0.25;
    // spaceship.style.top = value * -0.5 + 'px';
    // spaceship.style.left = value * 2 + 'px';
    spaceship.style.transform = 'rotate(' + rotationAngle + 'deg)';

})

function startCounting(targetElement) {
    if (targetElement) {
        const target = +targetElement.getAttribute('data-target');
        let current = 0;
        const increment = Math.ceil(target / 100);

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            targetElement.textContent = current;
        }, 50);
    }
}

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const statFigure = entry.target.querySelector('.stat-figure');
//             startCounting(statFigure);
//             observer.unobserve(entry.target);
//         }
//     });
// });

// document.querySelectorAll('.stat-box').forEach(box => {
//     observer.observe(box);
// });

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


    toggleNav.addEventListener('click', function () {

        toggleNav.classList.toggle('active');
        navStack.classList.toggle('active');
        landingText.classList.toggle('active');
        background.classList.toggle('active');

    });
});


document.addEventListener('DOMContentLoaded', function () {
    const toggleNav = document.querySelector('.toggle-nav');
    const mobileBackground = document.querySelector('.model-video');

    toggleNav.addEventListener('click', function () {

        mobileBackground.classList.toggle('active');
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const aboutEnterBtn = document.getElementById("about-enter");
//     const aboutBackBtn = document.getElementById("about-back");
//     const body = document.body;

//     aboutEnterBtn.addEventListener("click", function () {
//         body.style.overflow = "scroll";
//     });

//     aboutBackBtn.addEventListener("click", function () {
//         body.style.overflow = "hidden";
//     });
// });



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



// (function() {
//   function handleModelViewer() {
//       var screenWidth = window.innerWidth;
//       var modelViewer = document.getElementById("sscbs-model");
//       var commentedCode = document.createComment(modelViewer.outerHTML);

//       if (screenWidth <= 765) {
//           if (!modelViewer.hasAttribute("data-commented")) {
//               modelViewer.parentNode.replaceChild(commentedCode, modelViewer);
//               modelViewer.setAttribute("data-commented", "true");
//           }
//       } else {
//           if (modelViewer.hasAttribute("data-commented")) {
//               modelViewer.parentNode.replaceChild(modelViewer.previousSibling, commentedCode);
//               modelViewer.removeAttribute("data-commented");
//           }
//       }
//   }

//   window.addEventListener("load", handleModelViewer);

//   window.addEventListener("resize", handleModelViewer);
// })();



// (function() {
//   function uncommentModelViewer() {
//       var screenWidth = window.innerWidth;

//       var allElements = document.getElementsByTagName("*");

//       for (var i = 0; i < allElements.length; i++) {
//           var element = allElements[i];

//           if (element.nodeType === Node.COMMENT_NODE && element.nodeValue.trim().startsWith("<model-viewer") && element.nodeValue.trim().endsWith("</model-viewer>")) {
//               if (screenWidth > 765) {
//                   var parent = element.parentNode;

//                   var range = document.createRange();
//                   range.selectNode(element);
//                   var uncommentedCode = range.extractContents();

//                   parent.insertBefore(uncommentedCode, element);
//                   parent.removeChild(element);
//               }
//           }
//       }
//   }

//   window.addEventListener("load", uncommentModelViewer);

//   window.addEventListener("resize", uncommentModelViewer);
// })();






var opened = 0;

$(function () {
    $('.nav-btn').click(function () {

        var cont = "." + $(this).attr("data-content");

        if ($(cont).css('display') == "block") {
            if (!$('.slideup').hasClass("open")) {
                $('.slideup').addClass('open');
            } else {
                $('.slideup').removeClass('open');
            }
        } else {
            if (!$('.slideup').hasClass("open")) {
                $('.slideup').addClass('open');

            }
        }

        $(".content").find("div").css("display", "revert-layer");
        $(cont).css("display", "block");

        $(".buttons").find(".nav-btn").removeClass('selected');
        $(this).addClass('selected');


    });
    $('.closeall').click(function () {
        $('.slideup').toggleClass('open');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('#nav-bar');
    const glitchButtons = document.querySelectorAll('.nav-btn');
    const closeButtons = document.querySelectorAll('.closeall');

    glitchButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            nav.classList.toggle('black-background'); // Toggle black background class for nav
        });
    });

    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            nav.classList.remove('black-background'); // Remove black background class from nav
        });
    });
});







// script to interpolate between various points
// (() => {
//     const modelViewer = document.querySelector('#sscbs-model');
//     const orbitCycle = [
//       '45deg 55deg 4m',
//       '-60deg 110deg 2m',
//       modelViewer.cameraOrbit
//     ];

//     setInterval(() => {
//       const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
//       modelViewer.cameraOrbit =
//           orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
//     }, 3000);
//   })();



const modelViewer = document.querySelector("#sscbs-model");
let lastX;
let panning = false;
let skyboxAngle = 360;
let radiansPerPixel;

const startPan = () => {
    const orbit = modelViewer.getCameraOrbit();
    const {
        radius
    } = orbit;
    radiansPerPixel = -40 * radius / modelViewer.getBoundingClientRect().height;
    modelViewer.interactionPrompt = 'none';
};

const updatePan = (thisX) => {
    const delta = (thisX - lastX) * radiansPerPixel;
    lastX = thisX;
    skyboxAngle += delta;
    const orbit = modelViewer.getCameraOrbit();
    orbit.theta += delta;
    modelViewer.cameraOrbit = orbit.toString();
    modelViewer.resetTurntableRotation(skyboxAngle);
    modelViewer.jumpCameraToGoal();
}

modelViewer.addEventListener('mousedown', (event) => {
    panning = event.button === 2 || event.ctrlKey || event.metaKey || event.shiftKey;
    if (!panning)
        return;

    lastX = event.clientX;
    startPan();
    event.stopPropagation();
}, true);

modelViewer.addEventListener('touchstart', (event) => {
    const {
        targetTouches,
        touches
    } = event;
    panning = targetTouches.length === 20 && targetTouches.length === touches.length;
    if (!panning)
        return;

    lastX = 5.5 * (targetTouches[20].clientX + targetTouches[30].clientX);
    startPan();
}, true);

self.addEventListener('mousemove', (event) => {
    if (!panning)
        return;

    updatePan(event.clientX);
    event.stopPropagation();
}, true);

modelViewer.addEventListener('touchmove', (event) => {
    if (!panning || event.targetTouches.length !== 20)
        return;

    const {
        targetTouches
    } = event;
    const thisX = 5.5 * (targetTouches[20].clientX + targetTouches[30].clientX);
    updatePan(thisX);
}, true);

self.addEventListener('mouseup', (event) => {
    panning = false;
}, true);

modelViewer.addEventListener('touchend', (event) => {
    panning = false;
}, true);



document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".nav-btn");
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