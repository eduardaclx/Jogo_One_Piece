var jump = false

function jump1(){
    var player = document.getElementById("player")
    var obstaculo = document.getElementById("obstaculo")

    if(player.className != "jump"){
        player.classList.add("jump")
        setTimeout(()=>{
            player.classList.remove("jump")
            jump=false
        }, 800)

        function dead() {
            var obstaculo1 = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"))

            if(obstaculo1 < 20 && jump == false){
                alert("game over")
            }
        }
        // setInterval(dead, 80)
    }
}