(function () {

    'use strict';	

	angular.module('proteo.ui.buscador-contacto.filtro',['pascalprecht.translate'])
		.config(['$translateProvider', function ($translateProvider) {
			// custom code 
	}]);
}());
(function () {
    'use strict';

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

}());

(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.filtro').directive('buscadorContacto.filtro',function() {
	  return {
		scope: {
			contactsResult : "="
		},	    
		restrict	: 	"E",
	    controller 	: 	'buscadorContactoFiltroCtrl',
	    templateUrl : 	'./bower_components/proteo.ui.buscador-contacto.filtro/dist/proteo.ui.buscador-contacto.filtro.tpl.html',
	    link: function($scope){
			$scope.returnItemsFilter = function(){
				//console.log("contactsFiltered || "+JSON.stringify($scope.contactsFiltered));
	       		$scope.contactsResult($scope.contactFilteredFn());
	 		};
		}
	  };
	});

}());
(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.filtro').service('filtroService', function () {

	/*
	      this.getFullname = function(customer){return customer.firstName+ ' ' + customer.lastName;};
	  
	      this.basePath={};
	      this.setBasePath = function(path) {basePath=path;};
	      this.getBasePath = function() { return basePath;}
	      */
	  });

}());

(function () {

    'use strict';	

	angular.module('proteo.ui.buscador-contacto.visor',['pascalprecht.translate'])
		.config(['$translateProvider', function ($translateProvider) {
			// custom code 
	}]);
}());
(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.visor').controller('buscadorContactoVisorCtrl', function($scope,$http) {
		console.log("buscadorContactoVisorCtrl");
	});

}());

(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.visor').directive('buscadorContacto.visor',function() {
	  return {
	    restrict	: 	"E",
		scope: {
			showContacts : '='
		},
	    controller 	: 	'buscadorContactoVisorCtrl',
	    templateUrl : 	'./bower_components/proteo.ui.buscador-contacto.visor/dist/proteo.ui.buscador-contacto.visor.tpl.html',
	  };
	});

}());
(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto.visor').service('visorService', function () {

		/*
		this.getFullname = function(customer){return customer.firstName+ ' ' + customer.lastName;};

		this.basePath={};
		this.setBasePath = function(path) {basePath=path;};
		this.getBasePath = function() { return basePath;}
		*/
	
	});

}());

/* Buscador-Contacto Controller */
(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto').controller('buscadorContactoCtrl', function($scope, $http) {
		// Code fo Controller
		/*            $scope.contacstList ={};*/
            $scope.contactsToSearch = function(valueDirective){
                //console.log("ValueDirective >> "+JSON.stringify(valueDirective));
                $scope.contacstList = valueDirective;
                $scope.contacstToShow = $scope.contacstList;
                //console.log("$scope.contacstToShow >> "+JSON.stringify($scope.contacstList));
            };
            
/*            $scope.$watch('contacstList', function(){
                $scope.contacstToShow = $scope.contacstList;
            });*/
	});

}());
/* END Buscador-Contacto Controller */

/* Buscador-Contacto Directive */
(function () {
    'use strict';

	angular.module('proteo.ui.buscador-contacto').directive('buscadorContacto',function() {
	  return {
		restrict	: 	"E",
	    controller 	: 	'buscadorContactoCtrl',
	    templateUrl : 	'./bower_components/proteo.ui.buscador-contacto/dist/proteo.ui.buscador-contacto.tpl.html',
	  };
	});
}());
/* END Buscador-Contacto Directive */

/* Todo Filter */
/* Buscador-Contacto Module */
(function () {

    'use strict';	

	angular.module('proteo.ui.buscador-contacto',['pascalprecht.translate'])
		.config(['$translateProvider', function ($translateProvider) {
			// custom code 
	}]);
}());
/* END Buscador-Contacto Module */
