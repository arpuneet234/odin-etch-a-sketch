const container=document.querySelector("#container")
createDiv(16);
function createDiv(num){
for(let i=0;i<num*num;i++){
 const div=document.createElement("div")
 div.addEventListener("mouseenter", (e)=>{ e.target.style.backgroundColor ='black'})
 container.appendChild(div)
 div.style.width=`${640/num}px`;
 div.style.height=`${640/num}px`;
 
 div.classList.add("child");
 }

}
 
 function createNew(num){
    const childDiv=document.querySelectorAll(".child");
    childDiv.forEach(function(element){element.remove()})
    createDiv(num);
 }



 const sqrs=document.querySelector("#sqrs");
 sqrs.addEventListener("click",fn);
 function fn(e){
    let num = prompt("Enter value from 1 to 100");
    createNew(num);
 }



