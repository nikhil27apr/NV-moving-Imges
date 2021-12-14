const slider = $("#gallery");
slider
  .slick({
    dots: false,
    autoplay: true,
    slidesToShow: 10,
    autoplaySpeed:0,
    speed: 500,
    cssEase: 'linear'

  });

slider.on('wheel', (function(e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));
