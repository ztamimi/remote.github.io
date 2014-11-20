angular.module('remoteApp', ['ngRoute']);

angular.module('remoteApp').config(function ($routeProvider) {
	$routeProvider
		.when('/welcome',
			{
				controller: 'welcomeController',
				templateUrl: 'views/welcome.html'
			})
		.when('/',
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
		.otherwise({redirectTo: '/' });

});

