angular.module('remoteApp', ['ngRoute']);

angular.module('remoteApp').config(function ($routeProvider) {
	$routeProvider
		.when('/welcome',
			{
				controller: 'welcomeController',
				templateUrl: 'views/welcome.html'
			})
		.when('/main',
			{
				controller: 'mainController',
				templateUrl: 'views/main.html'
			})
		.when('/help',
			{
				controller: 'helpController',
				templateUrl: 'views/help.html'
			})
		.when('/error',
			{
				controller: 'errorController',
				templateUrl: 'views/error.html'
			})
		.when('/scanQR',
			{
				controller: 'scanQRController',
				templateUrl: 'views/scanQR.html'
			})
		.otherwise({redirectTo: '/welcome' })
		

});

