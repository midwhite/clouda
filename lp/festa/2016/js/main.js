$(function(){
  $('header li').click(function(){
    name = $(this).attr('class');
    if (name == 'apply'){
      location.href = "https://docs.google.com/forms/d/1c_JFipOlrgoLr641PkUhajknDoxMh54oFcWk_PO7UbM/viewform";
    } else if(name == 'home'){
      location.href = "http://www.cloud-academy.org/mobile/";
    } else {
      position = $('section.'+name).offset().top;
      $('html, body').animate({
        scrollTop: position
      }, 1000);
    }
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

  // nextSection
  $('.nextSection').click(function(){
    var position = $(this).parents('section').next('section').offset().top;
    console.log(position);
    $('html, body').animate({
      'scrollTop': position
    }, 1000);
  });

  var db_presenters = {
    history: {
      theme: 'Coming Soon!',
      detail: 'Coming Soon!',
      profile: '早稲田大学社会科学科4年。専攻は金融論だが、歩く歴史辞書。また「知を探求する塾」の熱血講師という一面も持つ。'
    },
    economics: {
      theme: 'Coming Soon!',
      detail: 'Coming Soon!',
      profile: '慶應義塾大学商学部。労働経済学を専攻する他、教育社会学や科学哲学も得意。「働きたくないでござる」と願い続けた結果、人類が労働から解放されるための経済システムを実現する方法について研究を始める。'
    },
    education: {
      theme: 'Coming Soon!',
      detail: 'Coming Soon!',
      profile: '大阪市立大学法学部'
    },
    medicine: {
      theme: 'Coming Soon!',
      detail: 'Coming Soon!',
      profile: '明治薬科大学3年。医療ビジネスコンテスト<a href="https://www.facebook.com/medicalfuturefes" target="_blank">medical future fes2016</a>の会計役を務めています。'
    },
    biology: {
      theme: 'Coming Soon!',
      detail: 'Coming Soon!',
      profile: '北里大学大学院修士1年'
    },
    none: {
      theme: 'Coming Soon!',
      detail: 'Coming Soon!',
      profile: 'Coming Soon!'
    }
  };

  var pr_labels = ['theme', 'detail', 'profile'];

  // プレゼンター紹介のポップアップギミック
  $('.presenter li').click(function(){
    var name = $(this).attr('class');

    var subject = $(this).text();
    $('.presenter .field span').text(subject);

    for(var i = 0; i < pr_labels.length; i++){
      $('.presenter .field .'+pr_labels[i]).html(db_presenters[name][pr_labels[i]]);
    }

    $('.presenter .field').fadeIn();
    $('.presenter .field .presenter-info').slideDown();
  });

  $('.presenter .field').click(function(){
    $(this).fadeOut();
    $(this).children('.presenter-info').slideUp();
  });

  $('.presenter .field .presenter-info').click(function(e){
    e.stopPropagation();
  });

  $('.presenter .field .close-btn').click(function(){
    $('.presenter .field').fadeOut();
    $('.presenter .field .presenter-info').slideUp();
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