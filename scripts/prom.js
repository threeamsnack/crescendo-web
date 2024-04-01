function handleVisibility(entries) {
    entries.forEach(entry => {
        const navBar = document.getElementById('nav-bar');

        if (entry.isIntersecting) {
            navBar.style.backgroundColor = '#3a3a3a4f';

        } else {
            navBar.style.backgroundColor = 'transparent';
        }
    });
}


const observer = new IntersectionObserver(handleVisibility);
const lightsImg = document.querySelector('.lights');
observer.observe(lightsImg);


document.getElementById('fileInput').addEventListener('change', function () {
    var fileName = this.files[0].name;
    var maxLength = 13;
    if (fileName.length > maxLength) {
        fileName = fileName.substring(0, maxLength) + '...';
    }
    document.getElementById('fileLabel').textContent = fileName;
});