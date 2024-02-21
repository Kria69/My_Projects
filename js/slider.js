document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide')

    setTimeout(function() {
        document.getElementById("main-title").remove()

        slides.forEach((slide, index) => {
        setTimeout(() => {
            slide.classList.remove('hidden')
        }, index * 500)
        })
    }, 2000)

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            if (slide.classList.contains('active')) {
                slide.classList.remove('active')
                slide.classList.add('vis')
            } else {
                clearActiveClasses();
                slide.classList.add('active')
                slide.classList.remove('vis')
            }
        })
    })

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
            slide.classList.add('vis')
        })
    }
})