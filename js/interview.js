var db = [
  {id: '001', title: '投票は本当に民主的か？', univ: '早稲田大学 政治経済学部', cat: 'politics economics philosophy'},
  {id: '002', title: '日本は美しい国か？', univ: '昭和女子大学 人間文化学部', cat: 'literature education linguistics'},
  {id: '003', title: '歴史オタクから国際金融論へ', univ: '早稲田大学 社会科学部', cat: 'education history economics'},
  {id: '004', title: 'それは周囲ではなく自分がやりたいことなのか。', univ: 'Trent University International Development / Media Studies', cat: 'sociology international'}
];


$(function(){
  var html = ''
  for(var i = 0; i < db.length; i++){
    html += '<li class="'+db[i].cat+'">'
    html += '  <a href="interview/'+db[i].id+'.html" title="">'
    html += '    <img src="interview/img/'+db[i].id+'i.jpg" alt="'+db[i].title+'">'
    html += '    <h2>'+db[i].title+'</h2>'
    html += '    <p>'+db[i].univ+'</p>'
    html += '  </a>'
    html += '</li>'
  }
  $('.top-interview .interviews-list').append(html);

  $('.top-interview .categories li').click(function(){
    var cat = $(this).attr('class');
    if (cat == 'all'){
      $('.top-interview .interviews-list').html(html);
    } else {
      // フィルタリングして表示
      var filteredTable = db.filter(function(item){
        if((item.cat).indexOf(cat) >= 0){return true;}
      });
      // フィルタリング後のDOMを初期化
      var filteredList = ''
      // フィルタリング後のDOMを生成
      for(var i = 0; i < filteredTable.length; i++){
        filteredList += '<li class="'+filteredTable[i].cat+'">'
        filteredList += '  <a href="interview/'+filteredTable[i].id+'.html" title="">'
        filteredList += '    <img src="interview/img/'+filteredTable[i].id+'i.jpg" alt="'+filteredTable[i].title+'">'
        filteredList += '    <h2>'+filteredTable[i].title+'</h2>'
        filteredList += '    <p>'+filteredTable[i].univ+'</p>'
        filteredList += '  </a>'
        filteredList += '</li>'
      }
      // フィルタリング後のDOMを表示
      $('.top-interview .interviews-list').html(filteredList);
    }
  });
});

