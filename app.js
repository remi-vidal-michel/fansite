const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let backwave = document.getElementById('backwave');
let stars = document.getElementById('stars');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    backwave.style.top = value * 0.5 + 'px';
    stars.style.left = value * 0.25 + 'px';
})