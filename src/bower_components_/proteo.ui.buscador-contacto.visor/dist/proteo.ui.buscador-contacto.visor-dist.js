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
angular.module('proteo.ui.buscador-contacto.visor').run(['$templateCache', function($templateCache) {
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
