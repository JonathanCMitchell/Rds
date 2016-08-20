var request = require('request')

exports.search = {
	get: searchGet
}

function searchGet() {
	return new Promise(function(resolve, reject) {
	request.get('https://www.reddit.com/r/trap.json', function(error,response, body) {
		if (!error) {
			console.log('we are in searchGet inside model')
			resolve(body)

		}
		  else {
			reject(error)
		}
		})
	})
}


 // .get('http://google.com/img.png')
 //  .on('response', function(response) {
 //    console.log(response.statusCode) // 200 
 //    console.log(response.headers['content-type']) // 'image/png' 
 //  })
 //  .on('error', function(error) {
 //  	console.log
 //  })

 //in url put : then whatever urlParser

 // req.query 
 // get request params 