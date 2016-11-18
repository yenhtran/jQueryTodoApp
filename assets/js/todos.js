// Check Off Specific Todos By Clicking
$('ul').on('click','li',function() {
	$(this).toggleClass('completed');
});

//Click on X to delete Todo
$('ul').on('click', 'span',function(event){
	//'this' is refering to the span
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //'this' is referring to the 'li', not the span!
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var todoText = $(this).val();
		$(this).val('');
		$('ul').append('<li><span>X</span> ' + todoText + '</li>')
	}
})