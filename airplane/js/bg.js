function Bg() {
	var bg = this;
	bg.y = 0;
	bg.img = oArr[0];
	bg.speed = 2;
	bg.draw = function() {
		bg.y+=bg.speed;
		if (bg.y>canvas.height) {
			bg.y = 0;
		}
		ctx.drawImage(bg.img,0,0,320,568,0,bg.y,canvas.width,canvas.height)
		ctx.drawImage(bg.img,0,0,320,568,0,-canvas.height+bg.y,canvas.width,canvas.height)
	}
}