function header(rootPath){
  var html = ''

  html += '<header>'
  html +=   '<div class="title">'
  html +=     '<p><a href="'+rootPath+'">Cloud.A</a></p>'
  html +=     '<p><a href="'+rootPath+'">For Learningful Life</a></p>'
  html +=   '</div>'
  html +=   '<div id="menu-btn">MENU</div>'
  html +=   '<ul class="menu">'
  html +=     '<li><a href="'+rootPath+'">TOP</a></li>'
  html +=     '<li><a href="'+rootPath+'vision.html">設立目的</a></li>'
  html +=     '<li><a href="'+rootPath+'about.html">団体情報</a></li>'
  html +=     '<li><a href="'+rootPath+'report.html">活動報告</a></li>'
  html +=     '<li><a href="'+rootPath+'interview.html">メンバー</a></li>'
  html +=     '<li><a href="'+rootPath+'contact.html">問い合わせ</a></li>'
  html +=     '<li><a href="http://twitter.com/cloudacd/" target="_blank">Twitter</a></li>'
  html +=     '<li><a href="http://www.facebook.com/Cloudaworkshop/" target="_blank">Facebook</a></li>'
  html +=   '</ul>'
  html += '</header>'

  document.write(html);
}


$(function(){
  var footer = ''
  footer += '<footer>'
  footer +=   '<p>Copyright (c) 2016 by Cloud.A</p>'
  footer += '</footer>'

  $('body').append(footer);
});