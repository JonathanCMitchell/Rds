angular.module('search.factory', [])
.factory('Search', function($http) {

	var getSearch = function() {
		console.log("inside getSearch in Search Factory")
		return $http({
			method: "GET",
			url: '/api/search/r/'
		})
		.then(function(response) {
			return response
		})
		.catch(function(error) {
			if(error) {
				console.error("error in getSearch()", error)
			}
		})
	}

	return {
		getSearch: getSearch
	}
})
