score=0;
cross=true;


audiogo = new Audio('gameover.wav');
audiome = new Audio('music.mp3');
setTimeout(()=>{
    audiome.play()
},1000)
document.onkeydown= function(e){
    console.log("key code is: ",e.keyCode)
    if(e.keyCode===38){
        yodha = document.querySelector('.yodha');
        yodha.classList.add('animateyodha');
        setTimeout(()=>{
            yodha.classList.remove('animateyodha')
        },700)
    }
    
    if(e.keyCode===39){
        yodha = document.querySelector('.yodha');
         yodhaX =parseInt(window.getComputedStyle(yodha, null).getPropertyValue('left'));
          yodha.style.left= yodhaX + 112 + "px";
               }
               if(e.keyCode===37){
                yodha = document.querySelector('.yodha');
                 yodhaX =parseInt(window.getComputedStyle(yodha,null).getPropertyValue('left'));
                  yodha.style.left=(yodhaX-112)+"px";
                       }
}

 setInterval(()=>{
        yodha=document.querySelector('.yodha');
        gameOver=document.querySelector('.gameOver');
        obstacle=document.querySelector('.obstacle');

        dx = parseInt(window.getComputedStyle(yodha, null).getPropertyValue('left'));
         dy = parseInt(window.getComputedStyle(yodha, null).getPropertyValue('top'));

        ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
        oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

         offsetX = Math.abs(dx-ox);
        offsetY = Math.abs(dy-oy);
         console.log(offsetX,offsetY);
        if(offsetX < 73 && offsetY < 52){
            gameOver.innerHTML="Game Over - Reload to start over";
            obstacle.classList.remove('obstacleani')
            audiogo.play();
            setTimeout(()=>{
                audiogo.pause();
            },3000)
        }
        else if(offsetX<145 && cross){
             score+=1;
             updateScore(score);
           cross=false;
             setTimeout(()=>{
                 cross=true;
            },1000);
            setTimeout(()=>{
             anidur= parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newdur=anidur-0.1;
            obstacle.style.animationDuration = newdur +'s';
            console.log('new animation duration',newdur)
        },500);
        }

    },10);
  function updateScore(score){
     scorecount.innerHTML="your score:"+score
 }
 