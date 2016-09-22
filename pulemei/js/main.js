window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();
var wH = document.documentElement.offsetHeight;
var wW = document.documentElement.offsetWidth;
var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d");
	
var page = $(".page");
canvas.width = wW;
canvas.height = wH;

var id = 0;
var norepeat = true;
var isClick = false;
var hubble = new Hubble();
//获取链接参数
var tiao = GetQueryString("z")*1;
function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return 0;
}
switch(tiao){
    case 1:
    	id = 11;
    	isClick = true;
		$("#array").show();
    	change();
        break;
}



function change(){
	if(id>page.length-1){
		id=0;
	}else if(id <0){
		id=page.length-1;
	}
	page.removeClass("active");
	page.eq(id).addClass("active");
	swiper();
	setAni(id);
}

function setAni(id){
	var ani = page.eq(id).find(".ani");
	for (var i=0;i<ani.length;i++) {
		ani.eq(i).addClass("animated").css({
			"-webkit-animation-name":ani.eq(i).attr("ani-name"),
			"-webkit-animation-delay":ani.eq(i).attr("ani-delay")
		});
	}
	
}

var l1 ,l2;
function swiper(){
	switch(id){
		case 5:
				var layer1 = $(".sct .layer");

				l1 = new Blink(layer1);
				l1.player();
				break;
		case 6:
				var layer2 = $(".mct .layer");
				l2 = new Blink(layer2);
				l2.player();
				l1.stops();
				break;
		case 8:
				var p10img = $(".p10-img");
				frameFn("p10",5,p10img,90,".png",function(){});
				l2.stops();
				break;
		case 9:
				var p9img = $(".p9-3");
				frameFn("p9",3,p9img,100,".png",function(){});
				break;
	}
}
var moveY = 0;
var flip = $(".flip");

document.body.addEventListener("touchstart",function(e){
	if(!isClick) {
		return false;
	}
	var disY = e.touches[0].pageY;
	this.addEventListener("touchmove",function(e){
		moveY = e.touches[0].pageY - disY;
		e.preventDefault();
	});
});
document.addEventListener("touchend",function(e){
	if(moveY <= -50){
		if (hubble.ifStop) {
			id ++;
			change();
		}
	}else if(moveY >= 50){
		if (hubble.ifStop) {
			id --;
			change();
		}
	}
	moveY = 0;
});