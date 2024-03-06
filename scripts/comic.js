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
    var txt = "Can you believe it? We're about to teleport to SSCBS, where Crescendo awaits. I've heard it's not just an event—it's a cosmic spectacle!"
    ;
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
    document.getElementById('loader-container').style.display = 'none';
    
    let teleportContainer = document.querySelector('.teleport-container');
    teleportContainer.style.display = 'block';
    document.getElementById('nav-bar').style.zIndex = '1009' ;

    setTimeout(function () {
        teleportContainer.style.display = 'none';
        typeWriter();
    }, 13000); 
};