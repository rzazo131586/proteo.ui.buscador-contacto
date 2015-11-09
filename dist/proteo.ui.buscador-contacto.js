/* Buscador-Contacto Module */
(function () {

    'use strict';	

	angular.module('proteo.ui.buscador-contacto',['pascalprecht.translate'])
		.config(['$translateProvider', function ($translateProvider) {
			// custom code 
	}]);
}());
/* END Buscador-Contacto Module */

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