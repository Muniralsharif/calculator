


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
const result = document.querySelector("h1");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");

// const numbers = document.querySelectorAll(".numx");
// for(var i=0;i<numbers.length;i++)
// {numbers[i].addEventListener('click',function(event){



//     result.innerText+=event.srcElement.innerText;



// });

// }
backspace.addEventListener('click',function(){


result.innerText=result.innerText.substring(0, result.innerText.length-1);








});


zero.addEventListener('click',function(){

    
    result.innerText+=0;
    
    
    });
    
    one.addEventListener('click',function(){
    
    
    result.innerText+=1;
    
    
    });
    two.addEventListener('click',function(){
    
    
    result.innerText+=2;
    
    
    });
    three.addEventListener('click',function(){
    
   
    result.innerText+=3;
    
    
    });
    four.addEventListener('click',function(){
    
    
    result.innerText+=4;
    
    
    });
    five.addEventListener('click',function(){
    
    result.innerText+=5;
    
    
    });
    six.addEventListener('click',function(){
    
    
    result.innerText+=6;
    
    
    });
    seven.addEventListener('click',function(){
    
    
    result.innerText+=7;
    
    
    });
    eight.addEventListener('click',function(){
    
   
    result.innerText+=8;
    
    
    });
    nine.addEventListener('click',function(){
    
 
    result.innerText+=9;
    
    
    });
    dot.addEventListener('click',function(){
        console.log("dot pressed");
   var  cDot=".";
    dotCheck(cDot);
    
    
    
    });



var divide=document.querySelector(".divide");
var multiply=document.querySelector(".multiply");
var subtract=document.querySelector(".subtract");
var add=document.querySelector(".add");
var equal=document.querySelector(".ae");

divide.addEventListener('click',function(){ 

opp="/";
checkOpAdd(opp);

   
});
multiply.addEventListener('click',function(){

opp="*";
checkOpAdd(opp);


});
subtract.addEventListener('click',function(){

opp="-";
checkOpAdd(opp);


});
add.addEventListener('click',function(){

opp="+";
checkOpAdd(opp);


});

equal.addEventListener('click',function(){
    // read from screen :)
    var str='';
    var s='';
    var lastResult='';
    str=result.innerText;
    var arr1=[];
    var arr2=[];

for(var i=0;i<str.length;i++)
{ if(str[i]==='+'||str[i]==='-'||str[i]==='*'||str[i]==='/')
     {
       arr1.push(s);
       arr2.push(str[i]);
     
     s='';
     }
     else
     s=s+str[i];


}
arr1.push(s);
// retrive and calculate the result :()
for(var i=0;i<arr2.length;i++)
{
    if(arr2[i]==='+')
    arr1[i+1]=Number(arr1[i])+Number(arr1[i+1])
    else if(arr2[i]==='-')
    arr1[i+1]=Number(arr1[i])-Number(arr1[i+1])
    else if(arr2[i]==='*')
    arr1[i+1]=Number(arr1[i])* Number(arr1[i+1])
    else if(arr2[i]==='/')
    arr1[i+1]=Number(arr1[i])/Number(arr1[i+1])

    lastResult=(arr1[arr1.length-1]);
    
    



}
result.innerText=lastResult;




});

clear.addEventListener('click',function(){

    result.innerText='';
    
     opp="";








});
function checkOpAdd(opp){
    var strx=result.innerText;
if(strx.charAt(strx.length-1)==='+'||strx.charAt(strx.length-1)==='-'||strx.charAt(strx.length-1)==='*'||strx.charAt(strx.length-1)==='/')
{

    
    strx = strx.slice(0, -1) + opp;
    result.innerText=strx;


}else{
    
    result.innerText+=opp;

     }

}
function dotCheck(cDot)
{
var strx=result.innerText;

    if(strx.charAt(strx.length-1)!='.'||strx.contains("\\."==false))
    {
        result.innerText+=cDot;
        
        
    
    
    }else{
        
        strx = strx.slice(0, -1) + cDot;
        result.innerText=strx;
    
         }
    
    }



















