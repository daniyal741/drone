$(document).ready(function(){

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    arrows:true,
    
  });

  $('.models').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:false,
    arrows:true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    
  });

  $('.view-selected-img').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    arrows:true,
    asNavFor: '.view-thumbnails  div img',
  });
  $('.view-thumbnails .img-slide img').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:false,
    arrows:false,
    asNavFor: '.view-selected-img',
    focusOnSelect: true,


  });

  $('.view-thumbnails .img-slide').removeClass('img-active');
  $('.view-thumbnails .img-slide').first().addClass('img-active');

  $('.view-selected-img').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.view-thumbnails .img-slide').removeClass('img-active');
    $('.view-thumbnails .img-slide').eq(mySlideNumber).addClass('img-active');
  });

    

});

