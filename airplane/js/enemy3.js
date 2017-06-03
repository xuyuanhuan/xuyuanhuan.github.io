function Enemy3(w,h) {
	var E3 = this;
	E3.w = w;
	E3.h = h;
	E3.imgs = [oArr[24],oArr[25],oArr[26],oArr[27],oArr[28],oArr[29],oArr[30]];
	E3.arr = [];
	E3.delay = 80;
	E3.di = 0;
	E3.draw = function() {
		E3.di++;
		if (E3.di>E3.delay) {
			var x = Math.random()*(canvas.width-E3.w);
			var y = Math.random()*50+60;
			var speed = Math.random()*1.2+1.5;
			var obj = {x:x,
				y:-y,
				w:E3.w,
				h:E3.h,
				hp:3,
				speed:speed,
				die:false,
				delay:3,
				di:0,
				i:0,
				bol:true,
				bian_bol:false,
			};
			E3.arr.push(obj);
			E3.di = 0;
		}
		for (var i = 0; i < E3.arr.length; i++) {
			if (E3.arr[i].hp<=0&&E3.arr[i].bol) {
				E3.arr[i].bian_bol = false;
				E3.arr[i].i=2;
				score +=300;
				audio[4].play();
				E3.arr[i].die = true;
				E3.arr[i].bol = false;
			}
			if (E3.arr[i].bian_bol) {
				E3.arr[i].di++;
				if (E3.arr[i].di>E3.arr[i].delay) {
					if (E3.arr[i].i==1) {
						E3.arr[i].i=2;
						E3.arr[i].bian_bol = false;
					}else {
						E3.arr[i].i=1;	
					}
					E3.arr[i].di = 0;
				}
			}
			if (E3.arr[i].die || E3.arr[i].y>canvas.height) {
				E3.arr[i].di++;
				if (E3.arr[i].di>E3.arr[i].delay) {
					E3.arr[i].i++;
					E3.arr[i].di = 0;
				}
				if (E3.arr[i].i>=E3.imgs.length-1) {
					E3.arr.splice(i,1);
					i--;
					continue;
				}
			}
			E3.arr[i].y +=E3.arr[i].speed;
			ctx.drawImage(E3.imgs[E3.arr[i].i],E3.arr[i].x,E3.arr[i].y);
		}
	}
}