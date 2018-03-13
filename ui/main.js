//counter code
var button=document.getElementById("counter");
var counter =0;

button.onclick=function(){
    
    
    //make a requeest to a end point
    
    //capture the response and store it in a varaible
    
    //render the varible in the correct span
    counter=counter +1;
    var span=document.getElementById("count");
    sapn.innerHtml=counter.toString();
    
};