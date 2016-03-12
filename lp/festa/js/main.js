$(function(){
  // Headerをクリックすると移動
  $('header li').click(function(){
    var name = $(this).attr('class');
    var position = $('section.'+name).offset().top
    $('html, body').animate({
      scrollTop: position
    });
  });

  // .applyをクリックすると移動
  $('.destination .apply').click(function(){
    var position = $('section.apply').offset().top
    $('html, body').animate({
      scrollTop: position
    });
  });

  // Scheduleをクリックするとスライド
  $('.schedule li').click(function(){
    var name = $(this).attr('class');
    $('.schedule div:not(.'+name+')').slideUp();
    $('.schedule div.'+name).slideDown();
  });
});