var cuisineOne;
var cuisineTwo;
var cuisineThree;

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


$(document).on('click', '#submitCuisine', function() {
    alert("submit Button clicked");
    var data = { cuisineOne: cuisineOne, cuisineTwo: cuisineTwo, cuisineThree: cuisineThree};
    $.ajax({
        type: "POST",
        url: "/users/search",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            $('#restaurant').prepend('<img id="res" src="'+ data['image_url'] +'">')
            $('#restaurant').append('<br>');
            $('#restaurant').append('<b> Restaurant Name: '+data["name"]+'</b>');
            $('#restaurant').append('<br>');
            $('#restaurant').append('<b> Location: '+data["location"]["address1"]+'</b>');
            $('#restaurant').append('<br>');
            $('#restaurant').append('<b> City: '+data["location"]["city"]+'</b>');
            $('#restaurant').append('<br>');
            $('#restaurant').append('<b> Rating: '+data["rating"]+'</b>');
            $('#restaurant').append('<br>');
            $('#restaurant').append('<b> Price: '+data["price"]+'</b>');
            $('#restaurant').append('<br>');
            $('#restaurant').append('<b> Phone Number: '+data["display_phone"]+'</b>');
            console.log(data);
        }
    });
});

$(document).on('click', '#dropdownMenuButton1', function() {
    $("#one.dropdown-item").click(function(){
        cuisineOne = $(this).text()
        $("#dropdownMenuButton1").text($(this).text());
    });
});

$(document).on('click', '#dropdownMenuButton2', function() {
    $("#two.dropdown-item").click(function(){
        cuisineTwo = $(this).text();
        $("#dropdownMenuButton2").text($(this).text());
    });
});

$(document).on('click', '#dropdownMenuButton3', function() {
    $("#three.dropdown-item").click(function(){
        cuisineThree = $(this).text();
        $("#dropdownMenuButton3").text($(this).text());
    });
});

