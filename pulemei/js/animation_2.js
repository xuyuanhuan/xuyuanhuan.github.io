function Blink(obj){
	this.obj = obj;
	this.timer = null;
	this.id = 0;
}
Blink.prototype.player = function(){
	var _this = this;
	_this.timer = setInterval(function(){
		_this.id++;
		if(_this.id > _this.obj.length - 1){
			_this.id = 0;
		}
		_this.obj.css("opacity",0.7);
		_this.obj.eq(_this.id).css("opacity",0);
	},1000);
	_this.clicks();
}
Blink.prototype.clicks = function(){
	var _this = this;
	_this.obj.on("click",function(){
		_this.obj.css("opacity",0.7);
		$(this).css("opacity",0);
		_this.stops();
	});
}
Blink.prototype.stops = function(){
		clearInterval(this.timer);
}