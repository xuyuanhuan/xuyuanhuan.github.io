$(function(){
	var cf_btn = $(".cf-btn"),
			cf_img = $(".cf-show img"),
			cf_s = $(".s");
	var p = $(".cfang>div");
	//music
	var audios = document.getElementById('bgmusic');
	$('html').one('touchstart',function(){
		audios.play();
	});
	//p7
	var p7Id = 0;
	var goupr1 = $(".group1"),
		group2 = $(".group2"),
		group3 = $(".group3"),
		logoshow = $(".logoshow"),
		p7com = $(".p7com");
		
	p7com.on("click",function(){
		p7Id ++;
		if(p7Id > 2){
			p7Id = 0;
			p7com.css("animation","none");
		}
		logoshow.children().hide();
		logoshow.children().eq(p7Id).show();
	})
	
	cf_btn.on("touchstart",function(){
		if($(this).parent().hasClass("isClick")){
			$(this).parent().removeClass("isClick");
		}else {
			p.removeClass("isClick");
			$(this).parent().addClass("isClick");
		}
	});
	//阻止冒泡
	$(".cf-show").eq(0).get(0).addEventListener("touchmove",function(e){
		e.stopPropagation();
	});
	$(".cf-show").eq(1).get(0).addEventListener("touchmove",function(e){
		e.stopPropagation();
	})
	//提交按钮
		var submitBtn = $(".submit"),
			layer1 = $(".submit_layer"),
			share = $(".share_btn"),
			layer2 = $(".share_layer");
		share.on("touchstart",function(){
			layer2.show();
			layer1.hide();
		});
//		layer2.on("touchstart",function(){
//			$(this).hide();
//		});
		//滑滑滑四个产品
		var arr = [
			{l:0,t:93,zi:4,o:1},
			{l:157,t:23,zi:3,o:0.4},
			{l:-4,t:5,zi:2,o:0.2},
			{l:-160,t:36,zi:3,o:0.4}
		];
		var p5img = $(".p5img"),
			p5box = $(".p5box"),
			click_tip = $(".click_tip");
		init();
		function init(){
			for (var i=0;i<p5img.length;i++) {
				p5img.eq(i).stop().animate({
					'left':arr[i].l,
					'top':arr[i].t,
					'z-index':arr[i].zi,
					'opacity':arr[i].o,
				},500);
			}
		}
		click_tip.get(0).addEventListener("touchstart",function(){
			click_tip.hide();
			changeLeft();
		})
		p5box.get(0).addEventListener("touchstart",function(){
			click_tip.hide();
			changeLeft();
		});
		function changeLeft(){
			arr.push(arr.shift());
			init();
		}
		
	//p10
	var way_move = $(".way_move"),
		waybg = $(".waybg");
	var wmoveY = 0;
	var mId = 0,currY = 0;
	waybg.get(0).addEventListener("touchstart",function(e){
		var disY = e.touches[0].pageY;
		this.addEventListener("touchmove",function(e){
			wmoveY = e.touches[0].pageY - disY;
			e.preventDefault();
			e.stopPropagation();
		})
	});
	//电话事件
	waybg.get(0).addEventListener("touchend",function(e){
		if(wmoveY < -20){
			if(mId>=2){
				return false;
			}
			mId ++;
			currY -= 56;
			way_move.children().removeClass("default");
			way_move.children().eq(mId+1).addClass("default");
			way_move.css("-webkit-transform","translateY("+currY+"px)");
		}else if(wmoveY > 20){
//			
			if(mId<0){
				return false;
			}
			mId --;
			currY += 56;
			way_move.children().removeClass("default");
			way_move.children().eq(mId+1).addClass("default");
			way_move.css("-webkit-transform","translateY("+currY+"px)");
		}
	});
	//流程事件
	var pz;
	$(".flow_layer div").each(function () {
		pz = new RTP.PinchZoom($(this), {});
	});
	$(".flow_layer").get(0).addEventListener("touchmove",function(e){
		e.stopPropagation();
	})
	$(".closebtn").on("touchstart",function(){
		$(".flow_layer").hide();
//		$(".flow_layer div").css("transform","none");
	})
	$(".flow").on("touchstart",function(){
//		$(".floatR").addClass(".t-floatR");
		$(".flow_layer").show();
	})
})