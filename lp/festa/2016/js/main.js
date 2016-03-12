$(function(){
  $('.subject li').click(function(){
    var name = $(this).attr('class');
    $('.subject div.description:not(.'+name+')').slideUp();
    $('.subject div.description.'+name).slideDown();
    $('.subject li').css(
      'background','#FFF'
    );
    $(this).css(
      'background','rgba(0,0,0,.15)'
    );
  });

  $('.subject .next').click(function(){
    $(this).parent('div').slideUp();
    $(this).parent('div').next('div').slideDown();
    $('.subject li').css(
      'background','#FFF'
    );
    var name = $(this).attr('id');
    $('.subject li.'+name).css(
      'background','rgba(0,0,0,.15)'
    );
  });

  //nextSection
  $('.nextSection').click(function(){
    var position = $(this).parents('section').next('section').offset().top;
    console.log(position);
    $('html, body').animate({
      'scrollTop': position
    }, 1000);
  });
});