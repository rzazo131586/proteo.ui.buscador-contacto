angular.module("proteo.ui.buscador-contacto", []).controller("buscadorContactotCtrl",  function($scope, $http) {

		console.log("Controller buscadorContactotCtrl");

		$scope.filter = {};
		$scope.contactsFiltered = [];

		// Init JSON-SERVER for consume REST Service JSON
		$http.get('http://localhost:3000/users').success(function(data) {
            $scope.contacts = data;
            $scope.contactsFiltered = data;
        });
        
        // Reset INPUTS & LIST constacts ( future : service )
        $scope.contactReset = function(){
        	// reasign data into contactsFiltered for reset list contacts
			$scope.contactsFiltered = $scope.contacts;
			// clean inputs by ngModel Filter
			$scope.filter = {
				'nickname' : '',
				'name' : '',
				'corporate' : ''
			}
        }

        // Validate if Inputs are empty && search into result service compare with filter
        $scope.contactFiltered = function (){
        	$scope.contactsFiltered = [];

        	for(var i = 0; i < $scope.contacts.length ; i++)
			{	
				if ($scope.filter.nickname == undefined && $scope.filter.name == undefined && $scope.filter.company == undefined){
					// no data in any input 
					$scope.contactsFiltered = $scope.contacts;
					return;
				}else{
					// validate its username like to name
					if( $scope.contacts[i].username.indexOf($scope.filter.username) != -1){
						$scope.contactsFiltered.push($scope.contacts[i]);
					}else{
						// validate if name lide to lastname
						if( $scope.contacts[i].name.indexOf($scope.filter.name) != -1){
							$scope.contactsFiltered.push($scope.contacts[i]);
						}else{
							// validate if company like corporate
							if( $scope.contacts[i].company.name.indexOf($scope.filter.company) != -1){
								$scope.contactsFiltered.push($scope.contacts[i]);
							}
						}
					}
				}
       	 	};
 		}
})
.directive("buscadorContacto", function() {

	console.log("Directive buscadorContacto");
	return {
		restrict: "AE",
		controller : 'buscadorContactotCtrl',
		templateUrl: './bower_components/proteo.ui.buscador-contacto/dist/proteo.ui.buscador-contacto.buscador.tpl.html'
	}

})
.directive("listadoContacto", function() {

	console.log("Directive listadoContacto");
	return {
		restrict: "AE",
		controller : 'buscadorContactotCtrl',
		templateUrl: './bower_components/proteo.ui.buscador-contacto/dist/proteo.ui.buscador-contacto.listado.tpl.html'
	}

});