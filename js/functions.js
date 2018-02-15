$(window).scroll(function(){

  var windowScroll = $(this).scrollTop();

  console.log(windowScroll);
  var logo = $('.logo');
  var foreCoffee = $('.fore-coffee');

  $(logo).css({
    'transform':'translate(0px, '+ windowScroll/1 +'%)'
    });

  $(foreCoffee).css({
    'transform':'translate(0px, '+ windowScroll/6 +'%)'
  });

  if(windowScroll > $('.coffee-gallery').offset().top - ($(window).height() / 1.5)){
    $('.coffee-gallery figure img').each(function(i){
      setTimeout(function(){
        $('.coffee-gallery figure img').eq(i).addClass('is-showing');
      }, 150 * (i + 1));
    });
  }

});
