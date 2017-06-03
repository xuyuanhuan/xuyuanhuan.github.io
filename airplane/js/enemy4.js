function Enemy4(w,h) {
	var E4 = this;
	E4.w = w;
	E4.h = h;
	E4.imgs = [oArr[31],oArr[32]];
	E4.arr = [];
	E4.delay = 1000;
	E4.di = 0;
	E4.draw = function() {
		E4.di++;
		if (E4.di>E4.delay) {
			E4.delay = Math.floor(Math.random()*800+400);
			var x = Math.random()*(canvas.width-E4.w);
			var i = Math.round(Math.random());
			var speed = 2;
			var sp = Math.random()*0.3+0.3;
			var obj = {x:x,
				y:-E4.h,
				w:E4.w,
				h:E4.h,
				hp:1,
				sp:sp,
				speed:speed,
				die:false,
				i:i
			};
			E4.arr.push(obj);
			E4.di = 0;
		}
		for (var i = 0; i < E4.arr.length; i++) {
			if (E4.arr[i].hp<=0) {
				if (E4.arr[i].i==0) {
					bom ++;
				}else {
					num =2;
					index -=2000;
				}
				E4.arr[i].die = true;
			}
			if (E4.arr[i].die || E4.arr[i].y>canvas.height) {
				E4.arr.splice(i,1);
				i--;
				continue;
			}
			E4.arr[i].speed += E4.arr[i].sp;
			E4.arr[i].y +=E4.arr[i].speed;
			ctx.drawImage(E4.imgs[E4.arr[i].i],E4.arr[i].x,E4.arr[i].y);
		}
	}
}