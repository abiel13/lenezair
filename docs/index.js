function scroll() {
    var cat = document.querySelectorAll('.cat');
    cat.forEach(element => {
        catPosition = element.getBoundingClientRect().top;
        windowPos = window.innerHeight / 1.1;

        if (catPosition < windowPos) {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        }
        else {
            element.classList.remove("fade-in")
            element.classList.add("fade-out")
        }
    })
}

window.addEventListener('scroll', scroll)