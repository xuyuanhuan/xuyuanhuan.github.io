
function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function Hubble() {
//	this.size = [];
	this.x = [];
	this.y = [];
	this.speedx = [];
	this.speedy = [];
	this.alive = [];
	this.imgType = [];
//	this.color = [];
	this.img1 = new Image();
	this.img2 = new Image();
	this.img3 = new Image();
}

Hubble.prototype = {
	num:35,
	ifStop:true,
	ifStart:false,
	init:function(){
		this.img1.src = "img/pao.png";
		this.img2.src = "img/pao2.png";
		this.img3.src = "img/pao3.png";
		for (var i=0;i<this.num;i++) {
//			this.size[i] = random(20,100);
			this.alive[i] = true;
			var rndType = random(1,100);
			if(rndType >=30 && rndType <= 60){
				this.imgType[i] = this.img1;
			}else if(rndType >=0 && rndType <30){
				this.imgType[i] = this.img2;
			}else{
				this.imgType[i] = this.img3;
			}
			this.speedy[i] = random(5,10) * 4.5;
			this.x[i] = random(-30,wW + 10);
			this.y[i] = random(wH + 10, 2*wH);
//			this.color[i] = "rgba("+random(0,255)+","+random(0,255)+","+random(0,255)+","+Math.random()+")";
		}
	},
	render:function(){
		for (var i=0;i<this.num;i++) {
			this.y[i] -= this.speedy[i];
			if(this.y[i] <= -this.imgType[i].width){
				this.alive[i] = false;
			}
			if(this.y[i] <= 0){
				this.ifStart = true;
			}
			ctx.globalAlpha = 0.5;
			ctx.beginPath();
			ctx.drawImage(this.imgType[i],this.x[i],this.y[i]);
			ctx.closePath();
		}
	},
	stopAnimation:function(){
		for (var i=0;i<this.num;i++) {
			if(this.alive[i]){
				return false;
			}
		}
		return true;
	}
}