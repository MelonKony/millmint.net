var $dot = $('.dot');

$('ul.breadcrumb').on('mouseover', function(){
  $dot.css({
    left: $(this).offset().left
    - $(this).parent().offset().left
    + $(this).width() / 5 - 10
  });
});

$('ul.breadcrumb').on('mouseout', function(){
  $('.dot').css({left: 185});
});
