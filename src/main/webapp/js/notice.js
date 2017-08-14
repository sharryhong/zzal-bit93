

var no;
$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
  if (result.data) {
    no = result.data.no
    $.ajax({
      url:'/zzal-bit93/notice/list.json',
      method:'GET',
      data: {'mno': no },
      success : function(data){console.log(data,"우앙 왔당!")
      SingenerateHandlebars(data, $('#notice-template'), $('#notice-target'))
      function SingenerateHandlebars(result, el, target) {
      //	console.log('generateHandlebars()')
          templateFn = Handlebars.compile(el.text())

          Handlebars.registerHelper('isVowel', function(options) {

              var regexp = this.Notype;

              //
              // switch (regexp) {
              //   case 'lik':return options.fn(this);
              //   case 'reply':return options.fn(this);
              //   case 'subs':return options.fn(this);
              //   default: return "<h1>알림이 없습니다.</h1>"
              // }

                // if (regexp.test(this.name))
                if (regexp=='lik'){
                  console.log(this)
                  return options.fn(this);
                } else if (regexp=='reply'){
                  console.log(this)
                  return options.fn(this);
                }else {
                  console.log(this)
                  return options.inverse(this);
                }
          });


          generatedHTML = templateFn(result.data)
          target.text('')
          target.html(generatedHTML)
      }



      }
    })


  }//if

  $.ajax({
    url:'/zzal-bit93/notice/count.json',
    method:'GET',
    data: {'mno': no },
    success : function(data){console.log(data,"우앙 왔당!")}
  })
})
