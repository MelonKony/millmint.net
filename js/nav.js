var $dot = $('.dot');

$('#page-nav>ul>li').on('mouseover', function(){
  $dot.css({
    left: $(this).offset().left
    - $(this).parent().offset().left
    + $(this).width() / 10 - 20
  });
});

$('#page-nav').on('mouseout', function(){
  $('.dot').css({left: 185});
});
