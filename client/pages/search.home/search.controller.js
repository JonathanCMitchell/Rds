
	angular.module('search.controller', [])
		.controller("SearchController", function($scope, Search) {
			$scope.getLog = function() {
			return console.log("we are in search controller")
			}

			$scope.getData = function() {
				console.log("we are in getData")
				Search.getSearch()
				.then(function(data) {
				console.log('data in scope', data)
				$scope.data = data
				})
			}
		

		})
