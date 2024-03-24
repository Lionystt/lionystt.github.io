class MyGame{
  constructor(){
    this.time = 100;
    this.gameOver = false;
    this.sc = 0;
    this.score = document.getElementById("score");
    this.go = document.getElementById("go");
    this.ball = document.getElementById("ball");
    this.obstacle = document.getElementById("obstacle"); 
    this.gameContainer = document.getElementById("gameContainer");
    this.ball.style.left = 0+"px";
    this.i = 0.45;
  }
  Random(x){
    return Math.floor(Math.random()*x);
  }
   GameLoop(){
    // alert("ghhg")
let loop =  setInterval(()=>{
 let gx = parseInt(window.getComputedStyle(this.ball).getPropertyValue("left"));
  let gy = parseInt(window.getComputedStyle(this.ball).getPropertyValue("top"));
  let ox = parseInt(window.getComputedStyle(this.obstacle).getPropertyValue("left"));
  let oy = parseInt(window.getComputedStyle(this.obstacle).getPropertyValue("top"));
  this.score.innerText = ` Score : ${Math.floor(this.sc)}`;
  this.sc += this.i
  if (Math.abs(ox - gx) <= 25 && Math.abs(oy - gy) <= 25) {
   // alert(this.gameOver);
    this.i = 0;
    this.gameOver = true;
    this.go.style.display= "block";
    clearInterval(loop);
    clearInterval(loop2);
    document.body.onclick = null;
    this.obstacle.classList.remove("obstacleMotion");
    this.ball.classList.remove("ballMotion"); 
    
   //   alert("loops cleared!")
    
   // alert(this.gameOver)
    
  
}
  
           //alert(random);
               //alert(random)
             
          
}, 10)    
     let loop2 = setInterval(()=>{
      // alert("h ")
       this.MoveObstacle();
       //alert("h na")
     },2111)
     if(this.gameOver){
       clearInterval(loop);
       clearInterval(loop2);
       //alert("loop cleared!")
       this.ball.classList.remove("ballMotion");
       document.body.onclick = null;
       this.obstacle.classList.remove("obstacleMotion");
     }

  }
    //RunLoop(){
//window.requestAnimationFrame(()=>this.GameLoop());
//}
AddClick(){
//console.log("Jlo"); 
document.body.onclick = ()=>{
  //this.ball.animate([{top: "60%"}, {top: "-100%"}, {top: "60%"}], {duration: 2000,
//iteration: 1})
 // alert(ball.style.top)
 // this.ball.style.top = "60%";
  this.ball.classList.add("ballMotion");
  setTimeout(()=>{
  this.ball.classList.remove("ballMotion");
},1000);
  }
}
   MoveObstacle(){
    let random= this.Random(10);
        
//document.body.innerHTML+=random;
           if(random%2 == 0 || random%5==0 || random%3==0){
   // alert(random);   
             this.obstacle.classList.add("obstacleMotion");
         setTimeout(()=>{
         this.obstacle.classList.remove("obstacleMotion");
       },1990);
       //this.MoveObstacle();
           }
     }
}
try {
  let game = new MyGame();
game.AddClick();
game.GameLoop();
} catch (error) {
  alert(error);
}

