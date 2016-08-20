(function() {


	angular.module('search.home', [])
		.factory('Search', Search)

function Search($http, $location) {
		return {
		getSearch: getSearch
	}
}
	
function getSearch()	{
	console.log("inside getSearch in Search Factory")
			return $http({
				method: "GET",
				url: '/api/search/r/',
				// data: {"sub": params } //may need to do post to send JSON
			})
			.then(function(response) {
				return response
			})
}

} ) ()