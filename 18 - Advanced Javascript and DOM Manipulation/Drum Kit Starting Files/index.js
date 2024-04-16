// with out jQuery

// for (var i = 0; i < $(".drum").length; i++) {
//   $(".drum")[i].addEventListener("click", function () {
//     playSound(this.innerHTML);
//     animation(this.innerHTML);
//     console.log(this);
//   });

$(".drum").click(function () {
  playSound(this.innerHTML);
  animation(this.innerHTML);
  console.log(this);
});

$(document).keypress(function (event) {
  console.log(event);
  playSound(event.key);
  animation(event.key);
});
function playSound(key) {
  var sound = "";
  switch (key) {
    case "w":
      sound = "tom-1";
      break;
    case "a":
      sound = "tom-2";
      break;
    case "s":
      sound = "tom-3";
      break;
    case "d":
      sound = "tom-4";
      break;
    case "j":
      sound = "snare";
      break;
    case "k":
      sound = "crash";
      break;
    case "l":
      sound = "kick-bass";
      break;
  }
  var audio = new Audio(`./sounds/${sound}.mp3`);
  audio.play();
}

function animation(key) {
  //   var key = document.querySelector(`.${key}`);
  var keyClass = "." + key;
  $(keyClass).toggleClass("pressed");
  setTimeout(function () {
    $(keyClass).toggleClass("pressed");
  }, 100);
}
