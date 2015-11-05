/* Todo Module */
angular.module("proteo.ui.buscador-contacto", []).controller("buscadorContactotCtrl",  function($scope) {

		console.log("Controller buscadorContacto");

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

});


/*
		$scope.information = [
                { 
                    "name" : "Karin Bernard",
                    "lastname" : "1",
                    "corporate" : "Everis"
                },
                { 
                    "name" : "Noreen Ware",
                    "lastname" : "2",
                    "corporate" : "Banco Santander"
                },
                { 
                    "name" : "Elnora Quinn",
                    "lastname" : "3",
                    "corporate" : "Everis"
                },
                { 
                    "name" : "Randi Rogers",
                    "lastname" : "5",
                    "corporate" : "Everis"
                },
                { 
                    "name" : "Bonner Mosley",
                    "lastname" : "6",
                    "corporate" : "Proteo"
                },
                { 
                    "name" : "Marianne Ellison",
                    "lastname" : "7",
                    "corporate" : "Proteo"
                },
                { 
                    "name" : "Le Hudson",
                    "lastname" : "8",
                    "corporate" : "Everis"
                },
                { 
                    "name" : "Minerva Alford",
                    "lastname" : "9",
                    "corporate" : "Banco Santander"
                },
                { 
                    "name" : "Lamb Baird",
                    "lastname" : "10",
                    "corporate" : "Banco Santander"
                },
                { 
                    "name" : "Davenport Rush",
                    "lastname" : "100",
                    "corporate" : "Everis"
                }
            ];

 */
/* Todo Filter */