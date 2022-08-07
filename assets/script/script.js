$(".login").click(function(){
    $(".main-user-login").slideDown(200);
});
$("#close-user-login").click(function(){
    $(".main-user-login").slideUp(200);
});
$(".register").click(function(){
    $(".main-user-register").slideDown(200);
});
$("#close-user-register").click(function(){
    $(".main-user-register").slideUp(200);
});
$(".user-login-mobile").click(function(){
    $(".main-user-login").slideDown(200);
});
$(".user-register-mobile").click(function(){
    $(".main-user-register").slideDown(200);
});

function openNav() {
    document.getElementById("myNav").style.width = "100px";
    document.getElementById("myNav").style.display = "block";
    document.getElementById("myNav").style.transition = "all 0.3s";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}