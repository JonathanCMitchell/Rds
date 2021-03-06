angular.module('search.factory', [])
.factory('Search', function($http) {
	// params: { searchTerm: string, hot: boolean }
	var getSearch = function(params) {
		console.log('params in getSearch in Search Factory are', params)
		return $http({
			method: "GET",
			url: '/api/search/r/',
			params: params
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
