
function animateBlickDots() {
    const dotsElements = document.querySelectorAll('.blick-dots');
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



var txt = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
var speed = 70;

function typeWriterleft1() {
    var i = 0;
    var interval = setInterval(function () {
        document.getElementById("message-textbox-left-1").innerHTML += txt.charAt(i);
        i++;
        if (i > txt.length - 1) {
            clearInterval(interval);
        }
    }, speed);
}

var txt = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
var speed = 70;

function typeWriterleft2() {
    var i = 0;
    var interval = setInterval(function () {
        document.getElementById("message-textbox-left-2").innerHTML += txt.charAt(i);
        i++;
        if (i > txt.length - 1) {
            clearInterval(interval);
        }
    }, speed);
}

var txt = 'Lorem Ipsum is simply duewfewmmy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
var speed = 70;

function typeWriterright() {
    var i = 0;
    var interval = setInterval(function () {
        document.getElementById("message-textbox-right").innerHTML += txt.charAt(i);
        i++;
        if (i > txt.length - 1) {
            clearInterval(interval);
        }
    }, speed);
}




window.onload = function() {
    typeWriterright("message-textbox-right");
    typeWriterleft1("message-textbox-left-1");
    typeWriterleft2("message-textbox-left-2");
    animateBlickDots("blink-dots");
};