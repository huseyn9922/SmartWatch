$('.slider__carousel').slick({
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    slidesToShow: 1,
    adaptiveHeight: true
  });