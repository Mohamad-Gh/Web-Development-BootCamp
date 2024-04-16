var count = 0;
var gamePattern = [];
var userClickPattern=[];
const list = ["red", "yellow", "blue", "green"];


function pressed(butn){
    $(`.${butn}`).addClass("pressed");
    setTimeout(function(){
        $(`.${butn}`).removeClass("pressed")
    },50);
    sound = new Audio(`./sounds/${butn}.mp3`)
    sound.play()
}

function random(){
    let item = Math.floor(Math.random()*4);
    count++;
    $("h1").text(`Level ${count}`);
    gamePattern.push(list[item]);
    pressed(list[item]);
    userClickPattern=[];
}


function over(){
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over")
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 50)

    count = 0;
    gamePattern = [];
    userClickPattern=[];
    overSound = new Audio("./sounds/wrong.mp3")
    overSound.play( )
    
}

function check(){
    if(userClickPattern.length == gamePattern.length){
        if (gamePattern[count-1]==userClickPattern[count-1]){
            setTimeout(random, 700);
        }else{
            over();
            return false
        }
    }else if(userClickPattern.length < gamePattern.length){
        for (var i=0; i < userClickPattern.length; i++){
            if (gamePattern[i]==userClickPattern[i]){
                continue;
            }else{
                over();
                return false;
            }
        }
    }else{
        over();
        return false;
    }    
}

$(document).keypress(function(event){
    if(event.key!="" && count==0){
        random();
    }
})

$(".btn").click(function(event){
    pressed(event.target.id);
    userClickPattern.push(event.target.id);
    check();
})