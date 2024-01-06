let input=document.querySelector(".text");
let add=document.querySelector(".add");
// sand()


function sand(){
   
    if(input.value==""){
        alert("pls enter your task");
    }else{
        let newelement=document.createElement("li");
   newelement.innerHTML=`<span class="inputText">${input.value} </span><i class="fa-solid fa-trash"></i>` ;
   add.appendChild(newelement);
   input.value="";
    newelement.querySelector("i").addEventListener("click",move)
        function move(){
            newelement.remove();
        }
    }
   

}
