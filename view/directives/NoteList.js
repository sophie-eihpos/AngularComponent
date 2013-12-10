Guidebook.directive('gbNoteList', function(){
	return {
		restrict: 'E',
		templateUrl: 'view/directives/noteList.html',
		scope: {
			show: '=',							// "=" pass teh value as-is, it's useful for arrays and functions
			notes: '=',							// "&" will render the content as an expression
			orderValue: '@orderBy',				// "@" will render the given information as a string
			onDelete: '=deleteNoteHandler'
		}
	};
});