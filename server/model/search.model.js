var _ = require('underscore')
var request = require('request')

exports.search = {
	get: searchGet
}

function searchGet(params) {


	console.log('params in side searchModel as object: ', params)
	var subReddit = {}
	subReddit.search = params.search
	subReddit.hot = params.hot
	subReddit.rising = params.rising;
	subReddit.top = params.top

	

if (subReddit[hot] === true) {
	return new Promise(function(resolve,reject) {
		request.get('https://www.reddit.com/r/' + subReddit.search + '/' + subReddit.hot + '/' +'.json', function(error,response, body) {
			if (!error) {
				// console.log('body inside search model get',body);
				resolve(body)
			}
			  else {
				reject(error)
			}
			})
		})
}  else {
		return new Promise(function(resolve, reject) {
		request.get('https://www.reddit.com/r/' + subRedditsearch + '.json', function(error,response, body) {
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

