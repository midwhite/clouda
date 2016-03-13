(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-53453489-3', 'auto');
ga('send', 'pageview');

$(function(){
  // メニューの高さをWindowの100%に
  var winHeight = $(window).height();
  $('header .menu').css({
    'height': winHeight
  })

  // メニューボタンを押すとメニューを表示
  $('#menu-btn').click(function(){
    $('header .menu').animate({
      'right': 0
    }, 300);
  });
  $('html').click(function(){
    $('header .menu').animate({
      'right': -150
    }, 300);
  });
  $('#menu-btn, header .menu').click(function(e){
    e.stopPropagation();
  });

  // 更新履歴の絞り込みボタン
  $('.top-index .history li').click(function(){
    var name = $(this).attr('class');
    if (name == 'all') {
      $('.history table tr').show();
    } else {
      $('.history table tr:not(.'+name+')').hide();
      $('.history table tr.'+name).show();
    }
  });
});