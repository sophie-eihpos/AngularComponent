angular.module("myApp", [])
	.directive('markdown', function(){
		return{
			restrict: 'E',
			link: function(scrope, element, attrs){
				element.html('<div>Welcom to Angular</div>')
			}
		}
	})

function Clock($scope) {
	$scope.currentTime = new Date();
}