// const create = document.querySelector("#carouselExampleIndicators");
const slides = new bootstrap.Carousel("#carouselExampleIndicators");

// console.log(slides);

document.addEventListener("keyup", (e) => {
    // console.log(e); 
    if(e.key === " ") {
        slides.next()
    }
})

