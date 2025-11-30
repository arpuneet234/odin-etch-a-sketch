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

 const randomize=document.querySelector("#randomize");
 randomize.addEventListener("click",fn2);
 function fn2(){
    let red=Math.random()*256;
    let green=Math.random()*256;
    let blue=Math.random()*256;
    div.addEventListener("mouseenter", (e)=>{ e.target.style.backgroundColor =`rgba(${red}, ${green}, ${blue}, 1)`})
 }

 const pg=document.querySelector("#pg");
 pg.addEventListener("click",fn3);
 function fn3(){
    div.addEventListener("mouseenter", (e) => {
    let dark = Number(e.target.dataset.dark) || 0; // start at 0
    dark += 0.1;                                   // darken a bit more
    if (dark > 1) dark = 1;                        // max = 1
    e.target.dataset.dark = dark;                  // save it
    e.target.style.backgroundColor = `rgba(0, 0, 0, ${dark})`;
});

 }

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
    if (num>100){
        num=100;
    }
    if(num<1){
        num=1;
    }
    createNew(num);
 }



