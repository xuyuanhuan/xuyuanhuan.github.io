function Enemy2(w,h) {
	var E2 = this;
	E2.w = w;
	E2.h = h;
	E2.imgs = [oArr[14],oArr[15],oArr[16],oArr[17],oArr[18],oArr[19],oArr[20],oArr[21],oArr[22],oArr[23]];
	E2.arr = [];
	E2.delay = 300;
	E2.di = 0;
	E2.draw = function() {
		E2.di++;
		if (E2.di>E2.delay) {
			audio[3].play();
			var x = Math.random()*(canvas.width-E2.w);
			var y = 169;
			var speed = Math.random()*1.2+0.6;
			var obj = {x:x,
				y:-y,
				w:E2.w,
				h:E2.h,
				hp:10,
				speed:speed,
				die:false,
				delay:3,
				di:0,
				i:0,
				bol:true,
				bian_bol:false,
			};
			E2.arr.push(obj);
			E2.di = 0;
		}
		for (var i = 0; i < E2.arr.length; i++) {
			E2.arr[i].di++;
			if (E2.arr[i].hp>0) {
				if (E2.arr[i].bian_bol) {
					if (E2.arr[i].di>E2.arr[i].delay) {
						if (E2.arr[i].i==2) {
							E2.arr[i].i=1;
							E2.arr[i].bian_bol = false;
						}else {
							E2.arr[i].i=2;
						}
						E2.arr[i].di = 0;
					}
				}else {
					if (E2.arr[i].di>E2.arr[i].delay) {
						E2.arr[i].i = Number(!E2.arr[i].i);
						E2.arr[i].di = 0;
					}
				}
			}
			if (E2.arr[i].hp<=0&&E2.arr[i].bol) {
				E2.arr[i].bian_bol = false;
				score +=500;
				audio[3].pause();
				audio[2].play();
				E2.arr[i].i=2;
				E2.arr[i].die = true;
				E2.arr[i].bol = false;
			}
			if (E2.arr[i].die || E2.arr[i].y>canvas.height) {
				if (E2.arr[i].di>E2.arr[i].delay) {
					E2.arr[i].i++;
					E2.arr[i].di = 0;
				}
				if (E2.arr[i].i>=E2.imgs.length-1) {
					E2.arr.splice(i,1);
					i--;
					continue;
				}
			}
			E2.arr[i].y +=E2.arr[i].speed;
			ctx.drawImage(E2.imgs[E2.arr[i].i],E2.arr[i].x,E2.arr[i].y);
		}
	}
}