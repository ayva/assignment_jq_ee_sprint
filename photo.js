function moveCallback(event){
    console.log("box styled and linked to move")
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
  console.log("div for box added")
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
//===============================================
//Creates a box that moves with a mouse
$('#image-container').mouseenter(enterCallback);

//Freezes box and show choise on click
$('#image-container').click(function(){
    console.log("click on box and freeze it")
  //Turns off mousemove and mouseenter to prevent moving box
    $(this).off('mousemove', moveCallback).off('mouseenter', enterCallback);

  //Adds a list of choises
    if ($('#person-selector').length === 0) {
      $('#box').append('<div id="person-selector"><li>Reports</li><li>Search</li><li>Graphs</li></div>');
      //Style the choises
      person();
    }
});

//
$('img').click(function(){
    console.log("click on img ");
    $('#box').remove();
    $('#image-container').mouseenter(enterCallback);

}).stopPropagation;


// $('#image-container').mouseleave(function(){
//   $('#box').remove();
//   $('#person-selector').remove();
// });

$('body').on("mouseenter","#person-selector li", function(){
  console.log("allows to highlight green");
  $(this).css("background-color","green");}
  ).on("mouseleave","#person-selector li", function(){
  $(this).css("background-color","white");
});



// $('select').hover(function(){

//     var count = $(this).children().length;
//     $(this).attr('size', count);
//      $(this).slideUp(3000);
// });


