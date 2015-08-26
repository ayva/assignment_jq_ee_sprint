//Count amount of characters left
var counter = function(str,limit){
  return (limit - str.length) + ' chars remain';
};

//el represent this el we called keyup on
var numberRemain = function(limit, el) {
  $(el).next().text(counter($(el).val(),limit));
};

//Add p after all inputs
$('input').after('<p></p>');
$('textarea').after('<p></p>');

$('#textfield').keyup(function() {
  numberRemain(32, this);
});

$('input[type=password]').first().keyup(function() {
  numberRemain(16, this);
});

$('textarea').keyup(function() {
  numberRemain(140, this);
});

// Add information after password confirmation
// Check if password confirmation matches password
var checkPwd = function(original, confirmation) {
  if ($(confirmation).val().length === 0) {
    $(confirmation).next().text("");
  } else if (original !== $(confirmation).val()) {
    $(confirmation).next().text("Password confirmation does not match");
  } else {
    $(confirmation).next().text("");
  }
};

$('#password-confirmation').keyup(function() {
    checkPwd($('input[type=password]').first().val(), this);
  }
);

// Check validations on submitting form
$('input[type=submit]').click(function(event){
  event.preventDefault();
  validateParams();
  }
);

var validateParams = function() {
  validatePassword();
  validateTextBox();
  validateTextArea();
};

var validateTextBox = function() {
  if ($('#textfield').val().length < 4 || $('#textfield').val().length > 32){
      $('#textfield').css("border", "red solid 1px")
                     .next().text("Length must be between 4-32 characters");
  }
};

var validateTextArea = function() {
  if ($('textarea').val().length < 4 || $('textarea').val().length > 140){
        $('textarea').css("border", "red solid 1px")
                     .next().text("Length must be between 4-140 characters");
    }
};

var validatePassword = function() {
  if ($('input[type=password]').val().length < 6 || $('input[type=password]').val().length > 16) {
      $('input[type=password]').css("border", "red solid 1px")
                               .next().text("Length must be between 6-16 characters");
  }
};



