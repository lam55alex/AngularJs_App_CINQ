
'use strict';

// optional controllers
function HomeCtrl($scope, $http) {
}

function ProjectCtrl($scope, $http,$routeParams) {
	$scope.name = $routeParams.name;
	$scope.disInfo = $routeParams.disInfo;
}

function AboutCtrl($scope, $http, $timeout) {
}

