 $(window).scroll(function(){
     $(".banner").css("opacity", 1 - $(window).scrollTop() / 250);
  });
						//OUTRA FORMA DE ESCREVER 
						// $(window).scroll(function(){
						//     var scrollVar = $(window).scrollTop();
						//     $('.banner').css("opacity", 1 - scrollVar/300);
						// })