angular.module('remoteApp').controller('welcomeController', function ($scope) {
	console.log("welcomeController");

	$scope.testVar = 'Hello World!';
	
	$scope.scanQR = function() {
		console.log("scanQR");
		window.open("#scanQR", "_self", false);
	}
});
