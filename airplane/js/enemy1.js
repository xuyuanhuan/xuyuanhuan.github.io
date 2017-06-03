function Enemy1(w,h) {
	var E1 = this;
	E1.w = w;
	E1.h = h;
	E1.imgs = [oArr[9],oArr[10],oArr[11],oArr[12],oArr[13]];
	E1.arr = [];
	E1.delay = 38;
	E1.di = 0;
	E1.draw = function() {
		E1.di++;
		if (E1.di>E1.delay) {
			var x = Math.random()*(canvas.width-E1.w);
			var speed = Math.random()*2+2.5;
			var obj = {x:x,
				y:-E1.h,
				w:E1.w,
				h:E1.h,
				hp:1,
				speed:speed,
				die:false,
				delay:3,
				di:0,
				i:0,
				bol:true,
				bian_bol:false,
			};
			E1.arr.push(obj);
			E1.di = 0;
		}
		for (var i = 0; i < E1.arr.length; i++) {
			if (E1.arr[i].hp<=0&&E1.arr[i].bol) {
				score +=100;
				audio[1].play();
				E1.arr[i].die = true;
				E1.arr[i].bol = false;
			}
			if (E1.arr[i].die || E1.arr[i].y>canvas.height) {
				E1.arr[i].di++;
				if (E1.arr[i].di>E1.arr[i].delay) {
					E1.arr[i].i++;
					E1.arr[i].di = 0;
				}
				if (E1.arr[i].i>=E1.imgs.length-1) {
					E1.arr.splice(i,1);
					i--;
					continue;
				}
			}
			E1.arr[i].y +=E1.arr[i].speed;
			ctx.drawImage(E1.imgs[E1.arr[i].i],E1.arr[i].x,E1.arr[i].y);
		}
	}
}