
	angular.module('search.controller', ['ngMaterial'])
		.controller("SearchController", function($scope, Search) {
			$scope.search = {}
			$scope.search.formData = {
				selection: {
				hot: false,
				top: false,
				rising: false,
				random: false
				}
			}

			$scope.addSelection = function() {
				console.log('form data is', $scope.search)

			}

			$scope.getData = function() {
				console.log("we are in getData")
				if ($scope.search.formData.selection.random === true) {
					Search.getSearch($scope.search)
					.then(function(data) {
					console.log('data in scope random', data.data[0].data.children)
					console.log('typeof data in scope random: ',Array.isArray(data.data[0].data.children))
					$scope.dataArr = data.data[0].data.children
					})
					.catch(function(error) {
						console.error('please enter valid search term', error)
					})
				} else {
					Search.getSearch($scope.search)
					.then(function(data) {
					console.log('data in scope', data.data.data.children)
					$scope.dataArr = data.data.data.children
					})
				}
			}

			 $scope.dataa = {
			 	model: null, //gets bound to whatever is selected
			 	availableOptions: [
			 	{id: 'All', name: 'All'},
			 		{id: 'Hot', name: 'Hot'},
			 		{id: 'Top', name: 'Top'},
			 		{id: 'Rising', name: 'Rising'},
			 		{id: 'Random', name: 'Random'}
			 	]
			 }

			 function toggleObj(obj,str) {
				if (obj[str] !== undefined) {
				obj['hot'] = false,
				obj['rising'] = false,
				obj['top'] = false,
				obj['all'] = false
				obj['random'] = false
				obj[str] = true
				}
				return obj
				}

			$scope.updateSearchObjAndGetData = function() {
				console.log('you clicked', $scope.dataa.model)
				var term = $scope.dataa.model.toLowerCase()
				console.log('toggledObj scope.search.formData in updateSearchObjAndGetData', $scope.search.formData)
				console.log('toggledObj scope.search.formData.selection in updateSearchObjAndGetData', $scope.search.formData.selection)
				if ($scope.search.searchTerm) {
				toggleObj($scope.search.formData.selection, term)
				$scope.getData()
				} else {
				console.log('inside updateSearch please enter valid search term')
				}
			}



     
		})
