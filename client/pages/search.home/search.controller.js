
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



			  // angular
     //  .module('selectDemoBasic', ['ngMaterial'])
     //  .controller('AppCtrl', function($scope) {
     //    this.userState = '';
     //    this.states = ('top rising new hot CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
     //        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
     //        'WY').split(' ').map(function (state) { return { abbrev: state }; });
     //  });


			

			


			

		})
