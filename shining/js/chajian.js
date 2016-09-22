$.fn.extend({
	fang:function(style) {//n：小图div的宽高，m：大图div的宽高，color：小图内部div的背景颜色
		var src = $(this).attr("maxsrc") || $(this).attr("src")
		var $min = $('<div class="min"><div></div></div>');
		var $max = $('<div class="max"><img src="'+src+'" alt=""></div>');
		var $parent = $(this).parent();
		var $fang = $('<div class="fang"></div>');
		nStyle = {
			width:400,
			color:'rgba(45,220,30,0.2)'
		}
		style = $.extend(nStyle,style)
		$fang.append($min).append($max);
		$min.append($(this));
		$parent.append($fang);
		$(this).css({
			width:"100%"
		})
		$fang.css({
			width:style.width,
			height:style.width,
			position:'relative'
		})
		$min.css({
			width:style.width,
			height:style.width,
			position:'absolute',
			border: '1px solid black'
		});
		$max.css({
			width:style.width,
			height:style.width,
			overflow:'hidden',
			border: '1px solid black',
			position:'absolute',
			left:"110%",
			top:0,
			display:'none'
		});
		$max.find('img').css({
			position:'absolute',
			width:'200%'
		})
		$min.find('div').css({
			width:style.width/2,
			height:style.width/2,
			background:style.color,
			position:'absolute',
			display:'none'
		})
		var $div = $min.find('div');
		var $img = $max.find('img');
		$min.hover(function() {
			$div.show();
			$max.show();
			var scale = $max.width()/$div.width();
			$(document).on('mousemove',function(e) {
				var e = e || window.event;
				var x = e.clientX-$min.offset().left -1-$div.width()/2;
				var y = e.clientY-$min.offset().top -1-$div.height()/2;
				if (x<0) {x = 0;}
				if (x>$min.width()-$div.width()) {x=$min.width()-$div.width();}
				if (y<0) {y = 0;}
				if (y>$min.height()-$div.height()) {y = $min.height()-$div.height();}
				$div.css({left:x,top:y})
				$img.css({left:-x*scale,top:-y*scale})
				})
		},function() {
			$div.hide();
			$max.hide();
		})
	},
	scrolltopTo:function(end,fn) {
		var start = $(window).scrollTop()
		var change = end-start;
		var t = 0;
		var endT = 30;
		var timer = setInterval(function () {
			t++;
			if (t>=endT) {
				clearInterval(timer);
				fn && fn();
			}
			var sTop = easeOut(t,start,change,endT);
			$(window).scrollTop(sTop)
		},30)	
	
		function easeOut(t,b,c,d){
			return c*((t=t/d-1)*t*t + 1) + b;
		}
	},
	mousewheel:function(cb) {
		if (navigator.userAgent.indexOf("Firefox")>-1) {
			$(this).get(0).addEventListener("DOMMouseScroll",fn);
		}else{
			$(this).get(0).onmousewheel = fn;
		}

		function fn(e) {
			var e = e || window.event;
			var down = true;
			if (e.detail) {				
				down=e.detail>0;
			}else {
				down=e.wheelDelta<0;
			}		
			cb.apply($(this).get(0),[e,down])
			if (e.preventDefault) {
				e.preventDefault();
			}
			return false;
		}
	},
	scrollstrip:function(style) {
		var txt = $(this).html();
		var $kuang = $(this);
		$(this).html('')
		var $content = $('<div></div>')
		var $scroll = $('<div class="scroll"><div></div></div>');
		var $strip = $scroll.find('div');
		$(this).append($content).append($scroll);
		$content.html(txt);
		$(this).css({
			position:'relative',
			overflow:'hidden'
		})
		$content.css({
			width:$(this).width()-style.width,
			position:'absolute'
		})
		$scroll.css({
			width:style.width,
			height:$(this).height(),
			background:'#ccc',
			position:'absolute',
			right:0,
			top:0
		})
		$strip.css({
			width:style.width-1,
			background:style.color,
			position:'absolute',
			right:0,
			borderRadius:style.width/2
		})
		var scale = $content.height()/$scroll.height();
		if (scale<1) {
			$scroll.css({display:"none"});
			$content.css({width:$(this).width()})
		}
		var h = $(this).height()/scale;
		if (h<30) {
			h = 30
		}
		$strip.css({height:h});
		$strip.mousedown(function (e) {
			var e = e || window.event;
			var disY = e.clientY - $(this).offset().top-1;		
			$(document).mousemove(function (e) {
				var e = e || window.event;
				var y = e.clientY - disY;
				moveCon(y)
			})		
			e.cancelBubble = true;
			return false;
		})
		$(document).mouseup(function () {
			$(document).off('mousemove',"");
		})
		$(this).mousewheel(function(e,down) {
			if (down) {
				var y = $strip.position().top+5;
				moveCon(y)
			}else{
				var y = $strip.position().top-5;
				moveCon(y)
			}
		})
		$(document).on('keydown',function (e) {
			var e = e || window.event;
			if (e.keyCode==38) {//上
			var y = $strip.position().top-5;
				moveCon(y)
			}
			if (e.keyCode==40) {//下
				var y = $strip.position().top+5;
				moveCon(y)
			}
		})
		$scroll.on('click',function (e) {
			var e = e || window.event;
			var y = e.clientY-$kuang.offset().top-5-$strip.height()/2;
			moveCon(y)
		})
		function moveCon(y) {
			if (y<0) {y=0}
			if (y>$scroll.height()-$strip.height()) {
				y = $scroll.height()-$strip.height();
			}
			$strip.css({top:y})
			var scrolls = $scroll.height()-$strip.height();
			var cons = $content.height()-$kuang.height();
			var scales = cons/scrolls;
			var t = y*scales;
			$content.css({top:-t})
		}
	}
})























