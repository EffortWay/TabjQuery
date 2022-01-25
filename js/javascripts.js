$('.tab-menu ul li').click(function(){

	var act = $(this).data('link');
	$(this).addClass('active').siblings().removeClass('active')
	$('.' + act).show().siblings().hide()
})



