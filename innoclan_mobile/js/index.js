// 导航栏
var $nav = $('.nav');
var $nav_con = $('.nav_con');
var nav_bol = false;
$nav.click(function  () {
	nav_bol = !nav_bol;
	if (nav_bol) {
		$nav_con.css({display:'block'});
	}else{
		$nav_con.css({display:'none'});
	}
})

// 搜索框
var $search = $('.search');
$search.focus(function () {
	$search.css({backgroundImage:'none'}).attr({placeholder:''})
}).focusout(function  () {
	if ($search.val()=='') {
		$search.attr({placeholder:'搜索产品'}).css({backgroundImage:'url(images/index/fangda.jpg)'})
	};
})


//轮播图
var $tab = $('.tab');
var $tab_img = $tab.find('.tab_img');
var $dian = $tab.find('div');
var $fenye = $dian.find('span');
var len = $fenye.length;
var before = 0;
var bol = false;
var move_bol = false;
var hua_bol = true;
function show(m) {
	bol = true;
	var a = 0;
	for (var i = 0; i < $tab_img.length; i++) {
		if (before!=i) {
			$tab_img.eq(i).css({opacity:0});
		}
	}
	$tab_img.css({zIndex:0});
	$fenye.css({background:'#fff'});
	$tab_img.eq(m).css({zIndex:1});
	$fenye.eq(m).css({background:'yellow'});
	step()
	function  step() {
		a++;
		if (a>=15) {
			cancelAnimationFrame(id);
			bol = false;
			hua_bol = true;
		}
		$tab_img.eq(m).css({opacity:a/15});
		d = requestAnimationFrame(step);
	}
}
var n = 0;
$tab.get(0).addEventListener("touchstart",function(e) {
	var e = e || window.event;
	move_bol = true;
	var disx = e.touches[0].clientX;
	document.addEventListener("touchmove",function(e) {
		var e = e || window.event;
		var x = disx - e.touches[0].clientX;
		var ratio = x/(0.6*$tab.width());
		if (ratio<-1&& hua_bol) {
			hua_bol = false;
			n--;
			if (n<0) {n=len-1}
			show(n);
			before = n;
		}
		if (ratio>1&& hua_bol) {
			hua_bol =false;
			n++;
			if (n>len-1) {n=0}
			show(n);
			before = n;
		}
	},false)
},false)
setInterval(function() {
	if (move_bol) {return}
	n++;
	if (n>len-1) {n=0};
	show(n);
	before = n;
},3000);
var img_src = ['images/index/xiala1.jpg','images/index/xiala2.jpg','images/index/xiala3.jpg','images/index/xiala4.jpg','images/index/xiala1.jpg','images/index/xiala2.jpg','images/index/xiala3.jpg','images/index/xiala4.jpg'];
var loading = document.getElementById('loading');
var xiala = document.getElementById('xiala');
var key = 0;
var xiala_bol = true;
loading.addEventListener('touchstart',function(e){
	var e = e || window.event;
	var disy = e.touches[0].clientY;
	loading.addEventListener('touchmove',function (e) {
		var e = e || window.event;
		var y = disy - e.touches[0].clientY;
		if (y>-30 && xiala_bol) {
			xiala_bol = false;
			for (var i = 0; i < 2; i++) {
				var li = document.createElement('li');
				li.innerHTML = '<img src="'+img_src[key]+'" alt=""><span>智能止鼾仪</span>';
				xiala.appendChild(li);
				key++;
				if (key>7) {
					loading.style.display = 'none';
					xiala_bol = false;
				};
			};
		};
	},false)
},false)
document.addEventListener('touchend',function(e) {
	xiala_bol = true;
	if (key>7) {
		loading.style.display = 'none';
		xiala_bol = false;
	};
},false);
