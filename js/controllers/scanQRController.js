angular.module('remoteApp').controller('scanQRController', function ($scope) {
	console.log("scanQRController");

	$scope.testVar = 'Hello World!';

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {audio: false, video: true};
var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var w, h;
var altVideo = "file:///home/zakiya/Downloads/The Best of Molecular Gastronomy at MolecularRecipes.com.mp4";


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

document.getElementById("video").addEventListener("canplay", function() {
	console.log("test canplay");
	w = this.videoWidth;
	h = this.videoHeight;
	canvas.width = w;
	canvas.height = h;
	canvas.width
	console.log(w + ", " + h);
	console.log(video.src.width);
	console.log(video.src.height);
}, false);

var context = canvas.getContext('2d');

document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0);
});

});

