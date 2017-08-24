(function($){
	
	
	
	
	var no;
	$.getJSON('/zzal-bit93/auth/userinfo.json', function(result) {
		if (result.data) {
			no = result.data.no
			$.ajax({
				url:'/zzal-bit93/notice/list.json',
				method:'GET',
				data: {'mno': no },
				success : function(data){
					console.log(data,"우앙 왔당!")
					
					console.log(data.data.list.length)
					SingenerateHandlebars(data, $('#notice-template'), $('#notice-target'))
					
					
					
					
					function SingenerateHandlebars(result, el, target) {
						//	console.log('generateHandlebars()')
						templateFn = Handlebars.compile(el.text())

						Handlebars.registerHelper('isVowel', function(options) {
							let regexp = this.Notype;
							console.log(this)
							//
							switch (regexp) {
							case 'lik':return new Handlebars.SafeString("<span class='bold'>"+this.who_nick
									+"</span>님이 <span class='bold width-mine'>"+this.zzal_title
									+"</span> 을(를) 좋아합니다.");
							case 'reply':return new Handlebars.SafeString("<span class='bold'>"
									+this.who_nick+"</span>님이 <span class='bold width-mine'>"
									+this.zzal_title+"</span class='bold'>에 <span class='bold'>"
									+this.reply_con+"</span>댓글을 달았습니다.");
							case 'subs':return new Handlebars.SafeString("<span class='bold'>"
									+this.who_nick+"</span>님이 <span class='bold width-mine'>"
									+this.colct_title+"</span>콜렉션을 구독 하였습니다.");
							default: return new Handlebars.SafeString("<h1>알림이 없습니다.</h1>")
							}
						});
						Handlebars.registerHelper('isZzalNo', function(options) {
							
							let regexp = this.Notype;
							console.log(this)
							//
							if(regexp=='subs'){
								return new Handlebars.SafeString(
										"<div class='notices clearfix selection' data-locano-cono="+this.conono +">")
							}else{
								return new Handlebars.SafeString(
										"<div class='notices clearfix selection' data-locano-zzno="+this.zzalNono +">")
								
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
	
	
	// 삭제 버튼 
	$(document).on('ready',function(){
		$(this).on('click','.right .nodel',function(e){
			e.stopPropagation();
			let nono = $(this).attr("data-nono")
			$(this).closest('.notices').css('display','none')
			if($(this).hasClass('nodel')){
				
			}
			
			$.ajax({
			url:'/zzal-bit93/notice/delete.json',
			method: 'POST',
			data: {'nono':nono  },
			success : function(data){
//				console.log(data,"우앙 왔당!")				
			}
			
		    })
//		    console.log(this,"up")
		    	
		})
		
		
		
		$(this).on('click','.notices.selection',function(e){
			e.preventDefault()
				if($(this).attr('data-locano-cono')){
					location.href='collectdetail.html?no='+$(this).attr('data-locano-cono')
					
				}else{
					location.href='detailpage.html?='+$(this).attr('data-locano-zzno')
					
				}
//					
//			console.log(this,"down")
		})
		
	})
	
	
	
	
	
	
	


})(jQuery);