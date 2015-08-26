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

    if ($('#person-selector').length === 0) {
      $('#box').after('<ul id="person-selector"><li>Reports</li><li>Search</li><li>Graphs</li></ul>');
      // $('#box').css({'height': '150px'});
      $('#person-selector').css({ 'width': '100px',
                                  'background-color': 'white',
                                  'position' : 'absolute',
                                  'left': event.clientX-50,
                                  'bottom' : event.clientY-50
                                });
    }
});

// $('#image-container').mouseleave(function(){
//   $('#box').remove();
//   $('#person-selector').remove();
// });

$('#person-selector').children().mouseenter(function(){
  $(this).css("background-color","green");
  console.log(this);
  $(this).click(function(){
    $(this).siblings().remove();
  });
}).mouseleave(function(){
  $(this).css("background-color","white");
});

$('select').hover(function(){
    var count = $(this).children().length;
    $(this).attr('size', count);
     $(this).slideUp(3000);
});


