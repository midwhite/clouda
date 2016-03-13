$(function(){
  $('header li:not(:last-child)').click(function(){
    name = $(this).attr('class');
    position = $('section.'+name).offset().top;
    $('html, body').animate({
      scrollTop: position
    }, 1000);
  });

  $('header .apply').click(function(){
    location.href = "https://docs.google.com/forms/d/1c_JFipOlrgoLr641PkUhajknDoxMh54oFcWk_PO7UbM/viewform";
  });

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

if(window.addEventListener) {
  window.addEventListener( "load" , shareButtonReadSyncer, false );
}else{
  window.attachEvent( "onload", shareButtonReadSyncer );
}

/* シェアボタンを読み込む関数 */
function shareButtonReadSyncer(){

// Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

}