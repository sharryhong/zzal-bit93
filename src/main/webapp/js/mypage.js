$('#mypage-header')


$.getJSON('mypage-list.json',function(result){
  console.log(result)
  let templateFn = Handlebars.compile($('#mypageheader-template').text())
  let generatedHTML = templateFn(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
  console.log(generatedHTML)
  $('#mypage-header').text('') // tbody의 기존 tr 태그들을 지우고
  $('#mypage-header').html(generatedHTML) // 새 tr 태그들로 설정한다.

  templateFn = Handlebars.compile($('#mypagemid-template').text())
  generatedHTML = templateFn(result.data)
  $('#mypage-mid').text('')
  $('#mypage-mid').html(generatedHTML)

  templateFn = Handlebars.compile($('#mypagebot-template').text())
  generatedHTML = templateFn(result.data)
  $('#mypage-bot').text('')
  $('#mypage-bot').html(generatedHTML)
})
