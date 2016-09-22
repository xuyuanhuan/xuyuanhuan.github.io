changeWidthLoad();

function changeWidthLoad() {
	//loading
	var speed = 0;
	var imagesarray = ['img/18-1.png', 'img/18-2.png', 'img/18-3.png', 'img/18-4.png', 'img/18-5.png', 'img/18-6.png', 'img/18-7.png', 'img/18-8.png', 'img/18-9.png', 'img/18-10.png', 'img/18-11.png', 'img/18-12.png', 'img/18-13.png', 'img/18-14.png', 'img/18-15.png', 'img/fly-1.png', 'img/fly-2.png', 'img/fly-3.png', 'img/xsp.png', 'img/pao.png', 'img/pao2.png', 'img/pao3.png','img/yue.png','img/yue2.png','img/p1.jpg'];
	for (var m = 1; m <= 35; m++) {
		imagesarray.push('img/w-' + m + ".png");
	}

	function preloadimages(arr) {
		var newimages = [],
			loadedimages = 0;
		var arr = (typeof arr != "object") ? [arr] : arr;
		var lb = $(".lb");

		function imageloadpost() {
			loadedimages++;
			speed = parseInt(loadedimages / arr.length * 100);
			$('.loading p').text(speed + "%");
			if (speed > 0 && speed < 13) {
				lb.css("background-position", "-122px 0");
			} else if (speed >= 13 && speed < 26) {
				lb.css("background-position", "-244px 0");
			} else if (speed >= 26 && speed < 39) {
				lb.css("background-position", "-366px 0");
			} else if (speed >= 39 && speed < 52) {
				lb.css("background-position", "-488px 0");
			} else if (speed >= 52 && speed < 65) {
				lb.css("background-position", "-610px 0");
			} else if (speed >= 52 && speed < 78) {
				lb.css("background-position", "-732px 0");
			} else if (speed >= 78 && speed < 91) {
				lb.css("background-position", "-854px 0");
			}
			if (loadedimages == arr.length) {
				$('.loading').hide();
				var music = document.getElementById("bgmusic");
				music.play();
			}
		}
		for (var i = 0; i < arr.length; i++) {
			newimages[i] = new Image()
			newimages[i].src = arr[i]
			newimages[i].onload = function() {
				imageloadpost();
			}
			newimages[i].onerror = function() {
				imageloadpost()
			}
		}
	}
	preloadimages(imagesarray);
}