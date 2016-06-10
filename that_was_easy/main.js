function sayItWasEasy()
{
    var thatwaseasy = new Audio("that_was_easy.mp3");
    thatwaseasy.play();
}
$("#easy").on("click", sayItWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event)
{
    if(event.keycode == 32)
    {
        $("#easy").trigger("click");
    }
}