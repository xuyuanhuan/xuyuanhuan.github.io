window.onload = function() {
	//导航栏
	var $nav = $(".nav");
	var $nav_sel = $nav.find("span");
	var $nav_con = $(".con");
	$nav_sel.click(function () {
		$nav_sel.removeClass('select');
		$(this).addClass('select');
		$nav_con.css({display:'none'});
		$nav_con.eq($(this).index('.nav>span')).css({display:'block'});
	})
}