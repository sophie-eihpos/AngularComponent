angular.module("myApp", [])
	.directive('markdown', function(){
		return{
			restrict: 'E',
			link: function(scrope, element, attrs){
				element.html('<div>TEST Test</div>')
			}
		}
	})