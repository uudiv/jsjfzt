$(function () {
	$('.tpxw .top ul li').on('mouseover', function () {
		$(this).addClass("now").siblings().removeClass("now");
		$('.tpxw .top > a').attr('href', $(this).children().attr('href'))
		$('.tpxw .bottom>div').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
	});
	$('.zxwj .top ul li').on('mouseover', function () {
		$(this).addClass("now").siblings().removeClass("now");
		$('.zxwj .top > a').attr('href', $(this).children().attr('href'))
		$('.zxwj .bottom>div').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
	});
})