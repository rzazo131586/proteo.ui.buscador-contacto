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
