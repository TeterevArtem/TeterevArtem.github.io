$(document).ready(function(){
  var video = document.getElementById('video');

  $('.play__button').on('click', function(e){
    e.preventDefault();
      icon = $('.play__icon')
    if(video.paused){
      video.play();
      icon.css("background","url('../images/svg/sprite.svg#pause')")      
    }else{
      video.pause();
      icon.css("background", "url('../images/svg/sprite.svg#play')")
    }
  });


  //initialize swiper when document ready
  var mySwiper = new Swiper ('.flabEvent-js', {
    // Optional parameters
    loop: true,
    slidesPerView: 12,
    spaceBetween: 0,
    pagination:{el:".swiper-pagination",
      clickable: 0,
      dynamicBullets: 0},
    autoplay:{delay:2000},
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 0
      }
    }
  })
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    navigation: {
      nextEl: '.slider__link_next',
      prevEl: '.slider__link_prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      }
    }
  })

  var video = document.querySelector('video');

  const setVideoDimensions = () => {
    if (window.innerWidth / window.innerHeight > 16 / 9) {
      video.style.width = '100vw';
      video.style.height = 'calc(100vw * 9 / 16)';
    } else {
      video.style.width = 'calc(100vh * 16 / 9)';
      video.style.height = '100vh';
    }
  };

  window.onresize = setVideoDimensions;
  setVideoDimensions();

});
