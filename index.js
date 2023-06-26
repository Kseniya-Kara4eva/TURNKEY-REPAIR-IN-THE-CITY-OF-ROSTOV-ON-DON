let images = [
    {
        city_selected: 'Rostov-on-Don, Admiral',
        city_text: 'Rostov-on-Don, LCD admiral',
        apartment_area: '81 m2',
        repair_time: '3.5 months',
        repair_cost: 'Upon request',
        url: './images/Rostov-on-Don, Admiral.png'
    },
    {
        city_selected: 'Sochi Thieves',
        city_text: 'Sochi Thieves',
        partment_area: '105 m2',
        repair_time: '4 months',
        repair_cost: 'Upon request',
        url: './images/slyder-2.jpg'
    },
    {
        city_selected: 'Rostov-on-Don Patriotic',
        city_text: 'Rostov-on-Don Patriotic',
        partment_area: '93 m2',
        repair_time: '3 months',
        repair_cost: 'Upon request',
        url: './images/slyder-3.jpg'
    }];

function initSlider(options) {
    if (!images || !images.length) return;

    options = options || {
        titles: false,
        dots: true,
        autoplay: false
      };
  
    let city_selected  = document.querySelector(".project-item");
    let city_text = document.querySelector(".description-item_content");
    let apartment_area = document.querySelector(".apartment_area");
    let repair_time = document.querySelector(".repair_time");
    let repair_cost = document.querySelector(".repair_cost");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");

initImages();
initArrows();
    if (options.dots) {
    initDots();
    }
  
    if (options.titles) {
    initTitles();
    }
    function initImages() {
        images.forEach((image, index) => {
          let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
          sliderImages.innerHTML += imageDiv;
        });
      }
      
      function initArrows() {
        sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
          arrow.addEventListener("click", function() {
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
        if (options.titles) changeTitle(num);
      }
      
      function initTitles() {
        let titleDiv = `<div class="slider__images-title">${images[0].title}</div>`;
        sliderImages.innerHTML += cropTitle(titleDiv, 50);
      }
      
          
      function cropTitle(title, size) {
        if (title.length <= size) {
          return title;
        } else {
          return title.substr(0, size) + "...";
        }
      }      
      }
    
    let sliderOptions = {
      dots: true,
      titles: true,
    };
    
    document.addEventListener("DOMContentLoaded", function() {
      initSlider(sliderOptions);
    });
  




