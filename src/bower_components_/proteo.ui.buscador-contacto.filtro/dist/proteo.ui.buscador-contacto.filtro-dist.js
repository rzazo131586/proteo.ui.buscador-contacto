/* Buscador-Contacto.FILTRO MODULE */
	angular.module('proteo.ui.buscador-contacto.filtro',['pascalprecht.translate'])
		.config(['$translateProvider', function ($translateProvider) {
			// custom code 
	}]);
/* END Buscador-Contacto.FILTRO MODULE */

/* Buscador-Contacto.FILTRO CONTROLLER */
	angular.module('proteo.ui.buscador-contacto.filtro').controller('buscadorContactoFiltroCtrl', function($scope, $http) {
		// Code fo Controller
		$scope.filter={};
		$scope.datatitle = "AGENDA DE CONTACTOS";

		// Call to service
		$http.get('http://localhost:3000/users').success(function(data) {
            $scope.contacts 		= data;
            $scope.contactsFiltered = data;
        });
        
        // Reset INPUTS & LIST constacts ( future : service )
        $scope.contactReset = function(){
        	// reasign data into contactsFiltered for reset list contacts
			$scope.contactsFiltered = undefined;
        }

        // Validate if Inputs are empty && search into result service compare with filter
        $scope.contactFilteredFn = function (){
        	$scope.contactsFiltered = [];

        	for(var i = 0; i < $scope.contacts.length ; i++)
			{	
				if ($scope.filter.username == undefined && $scope.filter.name == undefined && $scope.filter.company == undefined){
					// no data in any input 
					$scope.contactReset();
					return;
				}else{
					// validate its username like to name
					if( $scope.contacts[i].username.indexOf($scope.filter.username) != -1 || 
						$scope.contacts[i].name.indexOf($scope.filter.name) != -1 ||
						$scope.contacts[i].company.name.indexOf($scope.filter.company) != -1 ){
							$scope.contactsFiltered.push($scope.contacts[i]);
						}
				}
       	 	};
       	 	return $scope.contactsFiltered;
		}
	});
/* END Buscador-Contacto.FILTRO CONTROLLER */

/* Buscador-Contacto.FILTRO DIRECTIVE */
	angular.module('proteo.ui.buscador-contacto.filtro').directive('buscadorContacto.filtro',function() {
	  return {
		scope: {
			contactsResult : "="
		},	    
		restrict	: 	"E",
	    controller 	: 	'buscadorContactoFiltroCtrl',
	    templateUrl : 	'src/proteo.ui.buscador-contacto.filtro.tpl.html',
	    link: function($scope){
			$scope.returnItemsFilter = function(){
				//console.log("contactsFiltered || "+JSON.stringify($scope.contactsFiltered));
	       		$scope.contactsResult($scope.contactFilteredFn());
	 		};
		}
	  };
	});
/* END Buscador-Contacto.FILTRO DIRECTIVE */

/* Buscador-Contacto.FILTRO SERVICE */
	angular.module('proteo.ui.buscador-contacto.filtro').service('filtroService', function () {

	/*
	      this.getFullname = function(customer){return customer.firstName+ ' ' + customer.lastName;};
	  
	      this.basePath={};
	      this.setBasePath = function(path) {basePath=path;};
	      this.getBasePath = function() { return basePath;}
	      */
	  });
/* END Buscador-Contacto.FILTRO SERVICE */

angular.module('proteo.ui.buscador-contacto.filtro').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/proteo.ui.buscador-contacto.filtro.tpl.html',
    "<div class=\"buscador-personas-container\">\r" +
    "\n" +
    "\t<h4>{{ datatitle || uppercase }}</h4>\r" +
    "\n" +
    "\t<div id=\"filterContact\" class=\"form-group\">\r" +
    "\n" +
    "\t\t<div class=\"col-md-6\">\r" +
    "\n" +
    "\t\t\t<label class=\"control-label ng-scope\">Username</label>\r" +
    "\n" +
    "\t        <input class=\"form-control ng-pristine ng-untouched ng-valid ng-scope\" type=\"text\" name=\"username\" ng-model=\"filter.username\">\t\t\t\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"col-md-6\">\r" +
    "\n" +
    "\t\t\t<label class=\"control-label ng-scope\">Name Lastname</label>\r" +
    "\n" +
    "\t        <input class=\"form-control ng-pristine ng-untouched ng-valid ng-scope\" type=\"text\" name=\"name\" ng-model=\"filter.name\" required>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"col-md-6\">\r" +
    "\n" +
    "\t\t\t<label class=\"control-label ng-scope\">Company</label>\r" +
    "\n" +
    "\t        <input class=\"form-control ng-pristine ng-untouched ng-valid ng-scope\" type=\"text\" name=\"company\" ng-model=\"filter.company\" required>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<hr>\r" +
    "\n" +
    "\t\t<div class=\"col-md-6 text-right\">\r" +
    "\n" +
    "\t\t\t<button type=\"button\" class=\"btn btn-action\" ng-click=\"returnItemsFilter()\">Buscar</button>\r" +
    "\n" +
    "\t\t\t<button type=\"button\" class=\"btn btn-action\" ng-click=\"contactReset()\">Reset</button>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );

}]);
