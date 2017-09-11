$( document ).ready(function() {
    $("#start").show();
    $("#cuisineSelection").hide();
});

function start(){
    var obj;
    var key;
    $.get('/users/start', function(data)
    {
      obj = JSON.parse(data);
      key = obj["key"];
      console.log(key);
      $("#key").html("<p>Your Group key is "+key+"</p>");
    });
    $("#enterKey").show();
    $("#submit").show();

}

//dynamic elements must be handled this way
$(document).on('click', '#submitButton', function() {
    $("#start").hide();
    $("#cuisineSelection").show();
    $("#enterKey").hide();
});

