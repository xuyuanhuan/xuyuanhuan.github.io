function Bullet(h) {
	var oB = this;
	oB.w = 6;
	oB.h = h;
	oB.img = oArr[7];
	oB.speed = 5;
	oB.obs = [];//存放子弹
	oB.delay = 6;
	oB.de = 20 ;
	oB.i = 0;
	oB.di = 0;
	oB.draw = function(hero,arr,num) {
		oB.di++;
		oB.i++;
		if (oB.i>oB.de) {
			audio[0].play();
			oB.i = 0;
		}
		if (oB.di>oB.delay) {
			if (num == 1) {
				oB.w = 6;
				oB.de = 20;
				oB.img = oArr[7];
				var y = hero.y-oB.h-5;
			}
			if (num == 2) {
				oB.w = 48;
				oB.de = 2;
				oB.img = oArr[8];
				var y = hero.y-oB.h+25;
			}
			var a = {x:hero.x+hero.w/2-oB.w/2,y:y}
			oB.obs.push(a)
			oB.di = 0;
			
		}
		if (!hero.bol) {
			for (var i = 0; i < oB.obs.length; i++) {
				oB.obs[i].y-=oB.speed	
				if (num ==1) {
					if (oB.obs[i].y<-oB.h || check(arr,oB.obs[i].x,oB.obs[i].y) || check(arr,oB.obs[i].x+6,oB.obs[i].y)) {
						oB.obs.splice(i,1);
						i--;
						continue;
					}
				}if (num ==2 ) {
					if (oB.obs[i].y<-oB.h || check(arr,oB.obs[i].x,oB.obs[i].y) || check(arr,oB.obs[i].x+6,oB.obs[i].y)|| check(arr,oB.obs[i].x+42,oB.obs[i].y)|| check(arr,oB.obs[i].x+48,oB.obs[i].y)) {
						oB.obs.splice(i,1);
						i--;
						continue;
					}
				}
				
				ctx.drawImage(oB.img,oB.obs[i].x,oB.obs[i].y);
			}
		}
	}
	//检测子弹是否打中敌机
	function check(arr,x,y) {
		for (var i = 0; i < arr.length; i++) {
			ctx.beginPath();
			ctx.rect(arr[i].x,arr[i].y,arr[i].w,arr[i].h);
			ctx.closePath();
			if (ctx.isPointInPath(x,y)) {
				arr[i].bian_bol = true;
				arr[i].hp--;
				return true;
			}
		}
	}
}