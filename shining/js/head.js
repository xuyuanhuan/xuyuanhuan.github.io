var nav2 = $('.nav2');
var nav3 = nav2.find('div');
nav2.on('click',function() {
	nav3.css({display:'block'});
})