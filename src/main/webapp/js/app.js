
'use strict';

// angular.js main app initialization
var app = angular.module('example359', []).
    config(['$routeProvider', function ($routeProvider) {
      $routeProvider.
        when('/', { templateUrl: 'pages/index.html', activetab: 'projects', controller: HomeCtrl }).
        when('/project/people/:name/:disInfo', {
          templateUrl: function (params) { return 'pages/people' + '.html'; },
          controller: ProjectCtrl,
          activetab: 'projects'
        }).
        when('/about', {
          templateUrl: 'pages/about.html',
          controller: AboutCtrl,
          activetab: 'about'
        }).
        otherwise({ redirectTo: '/' });
    }]).run(['$rootScope', '$http', '$browser', '$timeout', "$route", function ($scope, $http, $browser, $timeout, $route) {

        $scope.$on("$routeChangeSuccess", function (scope, next, current) {
          $scope.part = $route.current.activetab;
        });

        // onclick event handlers
        $scope.showForm = function () {
          $('.contactRow').slideToggle();
        };
        $scope.closeForm = function () {
          $('.contactRow').slideUp();
        };

        // save the 'Contact Us' form
        $scope.save = function () {
          $scope.loaded = true;
          $scope.process = true;
          $http.post('sendemail.php', $scope.message).success(function () {
              $scope.success = true;
              $scope.process = false;
          });
        };
  }]);

app.service("myService", function($http, $q)
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
	})
})

app.config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);

