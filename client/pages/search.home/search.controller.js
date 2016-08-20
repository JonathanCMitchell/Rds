(function() {


	angular.module('search.home', [])
		.controller("SearchController", SearchController)

	function SearchController($scope, $location){
		// var vm = this;

		// vm.logout = function() {
		// 	console.log('inside SearchController')
		// }
		$scope.getLogout = function() {
			return console.log("we are in SearchController")
		}

	}

		// function getSearch() {
		// console.log('inside SearchController')
		// 	Search.getSearch()
		// 	.then(function(data) {
		// 	console.log('data in SearchController in Search.getSearch: ',data)
		// 	vm.data = data
		// 	})
		// }




} )  ( )