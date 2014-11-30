angular.module('remoteApp').controller('scanQRController', function ($scope, $location, $window) {
	console.log("scanQRController");

	$scope.testVar = 'Hello World!';

	$scope.closeWindow = function() {
		$location.path("/welcome");
	};

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {audio: false, video: true};
var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
//	video.width = $window.innerWidth;	
//	video.height = $window.innerHeight;
//	canvas.width = video.width;
//	canvas.height = video.height;	
	//console.log($window.innerWidth + ", " + $window.innerHeight);

var w, h;
/*var altVideo = "file:///home/zakiya/Downloads/The Best of Molecular Gastronomy at MolecularRecipes.com.mp4";*/

var altVideo = "video/The Best of Molecular Gastronomy at MolecularRecipes.com.mp4";

function successCallback(stream) {
  window.stream = stream; // stream available to console
  if (window.URL) {
    video.src = window.URL.createObjectURL(stream);
  } else {
    video.src = stream;
  }
}

function errorCallback(error){
  console.log("navigator.getUserMedia error: ", error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);

if (!video.src) {
	console.log("no camera found!");
	video.src = altVideo;
	video.type = "video/mp4";
}

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

