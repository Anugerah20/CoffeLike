// Membuat perintah scroll button
const scrollButton = document.querySelector('.scroll-top');

if (scrollButton) {
    window.addEventListener('scroll', () => {
        if (pageYOffset > window.innerHeight * 1.2) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    scrollButton.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
}

// Membuat Perintah Loading
setTimeout(function() {
    $('.loading').fadeToggle();
}, 1500);