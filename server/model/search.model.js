var _ = require('underscore')
var request = require('request')

exports.search = {
	get: searchGet
}

function searchGet(params) {


	console.log('params in side searchModel as object: ', params)






	var subReddit = params.searchTerm
	var selectionObj = JSON.parse(params.formData)

	
	// var selectionObj = JSON.parse(params.formData) || _.identity()


	console.log('subReddit inside searchGet in search.model.js: ',subReddit);
	console.log('selectionObj inside searchGet in search.model.js: ', selectionObj);
	//if rising, use selectionObj.selection.rising
	//if top, use selectionObj.selection.top
	//if hot, use selectionObj.selection.hot
	
if (!!subReddit) {	
	if (selectionObj.selection.rising) {
		return new Promise(function(resolve,reject) {
			request.get('https://www.reddit.com/r/' + subReddit + '/' + 'rising' + '/' +'.json', function(error,response, body) {
				if (!error) {
					// console.log('body inside search model get',body);
					resolve(body)
				}
				  else {
					reject(error)
				}
				})
			})
	}  else if (selectionObj.selection.hot) {
		return new Promise(function(resolve,reject) {
			request.get('https://www.reddit.com/r/' + subReddit + '/' + 'hot' + '/' +'.json', function(error,response, body) {
				if (!error) {
					// console.log('body inside search model get',body);
					resolve(body)
				}
				  else {
					reject(error)
				}
				})
			})
	}  else if (selectionObj.selection.top){
		return new Promise(function(resolve,reject) {
			request.get('https://www.reddit.com/r/' + subReddit + '/' + 'top' + '/' +'.json', function(error,response, body) {
				if (!error) {
					// console.log('body inside search model get',body);
					resolve(body)
				}
				  else {
					reject(error)
				}
				})
			})
	}
	else {
		return new Promise(function(resolve, reject) {
		request.get('https://www.reddit.com/r/' + subReddit + '.json', function(error,response, body) {
			if (!error) {
				// console.log('body inside search model get',body);
				resolve(body)
			}
			  else {
				reject(error)
			}
			})
		})
	}
}
}

