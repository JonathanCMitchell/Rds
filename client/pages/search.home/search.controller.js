
	angular.module('search.controller', [])
		.controller("SearchController", function($scope, Search) {
			$scope.search = {}
			$scope.search.formData = {
				selection: {
				hot: false,
				top: false,
				rising: false
				}
			}

			$scope.addSelection = function() {
				console.log('form data is', $scope.search.formData)
				console.log('form data is', $scope.search)

			}

			$scope.getData = function() {
				console.log("we are in getData")
				Search.getSearch($scope.search)
				.then(function(data) {
				console.log('data in scope', data.data.data.children)
				$scope.dataArr = data.data.data.children
				})
			}



			

			


			

		})
