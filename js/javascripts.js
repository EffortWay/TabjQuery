$('.tab-menu ul li').click(function () {

	// $(this).closest('.tab-menu').siblings().find('.contain-items').show();
	$(this).toggleClass('active')
	$(this).siblings().removeClass('active')
	$(this).closest('.tab-menu').siblings().find('.contain-items').removeClass('active fade').hide();

	if( $(this).parent().children('li:nth-child(1)').hasClass('active') ){

		$(this).closest('.tab-menu').siblings().find('.contain-items:nth-child(1)').addClass('active').show();

	}

	else if( $(this).parent().children('li:nth-child(2)').hasClass('active') ){

		$(this).closest('.tab-menu').siblings().find('.contain-items:nth-child(2)').addClass('active').show();

	}

	else if( $(this).parent().children('li:nth-child(3)').hasClass('active') ) {

		$(this).closest('.tab-menu').siblings().find('.contain-items:nth-child(3)').addClass('active').show();

	}else {
		$(this).closest('.tab-menu').siblings().children('.contain-items').hide();
	}

})

