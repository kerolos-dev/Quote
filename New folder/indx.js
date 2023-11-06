var pproductionclick =[
"p You miss 100% of the shots you don't take.","The best revenge is massive success.","Resentment is like drinking poison and waiting for your enemies to die.",
"Do not take life too seriously. You will not get out alive."

]
var pproductionclicktow =[
    "The best revenge is massive success","Resentment is like drinking poison and waiting for your enemies to die.","The best revenge is massive success.","--Elbert Hubbard"
    
    ]



function item(){
  
    var x=Math.floor(Math.random()*5)
      document.getElementById('click').innerHTML=pproductionclick[0,x];
      document.getElementById('clicktow').innerHTML=pproductionclicktow[0,x];

}