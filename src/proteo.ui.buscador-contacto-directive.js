angular.module("proteo.ui.buscador-contacto", []).controller("buscadorContactotCtrl",  function($scope, $http) {

		console.log("Controller buscadorContactotCtrl");

		$http.get('http://localhost:3000/users').
        success(function(data) {
            $scope.contacts = data;
        });


})
.directive("buscadorContacto", function() {

	console.log("Directive buscadorContacto");
	return {
		restrict: "AE",
		controller : 'buscadorContactotCtrl',
		templateUrl: './bower_components/proteo.ui.buscador-contacto/dist/proteo.ui.buscador-contacto.tpl.html'
	}

})
.directive("listadoContacto", function() {

	console.log("Directive listadoContacto");
	return {
		restrict: "AE",
		controller : 'buscadorContactotCtrl',
		templateUrl: './bower_components/proteo.ui.buscador-contacto/dist/proteo.ui.buscador-contacto.tpl.html'
	}

});

