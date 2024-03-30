//Om Namah Shivaay
try{
class Calculator{
  constructor(){
    this.calBody = document.getElementById("calculatorBody");
    this.calScreen1 = document.getElementById("calculatorScreen1");
    this.calScreen1.contentEditable = false;
    this.calScreen1.readOnly = true;
    this.calScreen2 = document.getElementById("calculatorScreen2");
    this.calButtons = document.getElementById("calculatorButtons");
    this.calButtons1 = document.getElementById("calculatorButtons1");
    this.downBtn = document.getElementById("p");
    this.calButtons1.classList.add("calculatorButtons11");
    this.downBtn.classList.add("p2");
    
this.downBtn.onclick = ()=>{
      this.calButtons1.classList.toggle("calculatorButtons11");
   
  this.calButtons1.classList.toggle("animatedElem1");    this.calButtons1.classList.toggle("calculatorButtons12");
   this.downBtn.classList.toggle("p1"); 
      this.downBtn.classList.toggle("animatedElem2");
      this.downBtn.classList.toggle("p2");
    }
    this.classCollections = {
      buttonArray: ["AC", "(",")", "÷","7","8","9","×", "4","5","6","-","1","2","3", "+","0",".","CLEAR","=", /*"CLEAR", "log", "sin", "cos", "tan", "y<sup>x</sup> or ^", "sinh", "cosh", "tanh", "π", "e","!"*/],
      numArray: ["7","8","9","4","5","6","1","2","3","0"],
      opArray: ["÷","×","-","+","^","%","!","√"],
      constantsArray: ["π", "e", ],
      diffArray: ["AC","(",")","÷","×","-","+"],
      diffArray2: ["log","sin","cos","tan", "y<sup>x</sup> or ^","sinh","cosh", "tanh", "π","e", "!"],
      updatedText: {
      "yx": "^",
      },
      workingText: {
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
    }
    for(let i in this.classCollections.buttonArray){
      this.createButtons(this.classCollections.buttonArray[i], this.classCollections.buttonArray[i], "calBtns", this.calButtons);
    }
    for(let i of this.classCollections.diffArray){
      document.getElementById(i).classList.add("differents");
    }
    for(let i in this.classCollections.diffArray2){
      this.createButtons(this.classCollections.diffArray2[i], this.classCollections.diffArray2[i], "calBtns", this.calButtons1);  document.getElementById(this.classCollections.diffArray2[i]).classList.add("differents2");   
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
        });
//j.addEventListener("click", ()=>{
          //this.calScreen1.innerHTML += "^";
    //    })
        break;
      case "cosh":
j.addEventListener("click", ()=>{
          this.calScreen1.innerHTML += "cosh";
        })
      break;
      default:
        j.addEventListener("click", ()=>{
        //alert(window.getComputedStyle(j).getPropertyValue("left"));
          this.calScreen1.innerHTML += j.innerText;
        })
    }
    }
  
    
  }
  createButtons(btnName, btnId, btnClass, parentElem){
    let btn = document.createElement("button");
    btn.innerHTML = btnName;
    btn.id = btnId;
    btn.classList.add(btnClass);
    parentElem.appendChild(btn);
  }
  Factorial(x){
    let fact = 1;
    for(let k=1; k<=x; k++){
      fact*= k;
    }
    return fact;
  }
  Match(b, text, index){
    let a ="";
    let result= false
    for(let j of b){
      if(j== text[index]){
        a+=text[index];
        result= true;
        a+= this.Match(b, text, index-1)[0];
      }
    }
    return [a, index, text[index], result];
   }
    Search(Text, text){
      let result2= false;
  for(let i in Text){
   // let c="";
    if(Text[i]==="!"){
      let c="";
     alert(i);
    // alert(Match(tex, Text, i-1)) 
      result2 = true;
     c+= this.Match(text, Text, i-1)[0];
    
    if(c!=""){
   //alert(c);
      let d ="";
      for(let j=(c.length -1);j>=0;j--){
        d+=c[j];
      // Text = Text.replace(`${d}!`, `${Factorial(d)}
      }
    Text = Text.replaceAll(`${d}!`, `this.Factorial(${d})`);
    Text = Text.replaceAll(Text, this.Search(Text, text));
    }
  }
  }
    return Text;
  }
  
  FactorialCalculations(Text){
    let tex= "1234567890";
    let z = this.Search(Text, tex);
    return z;

  
  }

  MainWork(){
    try {
    let screen1text = this.calScreen1.innerHTML;
    for(let r in this.classCollections.updatedText){
 screen1text =   screen1text.replaceAll(r, this.classCollections.updatedText[r]);
     
      
    }
  
   this.calScreen1.innerHTML = screen1text; 
    for(let s in this.classCollections.workingText){
      screen1text = screen1text.replaceAll(s, this.classCollections.workingText[s]);
      
    }
      
     // alert(a);
    // alert(eval(a));
    //  alert(screen1text);
     screen1text = this.FactorialCalculations(screen1text);
      alert(screen1text);
      let toDisplayText = eval(screen1text);
   
   alert(toDisplayText);
    this.calScreen1.innerHTML = toDisplayText;
    this.calScreen2.innerHTML = " ";
      
    } catch (err){
    alert(err);
      this.calScreen2.innerHTML = "Error";
      this.calScreen1.innerHTML = "Error";
    }
   
  }
  MainWork2(){
    try{
    document.body.onclick = (e)=>{
     // alert(e.x, e.y);
      //alert(this.FactorialCalculations());
      if(this.calScreen1.innerHTML === ""){
        this.calScreen1.innerHTML = "";
        this.calScreen2.innerHTML = "";
      }else{
        let screen2text = this.calScreen1.innerHTML;
    
   this.calScreen2.innerHTML = screen2text; 
    for(let s in this.classCollections.workingText){
      screen2text = screen2text.replaceAll(s, this.classCollections.workingText[s]);
      
    }
     
    //  alert(screen1text);
      let toDisplayText2 = eval(screen2text);
   
   // alert(toDisplayText);
        
      this.calScreen2.innerHTML =  toDisplayText2;
        if(typeof toDisplayText2 !="number"){
        this.calScreen2.innerHTML = "Error";
        
        }
      // this.MainWork();
        }
    } 
    }catch(err){
     //alert(err);
      this.calScreen2.innerHTML = "Error";
    }
  
  }


}
let cal = new Calculator();
cal.MainWork2()
} catch (error) {
  alert(error);
}

                    
