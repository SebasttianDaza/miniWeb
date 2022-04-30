import { DOM } from "../index.js";

const handleSlider = () => {
    const $slides = DOM.querySelectorAll(".slider-slide"),
        $prev = DOM.querySelector(".slider-btns .prev"),
        $next = DOM.querySelector(".slider-btns .next");

    let currentSlide = 0;
    DOM.addEventListener("click", (e) => {
        if(e.target === $prev){
            e.preventDefault();
            //Remove class active from current slide
            $slides[currentSlide].classList.remove("active");
            currentSlide--;
            //If current slide is less than 0, set current slide to last slide
            if(currentSlide < 0){
                currentSlide = $slides.length - 1;
            }
            //Add class active to current slide
            $slides[currentSlide].classList.add("active");
        }
        if(e.target === $next){
            e.preventDefault();
            //Remove class active from current slide
            $slides[currentSlide].classList.remove("active");
            currentSlide++;
            //If current slide is more than last slide, set current slide to 0
            if(currentSlide > $slides.length - 1){
                currentSlide = 0;
            }
            //Add class active to current slide
            $slides[currentSlide].classList.add("active");
        }
    })
}

export default handleSlider;