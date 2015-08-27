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

function person(){
  $('#person-selector').css({ 'width':'100px',
                                  'top': '100px',
                                  'left': '-6px',
                                  'background-color': 'white',
                                  'position' : 'absolute',
                                  'border': '6px solid white'

                                });
}
//Creates a box that moves with a mouse
$('#image-container').mouseenter(enterCallback);

//Freezes box and show choice on click
$('#image-container').click(function(){
    console.log("click on box and freeze it");
  //Turns off mousemove and mouseenter to prevent moving box
    $(this).off('mousemove', moveCallback).off('mouseenter', enterCallback);

  //Adds a list of choices
    if ($('#person-selector').length === 0) {
      $('#box').append('<div id="person-selector"><li>Person 1</li><li>Person 2</li><li>Person 3</li></div>');
      //Style the choices
      person();
    }
});

//Creates a box on click after clicking out
$('img').click(function(event){
    event.stopPropagation();
    console.log("click on img ");
    $('#box').remove();
    $('img').after('<div id="box"></div>');
    $('#image-container').mousemove(moveCallback);
});

$('#image-container').mouseleave(function(){
  $('#box').remove();
  $('#person-selector').remove();
});

$('body').on("mouseenter","#person-selector li", function(){
  console.log("allows to highlight green");
  $(this).css("background-color","green");
  $(this).click(function(){$(this).siblings().remove();});

  $('img').after($('#box').clone()).removeAttr('id').addAttr('id', 'fixed-box');

  }).on("mouseleave","#person-selector li", function(){
  $(this).css("background-color","white");
});




// $('select').hover(function(){

//     var count = $(this).children().length;
//     $(this).attr('size', count);
//      $(this).slideUp(3000);
// });


