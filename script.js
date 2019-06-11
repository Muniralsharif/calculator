

var num1='';
var num2='';
var opp="";

const zero=document.querySelector(".a0");
const one=document.querySelector(".a1");
const two=document.querySelector(".a2");
const three=document.querySelector(".a3");
const four=document.querySelector(".a4");
const five=document.querySelector(".a5");
const six=document.querySelector(".a6");
const seven=document.querySelector(".a7");
const eight=document.querySelector(".a8");
const nine=document.querySelector(".a9");
const dot= document.querySelector(".dot")
var result = document.querySelector("h1");
var clear = document.querySelector(".clear");



zero.addEventListener('click',function(){

    num1+=0;
    result.innerText+=0;
    
    
    });
    
    one.addEventListener('click',function(){
    
    num1+=1;
    result.innerText+=1;
    
    
    });
    two.addEventListener('click',function(){
    
    num1+=2;
    result.innerText+=2;
    
    
    });
    three.addEventListener('click',function(){
    
    num1+=3;
    result.innerText+=3;
    
    
    });
    four.addEventListener('click',function(){
    
    num1+=4;
    result.innerText+=4;
    
    
    });
    five.addEventListener('click',function(){
    
    num1+=5;
    result.innerText+=5;
    
    
    });
    six.addEventListener('click',function(){
    
    num1+=6;
    result.innerText+=6;
    
    
    });
    seven.addEventListener('click',function(){
    
    num1+=7;
    result.innerText+=7;
    
    
    });
    eight.addEventListener('click',function(){
    
    num1+=8;
    result.innerText+=8;
    
    
    });
    nine.addEventListener('click',function(){
    
    num1+=9;
    result.innerText+=9;
    
    
    });
    dot.addEventListener('click',function(){
        console.log("dot pressed");
    num1+=".";
    result.innerText+=".";
    
    
    });



var divide=document.querySelector(".divide");
var multiply=document.querySelector(".multiply");
var subtract=document.querySelector(".subtract");
var add=document.querySelector(".add");
var equal=document.querySelector(".ae");

divide.addEventListener('click',function(){
num2=num1;
num1=0;
opp="/";
result.innerText+=opp;

});
multiply.addEventListener('click',function(){
num2=num1;
num1=0;
opp="*";
result.innerText+=opp;

});
subtract.addEventListener('click',function(){
num2=num1;
num1=0;
opp="-";
result.innerText+=opp;

});
add.addEventListener('click',function(){
num2=num1;
num1=0;
opp="+";
result.innerText+=opp;

});

equal.addEventListener('click',function(){

if(opp==="+"){

    result.innerText=Number(num1)+Number(num2);

}else if(opp==="-"){

result.innerText=Number(num2)-Number(num1);


}else if(opp==="*"){

result.innerText=Number(num1)*Number(num2);


}else if(opp==="/"){

result.innerText=Number(num2)/Number(num1);


}



});

clear.addEventListener('click',function(){

    result.innerText='';
     num1='';
     num2='';
     opp="";








});

















