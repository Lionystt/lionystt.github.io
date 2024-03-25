//Om Namah Shivaay
class Calculator{
  constructor(){
    this.calBody = document.getElementById("calculatorBody");
    this.calScreen1 = document.getElementById("calculatorScreen1");
    this.calScreen1.contentEditable = true;
    this.calScreen2 = document.getElementById("calculatorScreen2");
    this.calButtons = document.getElementById("calculatorButtons");
    this.buttonArray = ["AC", "(",")", "÷","7","8","9","×", "4","5","6","-","1","2","3", "+","0",".","CLEAR", "=", "log", "sin", "cos", "tan", "y<sup>x</sup> or ^", "sinh", "cosh", "tanh", "π", "e",];
    this.numArray = ["7","8","9","4","5","6","1","2","3","0"];
    this.opArray = ["÷","×","-","+","^","%","!","√"];
    this.constantsArray = ["π", "e", ]
    this.diffArray = ["AC","(",")","÷","×","-","+"]
    for(let i in this.buttonArray){
      this.createButtons(this.buttonArray[i], this.buttonArray[i], "calBtns");
    }
    for(let i of this.diffArray){
      document.getElementById(i).classList.add("differents");
    }
    document.getElementById("=").style.backgroundColor = "#b0caff";
    this.calBtnss = document.querySelectorAll(".calBtns");
   for(let j of this.calBtnss ){
  
    switch(j.innerHTML){
      case "AC":
        j.addEventListener("click",()=>{
          this.calScreen1.innerHTML = "";
        });
        break;
      case "CLEAR":
        j.addEventListener("click", ()=>{
          this.calScreen1.innerHTML = this.calScreen1.innerHTML.slice(0,-1);
        });
        break;
      case "=":
        j.addEventListener("click",()=>{
          //alert("did not work");
    this.MainWork();
         // alert("worked");
        });
        break;
      case "y<sup>x</sup> or ^" :
        j.addEventListener("click", ()=>{
          this.calScreen1.innerHTML += "^";
        })
        break;
      case "yx" :
        j.addEventListener("click", ()=>{
          this.calScreen1.innerHTML += "^";
        })
        break;
      
      default:
        j.addEventListener("click", ()=>{
          this.calScreen1.innerHTML += j.innerText;
        })
    }
    }
  
    
  }
  createButtons(btnName, btnId, btnClass){
    let btn = document.createElement("button");
    btn.innerHTML = btnName;
    btn.id = btnId;
    btn.classList.add(btnClass);
    this.calButtons.appendChild(btn);
  }
  addClickListener(){
    for(let i =0;i<(this.buttonArray.length-1); i++){
      document.getElementById(i).addEventListener("click", ()=>{
        this.calScreen1.innerText +=this.buttonArray[i];
      })
    }
  }
  MainWork(){
    let a = this.calScreen1.innerHTML;
    let obj = {
    /*  "sin": "Math.sin",
      "cos": "Math.cos",
      "tan": "Math.tan",*/
      "yx": "^",
    /*  "sinh": "Math.sinh",
      "cosh": Math.cosh,
      "tanh": Math.tanh,
      "π": Math.PI,
      "log": Math.log,
      "e": "Math.E",
      "×": "*",
      "÷": "/"*/
      
    }
    let obj2 = {
      "^": "**",
      "÷": "/",
      "×": "*",
      "sin": "Math.sin",
      "cos": "Math.cos",
      "tan": "Math.tan",
      "sinh": "Math.sinh",
      "cosh": "Math.cosh",
      "tanh": "Math.tanh",
      "π": "Math.PI",
      "log": "Math.log",
      "e": "Math.E",
    
    }
    for(let  [key, value] of Object.entries(obj)){
 a =   a.replace(key, value);
     // alert(r, obj[r]);
    }
    //alert(eval(a));
   this.calScreen1.innerHTML = a; 
    for(let [key2, value2] of Object.entries(obj2)){
      a = a.replace(key2, value2);
    }
    this.calScreen2.innerHTML = eval(a);
   // alert(eval(a));
  }
  MainWork2(){
    document.body.onclick = ()=>{
    //  alert("done!")
    //  Test();
      if(this.calScreen1.innerHTML === ""){
        this.calScreen1.innerHTML = "";
        this.calScreen2.innerHTML = "";
      }else{
      this.calScreen2.innerHTML =  eval(this.calScreen1.innerHTML);
       this.MainWork();
        }
    }
  }
}
function Test(){
  //alert(Math[sin])
  //for(let [key, value] of Object.entries(Math)){
    //alert(key, value);
   // document.body.innerHTML = [key, value];
  alert();
  alert("done")
  let a = "";
  alert();
  for(let i in Math){
    a += `${i} === ${Math.i}<br>`;
   // alert(i, Math.i);
  
  }
  console.dir(Math); 
  document.body.innerHTML = a;
}
try {
let cal = new Calculator();
cal.MainWork2();
//alert(Math.PI)

} catch (error) {
  alert(error);
}

