$(function(){
  $('header li').click(function(){
    name = $(this).attr('class');
    if (name == 'apply'){
      location.href = "https://docs.google.com/forms/d/1c_JFipOlrgoLr641PkUhajknDoxMh54oFcWk_PO7UbM/viewform";
    } else if(name == 'home'){
      location.href = "http://www.cloud-academy.org";
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
    literature: {
      theme: 'テキスト解釈について',
      detail: 'みなさん文学はお好きですか？でもそもそも文学ってなんなのでしょう、私たちにとって必要なものなのでしょうか。一緒に考えていただけたら嬉しいです。',
      profile: '早稲田大学文学部3年、国文学専攻です。ゆるゆると文学部で勉強しています。文学ってなんなのか、わからないままはや幾年。'
    },
    history: {
      theme: '歴史に偉人は必要か？？',
      detail: '歴史を教えてると「好きな偉人は誰ですか？」とよく聞かれます。でも本当に歴史に「偉人」は存在するのでしょうか？言い換えれば、歴史というのは、人間が動かすことなどできるのでしょうか？今回は歴史の長期的動向に着目したフェルナン・ブローデルやジャレド・ダイアモンド、ダロン・アセモグルなどの歴史学者の主張を見ながら「歴史を学ぶとは」について考えていきます。',
      profile: '早稲田大学社会科学部4年。国際金融論を専攻しているはずが、一番学んだのは歴史学、あげくに卒論は教育社会学という謎の変遷を辿る。もう就活の学年という噂だが、塾と出版社のバイトに勤しみ、就活している気配が感じられない。'
    },
    economics: {
      theme: '「花見酒」と経済学',
      detail: '「花見酒」という落語の小噺を起点に、貨幣が引き起こす不思議な経済現象について解説します。経済学を勉強すると、個人の収入と支出というミクロな視点と経済全体のマクロな視点では、見える世界が全く異なります。その一端でもお見せできますよう頑張ります。',
      profile: '慶應義塾大学商学部。労働経済学を専攻する他、教育社会学や科学哲学も得意。「働きたくないでござる」と願い続けた結果、人類が労働から解放されるための経済システムを実現する方法について研究を始める。'
    },
    education: {
      theme: '教育政策の意思決定者は誰か',
      detail: '「教育」のステークホルダーは多い。行政、経済界、地方自治体、学校、子供、保護者等、それぞれがそれぞれの立場において教育に対する考えを有している。それでは、昨今行われている教育政策は一体誰の意思決定によるものなのだろうか。具体的な政策を踏まえながら、教育政策の意思決定プロセスを追究していく。',
      profile: '大阪市立大学法学部卒、文部科学省職員。学制改革(小中一貫教育)や中学校夜間学級、無戸籍児童生徒への対応等、義務教育制度に関する業務に従事している。'
    },
    medicine: {
      theme: '訪問看護について',
      detail: '高齢化する社会において、医療分野に課題は山積しています。今回は「医療×ビジネス」という視点から、医療現場の話も交えつつ課題の理解のポイントをお話しします。',
      profile: '明治薬科大学3年。医療ビジネスコンテスト<a href="https://www.facebook.com/medicalfuturefes" target="_blank">medical future fes2016</a>の会計役を務めています。'
    },
    biology: {
      theme: 'マウスの遺伝子発現制御',
      detail: '生命の設計図とも言われるDNAですが、ヒトのDNA領域のうち、直接機能分子を決めている領域はわずか2%ほどであるということはご存知でしょうか？その他のDNA領域は何をしているのでしょう？ 疾患研究などにも絡め、初心者の方にもわかりやすく解説します。',
      profile: 'はじめまして。東京医科歯科大学修士１年の岡安春佳と申します。現在は国立成育医療研究センターでマウスの性分化の研究をしています！マウスかわいいですもぐもぐ（違'
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