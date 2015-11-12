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