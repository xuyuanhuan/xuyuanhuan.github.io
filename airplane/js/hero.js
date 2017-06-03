
function Hero(w,h) {
	var hero = this;
	hero.w = w;
	hero.h = h;
	hero.y = canvas.height*0.8-hero.h;
	hero.x = (canvas.width-hero.w)/2;
	hero.imgs = [oArr[1],oArr[2],oArr[3],oArr[4],oArr[5],oArr[6]];
	hero.i = 0;
	hero.delay = 0;
	hero.bol = false;
	hero.draw = function(arr,arr2) {
		hero.delay++;
		if (!hero.bol) {
			if (hero.delay>6) {
				hero.i = Number(!hero.i);
				hero.delay=0;
			}
		}
		for (var i = 0; i < arr2.length; i++) {
			if ((arr2[i].x+arr2[i].w)>hero.x&&(hero.w+hero.x)>arr2[i].x&&(arr2[i].y+arr2[i].h)>hero.y&&(hero.h+hero.y)>arr2[i].y) {
				arr2[i].hp =0 ;
			}
		}
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].bol) {
				if ((arr[i].x+arr[i].w)>hero.x&&(hero.w+hero.x)>arr[i].x&&(arr[i].y+arr[i].h)>hero.y&&(hero.h+hero.y)>arr[i].y) {
					audio[5].play();
					hero.i = 1;
					hero.bol = true;
				}
			}
			if (hero.bol) {
					hero.i++;
				if (hero.i>=hero.imgs.length-1) {
					over_bol = true;
					pa_bol = true;
					end.style.display = 'block';
					localStorage.setItem(user.value,score+'.'+user.value);
					audio[6].play();
					hero.i = 5;
				}
			}
		}
		ctx.drawImage(hero.imgs[hero.i],hero.x,hero.y);
	}
}









