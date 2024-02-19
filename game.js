
var gamePattern = [];

var buttonColours = ["red","blue","green","yellow"];

userClickedPattern = [];

var started = false;

level = 0;

$(document).keypress(function (){
    
    if(!started)
    {
        nextSequence();
        started = true;
    }
})

function nextSequence()
{
    level++;
    
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random()*4);

    var randomChoosenColour = buttonColours[randomNumber];
    playSound(randomChoosenColour);

    gamePattern.push(randomChoosenColour);
    
    $("#"+ randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    animatePress(randomChoosenColour);

    playSound(randomChoosenColour);
};  


$(".btn").click( function handler(){
    
    var userChoosenColour = $(this).attr("id");
    userClickedPattern.push(userChoosenColour);
    console.log(userClickedPattern);
    playSound(userChoosenColour);
    animatePress(userChoosenColour);

});

function playSound(randomChoosenColour){
    
    var audionow= new Audio("./sounds/" + randomChoosenColour + ".mp3");  
    audionow.play();

}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")
    }, 100);
}

function checkAnswer(curretLevel) {
    
}