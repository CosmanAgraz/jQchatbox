function sendMessage()
{
    const $msg = $("input#user-name").val() + ": " + $("input#user-message").val();
    const $textColor = $("input#user-message").css("color");
    const $newMessage = $("<p>", {class: "Message", text: $msg, style: `color: ${$textColor}`});
    
    $("#chatbox").append($newMessage);
    $("input#user-message").val("");
}

function colorSwap(colorbox)
{
    const $color = $(colorbox).css("background-color");
    $("input#user-message").css("color", $color);
    
}

$(document).ready( () => {
    $("input#user-message").keypress( (event) => {
        if (event.keyCode == '13')
        {
            sendMessage();
        }
    });

});