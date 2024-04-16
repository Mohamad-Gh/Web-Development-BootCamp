/* printing img source*/
console.log($("img").attr("src"))

/* changing attr of anchor tag*/
$("a").attr("href", "https://www.yahoo.com")


$("button").click(function(){
    $("h1").css("color", "purple")
})



$("input").keypress(function(event){
$("h1").html(`${event.key}`)
})