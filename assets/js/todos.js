// Check Off Specific Todos By Clicking
$('li').click(function() {
	$(this).toggleClass('completed');
});

//Click on X to delete Todo
$('span').click(function(event){
	//'this' is refering to the span
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //'this' is referring to the 'li', not the span!
	})
	event.stopPropagation();
});
