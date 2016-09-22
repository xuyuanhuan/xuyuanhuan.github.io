function frameFn(names,len,obj,speed,hz,callback){
	var callback = callback || null;
	var a = 1;
	var f = setInterval(function(){
		obj.attr("src","img/"+names+"-"+a+hz);
		a++;
		if(a>len){
			clearInterval(f);
			return callback();
		}
	},speed);
}
$(function(){
	
	var ani18 = $(".ani18"),
		switcher = $(".ball-scale-multiple"),
		isSwitch = $(".switch");
	
	var fly = $(".fly"),
		xsp = $(".xsp"),
		f_title = $(".f-title");
		
	var aniwater = $('.aniwater');
	
	
	
	switcher.on("touchstart",function(){
		isClick = true;
		$("#array").show();
		$(this).hide();
		isSwitch.attr("src","img/open.png");
		frameFn("w",35,aniwater,30,".png",function(){
			isSwitch.fadeOut();
			aniwater.fadeOut();
			animation18();
		});
	});
	//18
	function animation18(){
		ani18.show();
		$(".sp").show();
		frameFn("18",15,ani18,50,".png",function(){
			animationFly();
			f_title.fadeIn();
		});
	}
	//翅膀
	
	function animationFly(){
		frameFn("fly",3,fly,50,".png",function(){
			xsp.fadeIn();
		});
	}
	
	//p10
	var p10img = $(".p10-img"),
		p9img = $(".p9-3");
	p10img.on("click",function(){
		frameFn("p10",5,p10img,90,".png",function(){});
	});
	p9img.on("click",function(){
		frameFn("p9",3,p9img,100,".png",function(){});
	});
	
});