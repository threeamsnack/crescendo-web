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


function typeWriterdisclaimer() {
    var txt = "Welcome to the virtual cosmos of Crescendo, the annual fest of SSCBS! As you embark on this journey, remember, the cosmos is vast and unpredictable. While we strive for an out-of-this-world experience, unforeseen asteroid showers or temporal anomalies may occur. Navigate with curiosity as your guide, but know you do so at your own risk. Safe travels, and may the force be with you!";
    var speed = 10;
    var i = 0;
    var interval = setInterval(function () {
        document.getElementById("disclaimer-body-txt").innerHTML += txt.charAt(i);
        i++;
        if (i > txt.length - 1) {
            clearInterval(interval);
        }
    }, speed);
}



function typeWriterright() {
    var txt = "The word on the space lanes is that Crescendo is like nothing we've ever seen before. But how does this Teleport thing work? Are we really going to teleport across the galaxy?";
    var speed = 20;
    var i = 0;
    var interval = setInterval(function () {
        document.getElementById("message-textbox-right").innerHTML += txt.charAt(i);
        i++;
        if (i > txt.length - 1) {
            clearInterval(interval);
        }
    }, speed);
}





// window.onload = function () {
//     document.querySelector('.loading-txt').style.display = 'block';
//     setTimeout(function () {
//         document.querySelector('.loader-bg-img').classList.add('loaded');
//         document.querySelector('.loading-txt').style.display = 'none';
//         document.querySelector('.disclaimer-container').style.display = 'none';
//         document.querySelector('.loader-btn-container').style.display = 'block';
//         document.querySelector('#next-btn-1').style.display = 'block';
//         document.querySelector('.left-char-con-1').style.display = 'flex';
//         typeWriterleft1("message-textbox-left-1");
//     }, 1000);
// }

// animateBlinkDots("blink-dots");
// document.getElementById('next-btn-1').onclick = function () {
//     document.querySelector('#next-btn-1').style.display = 'none';
//     document.querySelector('#next-btn-2').style.display = 'block';
//     document.querySelector('.left-char-con-1').style.display = 'none';
//     document.querySelector('.right-char-con-1').style.display = 'flex';
//     typeWriterright("message-textbox-right");
// }

// document.getElementById('next-btn-2').onclick = function () {
//     document.querySelector('#next-btn-2').style.display = 'none';
//     document.querySelector('#teleport-btn').style.display = 'block';
//     document.querySelector('.left-char-con-2').style.display = 'flex';
//     document.querySelector('.right-char-con-1').style.display = 'none';
//     typeWriterleft2("message-textbox-left-2");
// }







window.onload = function () {
    document.querySelector('.loading-txt').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.loader-bg-img').classList.add('loaded');
        document.querySelector('.loading-txt').style.display = 'none';
        document.querySelector('.disclaimer-container').style.display = 'block';
        document.querySelector('.loader-btn-container').style.display = 'block';
        document.querySelector('#next-btn-1').style.display = 'block';
        typeWriterdisclaimer("disclaimer-body-txt");
    }, 1000);
}

animateBlinkDots("blink-dots");


document.getElementById('next-btn-1').onclick = function () {
    document.querySelector('.disclaimer-container').style.display = 'none';
    document.querySelector('#next-btn-1').style.display = 'none';
    document.querySelector('.right-char-con-1').style.display = 'flex';
    document.querySelector('#teleport-btn').style.display = 'block';
    typeWriterright("message-textbox-right");
}

document.getElementById('teleport-btn').onclick = function () {
    document.querySelector('.disclaimer-container').style.display = 'none';
    let teleportContainer = document.querySelector('.teleport-container');
    teleportContainer.style.display = 'block';
    document.getElementById('nav-bar').style.zIndex = '1009';
    document.getElementById('loader-audio').muted = true;
    
   
    audio.play();

    setTimeout(function () {
        teleportContainer.classList.add('fade-out');
        setTimeout(function () {
            teleportContainer.style.display = 'none';
            typeWriter();
        }, 1000);
    }, 6500);

    document.getElementById('loader-container').style.display = 'none';
    document.getElementByClassName('loader-bg-img').style.opacity = '0';
    document.getElementByClassName('loading-txt').style.opacity = '0';

};




document.addEventListener('DOMContentLoaded', function() {
    const teleportBtn = document.getElementById('teleport-btn');
    const video = document.getElementByClassName('teleport-vid');

    teleportBtn.addEventListener('click', function() {
        video.muted = true;
        video.play();
    });
});