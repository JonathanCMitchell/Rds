

	angular.module('reddit', [
		'ui.router',
		'search.factory',
		'search.controller'
		])
	.config(config); 
		
		function config($stateProvider, $urlRouterProvider, $httpProvider) {
			$stateProvider
			  .state('home', {
				url: '/home',
				templateUrl: '../pages/search.home/search.html',
				controller: 'SearchController'
			})

			$urlRouterProvider
			.otherwise('/home')
		}


