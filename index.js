let images = [
  {
  url: "./images/Rostov-on-Don, Admiral.jpg",
  link: "Rostov-on-Don, Admiral"
},
{
  url: "./images/slyder-2.jpg",
  link: "Sochi Thieves"
},
{
  url: "./images/slyder-3.jpg",
  link: "Rostov-on-Don Patriotic" 
}];

function initSlider(options) {
  if (!images || !images.length) return;
  
  options = options || {
      links: true,
      dots: true,
  };

  let sliderImages = document.querySelector(".slider__images");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots");
  let sliderLinks = document.querySelector(".project-item");

  initImages();
  initArrows();

if (options.dots) {
  initDots();
}

if (options.links) {
  initLinks();
}

function initImages() {
  images.forEach((image, index) => {
    let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
    sliderImages.innerHTML += imageDiv;
  });
}

function initArrows() {
  sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
    arrow.addEventListener("click", function(e) {
      e.preventDefault();
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber;
      if (arrow.classList.contains("left")) {
        nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
      } else {
        nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    });
  });
}

function initDots() {
  images.forEach((image, index) => {
    let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
    sliderDots.innerHTML += dot;
  });
  sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
    dot.addEventListener("click", function() {
      moveSlider(this.dataset.index);
    })
  })
}

function moveSlider(num) {
  sliderImages.querySelector(".active").classList.remove("active");
  sliderImages.querySelector(".n" + num).classList.add("active");
  if (options.dots) {
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
  }
  if (options.links) {
    sliderLinks.querySelector(".active").classList.remove("active");
    sliderLinks.querySelector(".n" + num).classList.add("active");
  }
}

  function initLinks() {
    images.forEach((image, index) => {
      let linkDiv = `<li class="slider-nav_li"><a href="#" class="slider-nav_link n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].link}</a></li>`
      sliderLinks.innerHTML += linkDiv;
      });
    sliderLinks.querySelectorAll('.slider-nav_link').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      moveSlider(this.dataset.index);
      })
    })
  }
}

let sliderOptions = {
dots: true,
links: true,
};

document.addEventListener("DOMContentLoaded", function() {
initSlider(sliderOptions);
});




