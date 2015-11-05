/* Todo Module */
angular.module("proteo.ui.filter-contact", []).controller("filterContactCtrl",  function($scope) {

		console.log("that is of Controller of Filter");
		$scope.filter={};

})
.directive("filterContact", function() {

	console.log("that is of Directive Filter");
	return {
		//restrict: "AE",
		scope: {
			filterCallback : "="
		},
		controller : 'filterContactCtrl',
		templateUrl: './bower_components/proteo.ui.filter-contact/src/proteo.ui.filter-contact.tpl.html',
		link: function($scope){
			// del grid-contact para volver a crear con los nuevos datos
			$scope.doHideGrid = function(){
				var myEl = angular.element( document.querySelector( 'grid-contact' ) );
				myEl.remove();
			};

			$scope.somethingHappend = function(){
				//$scope.doHideGrid();
	       		$scope.filterCallback($scope.filter);
	 		};
		}
	}

});
/* Todo Filter */