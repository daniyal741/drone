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
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    arrows:true,
  });
  $('.view-thumbnails').slick({
    dots: false,
    infinite: false,
    speed: 500,
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

  
//   $('.view-selected-img').on('afterChange', function(event, slick, currentSlide) {
//   $('.view-thumbnails .slick-slider').slick('slickGoTo', currentSlide);
//   $('.view-thumbnails .slick-slider').find('.img-active').removeClass('img-active');
//   $('.view-thumbnails .slick-slider').find('.img-active[data-slick-index="' + currentSlide + '"]').addClass('img-active');
// });

  // $('.view-thumbnails').on('click', '.img-slide', function(event) {
  //   event.preventDefault();
  //   // var goToSingleSlide = $(this).data('img-slide');
  //   // console.log(goToSingleSlide);
  //   $('.view-selected-img').slick('slickGoTo', goToSingleSlide);
  // });


});

