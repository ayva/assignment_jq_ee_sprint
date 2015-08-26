
function moveCallback(event){
     box();
  }

function box(){
      $('#box').css({
      'left': event.clientX-50,
      'top': event.clientY-50,
      'height': '100px',
      'width': '100px',
      'border': '6px solid white',
      'position' : 'absolute'
    });
  }

function enterCallback(){
  $('img').after('<div id="box"></div>');
  $(this).mousemove( moveCallback );
}

$('#image-container').mouseenter(enterCallback);

$('#image-container').click(function(){
    $(this).off('mousemove', moveCallback).off('mouseenter', enterCallback);

  });

$('#image-container').mouseleave(function(){
  $('#box').remove();
});

