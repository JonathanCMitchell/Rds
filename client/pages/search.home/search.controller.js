
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

				$scope.log = function() {
					console.log('you clicked', $scope.dataa.model)
					var term = $scope.dataa.model.toLowerCase()
					console.log('$scope selection is',$scope.search.formData.selection[term])
					console.log('term is ', term.toLowerCase())
					console.log('inside log scope search formdata',$scope.search.formData.selection[term])
					if ($scope.search.formData.selection[term] === false) {
					$scope.search.formData.selection[term] = true
					}
					console.log('scope search formData selection',$scope.search.formData.selection)
					//then submit the getData request
					if ($scope.search.searchTerm) {
					Search.getSearch($scope.search)
					.then(function(data) {
						console.log('data in log in scope', data.data.children)
						$scope.dataArr = data.data.data.children
					})
					}  else {
						console.log('please enter valid search term')
					}
				}



     


			// $scope.items = ['Hot', 'Rising', 'Top'];
			// $scope.selectedItem;
			// $scope.getSelectedText = function() {
			// 	console.log('$scope.selectedItem',$scope.selectedItem)
			// 	var term = $scope.selectedItem;
			// 	if ($scope.search.formData.selection !== undefined) {
			// 		var selectObj = $scope.search.formData.selection;
			// 	}  else {
			// 		console.log('scope.search.formData inside getSelectedItems is undefined', selectObj)
			// 	}

			// 	function toggleHot(obj) {
			// 		if (obj === undefined) return
			// 			else if (obj[hot] === false) {
			// 				console.log('toggleHot', obj)
			// 				return obj[hot] === true
			// 			}
			// 	}
			// 	function toggleTop(obj) {
			// 		if (obj === undefined) return
			// 			else if (obj[top] === false) {
			// 				console.log('toggleTop', obj)
			// 				return obj[top] === true
			// 			}
			// 	}
			// 	function toggleRising(obj) {
			// 		if (obj === undefined) return
			// 				else if (obj[rising] === false) {
			// 					console.log('toggleRising', obj)
			// 					return obj[rising] === true
			// 				}
			// 	}
			// 	if ($scope.selectedItem !== undefined) {
			// 		if ($scope.selectedItem === 'Hot') {
			// 				toggleHot(selectObj)
			// 		}
			// 		if ($scope.selectedItem === 'Top') {
			// 			toggleTop(selectObj)
			// 		}
			// 		if ($scope.selectedItem === 'Rising') {
			// 			toggleRising(selectObj)
			// 		}
			// 		return "You have selected: Item " + $scope.selectedItem;
			// 	}  else {
			// 					return "Please select an item";
			// 		 }
			// };
					

			

			
			// $scope.logSelectBox = function() {
			// 	console.log("in select box", $scope.selectedItem)
			// 	// console.log('select box is hit selection', $scope.selection)
			// 	// console.log('inside select box scope.states: ', $scope.states)
				
			// 	// console.log('inside select box scope.selection: ', $scope.selection)
			// 	//do Get Request again
			// }


			

		})
