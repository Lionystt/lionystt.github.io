//Om Namah Shivaay
try{
class Calculator{
  constructor(){
    this.calBody = document.getElementById("calculatorBody");
    this.calScreen1 = document.getElementById("calculatorScreen1");
    this.calScreen1.contentEditable = true;
    this.calScreen1.readOnly = true;
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
          this.calScreen2.innerHTML = "";
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
        j.addEventListener("click", ()=>{
          this.calScreen1.innerHTML += "^";
        })
        break;
      case "cosh":
j.addEventListener("click", ()=>{
          this.calScreen1.innerHTML += "cosh";
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
    try {
    let screen1text = this.calScreen1.innerHTML;
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
      "÷": "/"
      */
      
    }
    let obj2 = {
      "^": "**",
      "÷": "/",
      "×": "*",
      "sin(": "Math.sin(",
      "cos(": "Math.cos(",
      "tan(": "Math.tan(",
      "sinh(": "Math.sinh(",
      "cosh(": "Math.cosh(",
      "tanh(": "Math.tanh(",
      "π": "Math.PI",
      "log(": "Math.log(",
      "e": "Math.E",
    
    }
    for(let r in obj){
 screen1text =   screen1text.replaceAll(r, obj[r]);
     // alert(a);
      
    }
  //  alert(eval(a));
   this.calScreen1.innerHTML = screen1text; 
    for(let s in obj2){
      screen1text = screen1text.replaceAll(s, obj2[s]);
      
    }
      //alert(a);
     // alert(eval(a));
      let toDisplayText = eval(screen1text);
   // alert(screen1text);
    //alert(toDisplayText);
    this.calScreen1.innerHTML = toDisplayText;
      //this.calScreen1.innerHTML = b;
    } catch (err){
    //  alert(err);
      this.calScreen2.innerHTML = err;
    }
   // alert(eval(a));
  }
  MainWork2(){
    document.body.onclick = ()=>{
    //  alert("done!")
      alert(window.getComputedStyle(this.calScreen1).getPropertyValue("cursor"));
    //Test();
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
  try{
  let z = "";
//  alert();
  for(let i in Math){
    z += `${i} === ${Math[i]}\n`;
   // alert(i, Math.i);
  
  }
    alert(z)
  } catch(err){
    alert(err)
  }
  console.dir(Math); 
  document.body.innerHTML = z;
    
}

let cal = new Calculator();
//cal.MainWork2()
} catch (error) {
  alert(error);
}

                        
