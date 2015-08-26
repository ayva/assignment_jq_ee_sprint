$('#dropdown').click(function(){
  if($('#dropdown ul ul').children().is(":visible")){
  $('#dropdown ul ul').slideUp(1000);
  } else {
  $('#dropdown ul ul').slideDown(1000);
  }
});

$('#dropdown ul ul').children().mouseenter(function(){
  $(this).css("background-color","green");
  $(this).click(function(){
    $('#dropdown h3').text($(this).text());
    $('#dropdown ul ul').slideUp(1000);
  });
}).mouseleave(function(){
  $(this).css("background-color","white");
});

$('select').hover(function(){
    var count = $(this).children().length;
    $(this).attr('size', count);
     $(this).slideUp(3000);
});

// $( 'select' ).hover(
//     function(){
//       event.preventDefault();
//       $(this).trigger("click");
//     }
// );

// $('option').hover(
//   function(){
//     event.preventDefault();
//     $(this).css("background-color","green")
//   })


