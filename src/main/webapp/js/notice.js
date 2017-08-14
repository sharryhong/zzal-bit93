

var no;
$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
  if (result.data) {
    no = result.data.no
    $.ajax({
      url:'/zzal-bit93/notice/list.json',
      method:'GET',
      data: {'mno': no },
      success : function(data){console.log(data,"성공 객체임")}
    })
  }
})
