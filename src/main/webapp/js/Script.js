var myApp = angular.module("myModule",[]);

myApp.service("myService", function($http, $q)
{
	var deferred = $q.defer();
	$http.get('http://localhost:8090/rest/people').then(function(data)
	{
		deferred.resolve(data);
	});
	
	this.getPeople = function ()
	{
		return deferred.promise;
	}
	
})

.controller("myController", function($scope,myService)
{
	var promise = myService.getPeople();
	promise.then(function(data)
	{
		$scope.people = data.data;
		console.log($scope.people);
	})
})

