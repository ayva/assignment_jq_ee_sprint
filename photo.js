$('img').mouseenter(function(){
  $('img').after('<div id="box"></div>');
  $(this).mousemove(function(event){
    console.log(event.clientX, event.clientY);
    $('#box').css({
      'left': event.clientX,
      'top': event.clientY,
      'height': '100px',
      'width': '100px',
      'border': '6px solid white',
      'position' : 'absolute'
    });
  });
});

$('img').mouseleave(function(){
  $('#box').remove();
});