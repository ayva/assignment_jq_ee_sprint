var counter = function(str, limit){
  return (limit - str.length);
};

var numberRemain = function(limit, id) {
  $(id).text(counter($('#textfield').val(), limit));
};

$('#textfield').parent().add("<p> New </p>");
$('textarea').keyup(numberRemain(140, "text_area"));
// $('input[type=password]').keyup(numberRemain(16));


