function sendMessage()
{
    const $msg = $("input#user-message").val();
    const $newMessage = $("<p>", {class: "Message", text: $msg });
    
    $("#chatbox").append($newMessage);
    $("input#user-message").val("");
}
