// $('div').css({
//   "background-color": "green"
// })

// $('button').click(function(){
//   if ($("body").attr("style")=="background-color: green;"){
//     $("body").removeAttr('style')
//   }
//   else{
//     $("body").css("background-color", "green")
//   }
// }
// )


// $("button").click(function(){
//   $("div").slideDown(1000)
//   $("div").slideUp(1000)
//   $("div").slideToggle(1000)
//   $("div").fadeIn(1000)
//   $("div").fadeOut(1000)
//   $("div").fadeTo(1000)
//   $("div").animate({fontSize: "1.3em"}, 1000);
//   $("div").animate({marginLeft: "300px"}, 5000);
//   $("div").animate({marginTop: "50px"}, 1000);
//   $("div").animate({borderRadius: "50px"}, 1000);
//   $("div").animate({fontSize: "1em"}, 1000);
//   $("div").animate({marginLeft: "0px"}, 1000);
//   $("div").animate({marginTop: "0px"}, 1000);
//   $("div").animate({width: "100%"}, 1000);
// })




async function film(){
  let url ="https://api.github.com/users/vstyoma";
  let response = await fetch(url);
  let answer=await response.json();

  alert(answer.login)

}
