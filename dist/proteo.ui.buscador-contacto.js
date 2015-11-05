/* Todo Module */
angular.module("proteo.ui.buscador-contacto", []).controller("buscadorContactotCtrl",  function($scope) {

		console.log("Controller buscadorContacto");

})
.directive("buscadorContacto", function() {

	console.log("Directive buscadorContacto");
	return {
		restrict: "AE",
		controller : 'buscadorContactotCtrl',
		templateUrl: './bower_components/proteo.ui.buscador-contacto/dist/proteo.ui.buscador-contacto.tpl.html'
	}

});
/* Todo Filter */