	angular.module('proteo.ui.buscador-contacto').service('buscadorContactoService', function () {
		//Receive JSON with items of filter
		this.getFilterParams = function(filter){
			return filter.name;
		};
	});
