
	angular.module('search.controller', ['ngMaterial'])
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

			 $scope.dataa = {
			 	model: null, //gets bound to whatever is selected
			 	availableOptions: [
			 		{id: 'Hot', name: 'Hot'},
			 		{id: 'Top', name: 'Top'},
			 		{id: 'Rising', name: 'Rising'}
			 	]
			 }

			 function toggleObj(obj,str) {
				if (obj[str] !== undefined) {
				obj['hot'] = false,
				obj['rising'] = false,
				obj['top'] = false,
				obj[str] = true
				}
				return obj
			}

				$scope.updateSearchObjAndGetData = function() {
					console.log('you clicked', $scope.dataa.model)
					var term = $scope.dataa.model.toLowerCase()
					toggleObj($scope.search.formData.selection, term)
					console.log('toggledObj scope.search.formData in updateSearchObjAndGetData', $scope.search.formData)
					console.log('toggledObj scope.search.formData.selection in updateSearchObjAndGetData', $scope.search.formData.selection)
					if ($scope.search.searchTerm) {
					Search.getSearch($scope.search)
					.then(function(data) {
						console.log('data in log in scope', data.data.data.children)
						$scope.dataArr = data.data.data.children
					})
					}  else {
						console.error('please enter valid search term')
					}
				}



     



		})
