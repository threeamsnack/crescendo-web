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

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statFigure = entry.target.querySelector('.stat-figure');
            startCounting(statFigure);
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.stat-box').forEach(box => {
    observer.observe(box);
});


