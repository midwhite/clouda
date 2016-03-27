var db = [
  {year: '2016', date: '3/27', cat: 'notice', comment: '公式サイトを全面リニューアル'},
  {year: '2016', date: '3/10', cat: 'open', num: 38, title: '学問フェスタ', url: 'lp/festa/2016/'},
  {year: '2015', date: '11/15', cat: 'report', num: 37},
  {year: '2015', date: '9/20', cat: 'report', num: 33},
  {year: '2015', date: '3/29', cat: 'notice', comment: '<a href="interview.html">参加者インタビュー</a>を更新しました'},
  {year: '2015', date: '3/25', cat: 'notice', comment: '<a href="interview.html">参加者インタビュー</a>を更新しました'},
  {year: '2015', date: '3/24', cat: 'notice', comment: '<a href="interview.html">参加者インタビュー</a>を更新しました'},
  {year: '2015', date: '3/16', cat: 'notice', comment: '公式サイトを公開'}
];

var html = ''

$(function(){
  for (var i=0; i<db.length; i++){
    html += '<tr class="'+db[i]['cat']+'">'
    html += '  <th>'
    html += '    <p>'+db[i]['year']+'</p>'
    html += '    <p>'+db[i]['date']+'</p>'
    html += '  </th>'
    html += '  <td>'
    if (db[i]['cat'] == 'report'){
      html += '    <p>Cloud.A Workshop #'+db[i]['num']+'</p>'
      html += '    <p><a href="report.html">開催レポート</a>を更新</p>'
    } else if(db[i]['cat'] == 'open'){
      html += '    <p>Cloud.A Workshop #'+db[i]['num']+'</p>'
      html += '    <p><a href="'+db[i]['url']+'">「'+db[i]['title']+'」</a></p>'
    } else if(db[i]['cat'] == 'notice'){
      html += '    <p>'+db[i]['comment']+'</p>'
    }
    html += '  </td>'
    html += '</tr>'
  }
  $('.top-index .history table').prepend(html);
});
