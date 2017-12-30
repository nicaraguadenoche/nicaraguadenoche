(function(app){
	'use strict';
	app.factory('eventFactory', ['$http', function($http){
		return{
			getCommingSoon: function(info){
				return new Promise(function(resolve, reject){
					$http.get('/event/comingsoon')
					.then(function(resp){
						resolve(resp.data);
					}, function(err){
						reject(err);
					})
				});
			},
			getAll: function(){
				return new Promise(function(resolve, reject){
					$http.get('/event/all')
					.then(function(resp){
						resolve(resp.data);
					});
				});
			},
			getActives: function(){
				return new Promise(function(resolve, reject){
					$http.get('/event/actives')
					.then(function(resp){
						resolve(resp.data);
					});
				});
			},
			save: function(place){
				return new Promise(function(resolve, reject){
					$http.post('/event/save', place)
					.then(function(resp){
						resolve(resp.data);
					});
				});
			},
			actDeact: function(id, act){
				return new Promise(function(resolve, reject){
					$http.post('/event/actdeact', {id: id, act: act})
					.then(function(resp){
						resolve(resp.data);
					});
				});
			},
			uploadImage: function(file, name){
				var data = new FormData();
				data.append("image", file);

				var filename = name ? name : file.name;

				return new Promise(function(resolve, reject){
					$http.post("/event/upload?filename="+filename, data, {
					    headers: { 'Content-Type': undefined },
					    transformRequest: angular.identity
					}).then(function (resp) {
						resolve(resp.data);
					}, function (err) {
						reject(err);
					});
				});
			}
		};
	}]);
})(angular.module('ndnapp'));