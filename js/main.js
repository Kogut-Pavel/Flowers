$(document).ready(function () {
  const flowersSlider = new Swiper('.flowers-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 6,
  
    // Подключаем стрелки
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  
    // Настройки адаптивной версии
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 4,     
      },
      // when window width is >= 760px
      768: {
        slidesPerView: 5,
      },  
      // when widnow width is >= 1024px
      1024: {
        slidesPerView: 6,
      }
    }
  });
  
  const reviewsSlider = new Swiper('.reviews-slider', {
    // Параметры слайдера
    loop: true,
    slidesPerView: 1,
  
    // Подключаем стрелки
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  });
  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://flowersufa.ru/assets/cache_image/products/699/img-20190813-143548_650x650_e9c.jpg',
        opts : {
          caption : 'First caption',
          thumb   : 'https://flowersufa.ru/assets/cache_image/products/699/img-20190813-143548_650x650_e9c.jpg'
        }
      },
      {
        src  : 'https://www.cvetyopt.ru/image/cache/data/14.04.16-flowers-012-800x800.jpg',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://www.cvetyopt.ru/image/cache/data/14.04.16-flowers-012-800x800.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

});
 


