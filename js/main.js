$(function(){
  $('.reviews__items').slick({
    dots: false,
    arrows: true,
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow"></button>',


    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="next arrow"></button>',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1
        }
      }
    ]

  });

  $('.header__burger, .header__item-link').on('click', function () {
    $('.header__burger,.header__menu, .header__item-link').toggleClass('active');
    
    $('body').toggleClass('lock');
  });
 
  $(".header__menu a, .logo__link, .header__btn").on("click", function (e) {

    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  });
 

});