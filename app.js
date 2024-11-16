var player1name
var player2name

function windowshift(){
    player1name=document.getElementById("player-1").value
    player2name=document.getElementById("player-2").value
if(player1name!=="" && player2name!==""){
    document.getElementById("login-page").classList.add("d-none")
    document.getElementById("main").classList.remove("d-none")
    document.getElementById("player1name").innerHTML=`${player1name}`
    document.getElementById("player2name").innerHTML=`${player2name}`
    
}else{
    alert("enter the values")
}

}
  
var player1move=5

 window.onkeydown = function(){
    console.log(event.key)
    console.log(event.keyCode)

    if(event.keyCode===39){
        player1move+=15
        document.getElementById("image1").style.left= player1move + "px"
    }
     if(event.keyCode===37){
        player1move-=15

        document.getElementById("image1").style.left= player1move + "px"

    }
    
    if(event.keyCode===36){
        player1move+=15
        document.getElementById("image2").style.right= player1move + "px"
    }
     if(event.keyCode===33){
        player1move-=15

        document.getElementById("image2").style.right= player1move + "px"

    }
    if(event.keyCode===68){
        document.getElementById("image1").src="assets/iori-cv-kick.gif"
        setTimeout(function(){
            document.getElementById("image1").src="assets/kyo94stance.gif"
        },1000)
    }
 }

