const nextButton = document.querySelector(".product-images-slider .swiper-button-next");
const prevButton = document.querySelector(".product-images-slider .swiper-button-prev");
const totalSlides = document.querySelector(".product-images-slider .swiper-pagination-total");
const currentSlides = document.querySelector(".product-images-slider .swiper-pagination-current");
let imagesProduct = document.querySelectorAll('.product-images-slide');


let blockImagesLengthB = Array.from(imagesProduct).filter(img => {
    return window.getComputedStyle(img).display === 'block';
}).length;

setTimeout(function(){
    totalSlides.textContent = blockImagesLengthB;
},1000)


function handleSwiperButtonClick() {
    totalSlides.textContent = blockImagesLengthB;
    const currentSlider = currentSlides.textContent;
    console.log(currentSlider)
    if(currentSlider == '1'){
      prevButton.classList.add("disabled")
    }else{
      prevButton.classList.remove("disabled")
    }
    if(currentSlider == blockImagesLengthB){
        nextButton.classList.add("disabled")
      }else{
        nextButton.classList.remove("disabled")
      }
}

prevButton.addEventListener("click", handleSwiperButtonClick);
nextButton.addEventListener("click", handleSwiperButtonClick);