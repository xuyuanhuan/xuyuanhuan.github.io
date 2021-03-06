window.onload = function() {
	// 导航栏
	var $nav = $('.nav');
	var $nav_con = $('.nav_con');
	var nav_bol = false;
	$nav.click(function  () {
		nav_bol = !nav_bol;
		if (nav_bol) {
			$nav_con.css({display:'block'})
		}else{
			$nav_con.css({display:'none'})
		}
	})	

	// 搜索框
	var $search = $('.search');
	$search.focus(function () {
		$search.css({backgroundImage:'none'}).attr({placeholder:''})
	}).focusout(function  () {
		if ($search.val()=='') {
			$search.attr({placeholder:'搜索产品'})
			.css({backgroundImage:'url(images/index/fangda.jpg)'})
		};
	})

	//轮播图
	var swiperH = new Swiper('.swiper-container-h', {
	    pagination: '.swiper-pagination-h',
	    loop : true,
	    autoplay:3000,
	    autoplayDisableOnInteraction: false
	});

	// 下拉刷新
	var img_src = ['images/index/xiala1.jpg','images/index/xiala2.jpg','images/index/xiala3.jpg','images/index/xiala4.jpg','images/index/xiala1.jpg','images/index/xiala2.jpg','images/index/xiala3.jpg','images/index/xiala4.jpg'];
	var loading = document.getElementById('loading');
	var xiala = document.getElementById('xiala');
	var wrap = document.getElementById('wrap');
	var key = 0;
	var xiala_bol = true;
	var y = 0;
	var h = 0;
	content.addEventListener('touchstart',function(e){
		var e = e || window.event;
		var disy = e.touches[0].clientY;
		var sTop = document.body.scrollTop || document.documentElement.scrollTop;
		var wrapH = wrap.offsetHeight;
		var wH = document.documentElement.clientHeight;
		h = wH+sTop-wrapH;
		content.addEventListener('touchmove',function (e) {
			var e = e || window.event;
			y = disy - e.touches[0].clientY;
			// loading.style.display = 'block';
		},false)
	},false)
	document.addEventListener('touchend',function(e) {
		if (y>30 && xiala_bol && h>-20) {
			xiala_bol = false;
			for (var i = 0; i < 2; i++) {
				var li = document.createElement('li');
				li.innerHTML = '<img src="'+img_src[key]+'" alt=""><span>智能止鼾仪</span>';
				xiala.appendChild(li);
				// loading.style.display = 'none';
				key++;
			};
		};
		xiala_bol = true;
		if (key>7) {
			// loading.style.display = 'none';
			xiala_bol = false;
		};
	},false);
}