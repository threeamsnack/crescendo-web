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
    var txt = 'l1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
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
    var txt = 'l2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
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
    var txt = 'r1Lorem Ipsum is simply duewfewmmy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
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
    
    setTimeout(function () {
        teleportContainer.style.display = 'none';
        typeWriter();
    }, 13000); 
};