/* Buscador-Contacto Module */
	angular.module('proteo.ui.buscador-contacto',['pascalprecht.translate', 'proteo.ui.buscador-contacto.filtro', 'proteo.ui.buscador-contacto.visor'])
		.config(['$translateProvider', function ($translateProvider) {
			// custom code 
	}]);
/* END Buscador-Contacto Module */
/* Buscador-Contacto Controller */
	angular.module('proteo.ui.buscador-contacto').controller('buscadorContactoCtrl', function($scope, $http, buscadorContactoService) {
        $scope.filterParam = {
            'name' : 'John',
            'lastname' : "Dow"
        }

        $scope.getFilterName = function (){
            return "Name : " + buscadorContactoService.getFilterParams($scope.filterParam);
        };
        console.log("GetFilterName >> "+$scope.getFilterName());

        $scope.contactsToSearch = function(valueDirective){
            $scope.contacstList = valueDirective;
            $scope.contacstToShow = $scope.contacstList;
        };
	});

/* END Buscador-Contacto Controller */
/* Buscador-Contacto Directive */
	angular.module('proteo.ui.buscador-contacto').directive('buscadorContacto',function() {
	  return {
		restrict	: 	"E",
	    controller 	: 	'buscadorContactoCtrl',
	    templateUrl : 	'src/proteo.ui.buscador-contacto.tpl.html',
	  };
	});
/* END Buscador-Contacto Directive */
	angular.module('proteo.ui.buscador-contacto').service('buscadorContactoService', function () {
		//Receive JSON with items of filter
		this.getFilterParams = function(filter){
			return filter.name;
		};
	});

/* Buscador-Contacto Filter */
/* END Buscador-Contacto Filter */
angular.module('proteo.ui.buscador-contacto').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/proteo.ui.buscador-contacto.tpl.html',
    "<div class=\"buscador-personas-container\">\r" +
    "\n" +
    "\t<buscador-Contacto.filtro contacts-result=\"contactsToSearch\"></buscador-Contacto.filtro>\r" +
    "\n" +
    "\t<buscador-Contacto.visor show-contacts=\"contacstToShow\"></buscador-Contacto.visor>\t\r" +
    "\n" +
    "</div>"
  );

}]);

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

angular.module('proteo.ui.buscador-contacto').run(['$templateCache', function($templateCache) {
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

/* Buscador-Contacto.VISOR MODULE */
	angular.module('proteo.ui.buscador-contacto.visor',['pascalprecht.translate'])
		.config(['$translateProvider', function ($translateProvider) {
			// custom code 
	}]);
/* END Buscador-Contacto.VISOR MODULE */

/* Buscador-Contacto.VISOR CONTROLLER */
	angular.module('proteo.ui.buscador-contacto.visor').controller('buscadorContactoVisorCtrl', function($scope,$http) {
		console.log("buscadorContactoVisorCtrl");
	});
/* END Buscador-Contacto.VISOR CONTROLLER */

/* Buscador-Contacto.VISOR DIRECTIVE */
	angular.module('proteo.ui.buscador-contacto.visor').directive('buscadorContacto.visor',function() {
	  return {
	    restrict	: 	"E",
		scope: {
			showContacts : '='
		},
	    controller 	: 	'buscadorContactoVisorCtrl',
	    templateUrl : 	'src/proteo.ui.buscador-contacto.visor.tpl.html',
	  };
	});
/* END Buscador-Contacto.VISOR DIRECTIVE */

/* Buscador-Contacto.VISOR SERVICE */
	angular.module('proteo.ui.buscador-contacto.visor').service('visorService', function () {
		// Code of Service
	});
/* END Buscador-Contacto.VISOR SERVICE */
angular.module('proteo.ui.buscador-contacto').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/proteo.ui.buscador-contacto.visor.tpl.html',
    "<div class=\"buscador-personas-container\">\r" +
    "\n" +
    "\t<div ng-repeat=\"contact in showContacts\" class=\"col-md-12 ng-scope\">\r" +
    "\n" +
    "\t\t<div class=\"panel account-item\">\r" +
    "\n" +
    "\t\t\t<div class=\"item-body clearfix\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"pull-left\">\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"account-name ng-binding\">\r" +
    "\n" +
    "\t\t\t\t\t\t{{contact.name}}\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"account-holder ng-binding\">{{contact.company.name}}</div>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<div class=\"pull-right text-right\">\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"account-name ng-binding\">\r" +
    "\n" +
    "\t\t\t\t\t\t{{contact.username}}\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );

}]);
