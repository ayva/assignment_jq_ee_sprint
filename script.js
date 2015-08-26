//Count amount of characters left
var counter = function(str,limit){
  return (limit - str.length);
}

//el represent this el we called keyup on
var numberRemain = function(limit, el) {
  $(el).next().text(counter($(el).val(),limit))
}

//Add p after all inputs
$('input').after('<p></p>')

$('#textfield').keyup(function() {
  numberRemain(32, this)
})

$('input[type=password]').keyup(function() {
  numberRemain(16, this)
})



