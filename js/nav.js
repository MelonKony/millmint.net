var $dot = $('.dot');

$('ul.breadcrumb li').on('mouseover', function(){
  $dot.css({
    left: $(this).offset().left
    - $(this).parent().offset().left
    + $(this).width() / 5 - 10
  });
});

$('ul.breadcrumb li').on('mouseout', function(){
  $('.dot').css({left: 185});
});
