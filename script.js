var counter = function(str){
  return (32 - str.length);
}
var numberRemain = function() {
  $('#info-about-text').text(counter($('#textfield').val()))
}

$('#textfield').keyup(numberRemain)



