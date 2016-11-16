// Check Off Specific Todos By Clicking
$('li').click(function() {
    //if li is grey
    if ($(this).css('color') === 'rgb(128, 128, 128)') {
        $(this).css({
            color: 'black',
            'text-decoration': 'none'
        });
    } else {
        $(this).css({
            color: 'gray',
            'text-decoration': 'line-through'
        });
    }
});
