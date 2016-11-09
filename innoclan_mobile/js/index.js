<<<<<<< HEAD
//轮播图
var swiperH = new Swiper('.swiper-container-h', {
    pagination: '.swiper-pagination-h',
    loop : true,
    autoplay:3000,
    autoplayDisableOnInteraction: false
});

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
		.css({backgroundImage:'url(images/index/sousuo.png)'})
	};
})

// 下拉刷新
var xiala = $('.xiala')
var loading = document.getElementById('loading')
var img_src = ['images/index/xiala1.jpg','images/index/xiala2.jpg','images/index/xiala3.jpg','images/index/xiala4.jpg','images/index/xiala1.jpg','images/index/xiala2.jpg','images/index/xiala3.jpg','images/index/xiala4.jpg','images/index/xiala1.jpg','images/index/xiala2.jpg','images/index/xiala3.jpg','images/index/xiala4.jpg'];
var content = document.getElementById('content');
var wrapper = document.getElementById('wrapper');
var key = 2;
var xiala_bol = true;
var y = 0;
var h = 0;
var contentH = content.offsetHeight;
var contentT = content.offsetTop;
var wH = document.documentElement.clientHeight;
var sTop = document.body.scrollTop || document.documentElement.scrollTop;
wrapper.addEventListener('touchstart',function(e){
	contentH = content.offsetHeight;
	sTop = document.body.scrollTop || document.documentElement.scrollTop;
	var e = e || window.event;
	var disy = e.touches[0].clientY;
	h = contentH + contentT - sTop -wH;
	wrapper.addEventListener('touchmove',function (e) {
		if (key<11) {
			var e = e || window.event;
			y = disy - e.touches[0].clientY;
			content.style.height = contentH + y +'px';
		};
		if (y>h) {
			e.preventDefault()
		};
	},true)
},false)
wrapper.addEventListener('touchend',function(e) {
	content.style.height = 'auto';
	if (y>h-10 && xiala_bol && key<11) {
		loading.innerHTML = '<img src="images/index/loading.png" alt="">加载中...';
		xiala_bol = false;
		setTimeout(function  () {
			for (var i = 0; i < 2; i++) {
				xiala.append('<li><a href=""><img src="'+img_src[key]+'" alt=""><span>Doogee迷你投影仪</span></a></li>')
				key++;
			};
			if (key>10) {
				loading.style.display = 'none';
			}else {
				loading.innerHTML = '上拉加载更多';
				xiala_bol = true;
			};
		},500)
	}
=======
//轮播图
var swiperH = new Swiper('.swiper-container-h', {
    pagination: '.swiper-pagination-h',
    loop : true,
    autoplay:3000,
    autoplayDisableOnInteraction: false
});

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
		.css({backgroundImage:'url(images/index/sousuo.png)'})
	};
})

// 下拉刷新
var xiala = $('.xiala')
var loading = document.getElementById('loading')
var img_src = ['images/index/xiala1.jpg','images/index/xiala2.jpg','images/index/xiala3.jpg','images/index/xiala4.jpg','images/index/xiala1.jpg','images/index/xiala2.jpg','images/index/xiala3.jpg','images/index/xiala4.jpg','images/index/xiala1.jpg','images/index/xiala2.jpg','images/index/xiala3.jpg','images/index/xiala4.jpg'];
var content = document.getElementById('content');
var wrapper = document.getElementById('wrapper');
var key = 2;
var xiala_bol = true;
var y = 0;
var h = 0;
var contentH = content.offsetHeight;
var contentT = content.offsetTop;
var wH = document.documentElement.clientHeight;
var sTop = document.body.scrollTop || document.documentElement.scrollTop;
wrapper.addEventListener('touchstart',function(e){
	contentH = content.offsetHeight;
	sTop = document.body.scrollTop || document.documentElement.scrollTop;
	var e = e || window.event;
	var disy = e.touches[0].clientY;
	h = contentH + contentT - sTop -wH;
	wrapper.addEventListener('touchmove',function (e) {
		if (key<11) {
			var e = e || window.event;
			y = disy - e.touches[0].clientY;
			content.style.height = contentH + y +'px';
		};
		if (y>h) {
			e.preventDefault()
		};
	},true)
},false)
wrapper.addEventListener('touchend',function(e) {
	content.style.height = 'auto';
	if (y>h-10 && xiala_bol && key<11) {
		loading.innerHTML = '<img src="images/index/loading.png" alt="">加载中...';
		xiala_bol = false;
		setTimeout(function  () {
			for (var i = 0; i < 2; i++) {
				xiala.append('<li><a href=""><img src="'+img_src[key]+'" alt=""><span>Doogee迷你投影仪</span></a></li>')
				key++;
			};
			if (key>10) {
				loading.style.display = 'none';
			}else {
				loading.innerHTML = '上拉加载更多';
				xiala_bol = true;
			};
		},500)
	}
>>>>>>> origin/master
},false);