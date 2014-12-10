angular.module('remoteApp').controller('scanQRController', function ($scope, $location, $window, $http) {

	$scope.load = function() {
		console.log("load");
		var filename = "img/sample.png";
		var img = new Image();
		img.src = filename;
		img.onload = function() {
			var canvas = document.getElementById("qrCanvas");
			var ctx = canvas.getContext('2d');
			ctx.drawImage(this, 0, 0);
		};
	};

	$scope.decodeQR = function() {
		console.log("decodeQR");

		var url = "php/decodeQR.php";

		var canvas = document.getElementById("qrCanvas");
		var imgData = canvas.toDataURL();
		//console.log(imgData);

		var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST", url, true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

		xmlhttp.send("imgData=" + imgData);

		function test(str) {
			var msg = document.getElementById("msg");
			msg.value = str;
		};

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

				var response = JSON.parse(xmlhttp.responseText);
				//document.getElementById("msg").value = response[0].symbol[0].data;
				//msg.value = response[0].symbol[0].data;
				test(response[0].symbol[0].data);
				console.log(response[0].symbol[0].data);
				console.log("test");
			}
		};
				
	};

	$scope.closeWindow = function() {
		$location.path("/welcome");
	};

	navigator.getUserMedia = navigator.getUserMedia || 		navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

	var constraints = {audio: false, video: true};
	var video = document.getElementById("video");
	var canvas = document.getElementById("qrCanvas");

	var w, h;

	var altVideo = "video/The Best of Molecular Gastronomy at MolecularRecipes.com.mp4";

	function successCallback(stream) {
		window.stream = stream; // stream available to console
		if (window.URL) {
			video.src = window.URL.createObjectURL(stream);
		} 
		else {
			video.src = stream;
		}
	};

	function errorCallback(error){
		console.log("navigator.getUserMedia error: ", error);
	};

	navigator.getUserMedia(constraints, successCallback, errorCallback);

	if (!video.src) {
		console.log("no camera found!");
		video.src = altVideo;
		video.type = "video/mp4";
	};

	document.getElementById("video").addEventListener("play", function() {
		console.log("test canplay");
		w = this.videoWidth;
		h = this.videoHeight;
		canvas.width = w;
		canvas.height = h;
	}, false);

	var context = canvas.getContext('2d');

	document.getElementById("snap").addEventListener("click", function() {
		context.drawImage(video, 0, 0);
	
	});
});

