let animateBtn = document.getElementById("animate-btn")
animateBtn.onclick = function(){
    let positon = 0
    let bird = document.getElementById("animate-bird")
    let interval = setInterval(animation,1)

    function animation(){
        if(positon==400){
            clearInterval(interval)
        }else{
            positon++
            bird.style.left = positon+"px"
            bird.style.top = positon+"px"
            // bird.style.rotate = positon+"px"
        }
    }
}