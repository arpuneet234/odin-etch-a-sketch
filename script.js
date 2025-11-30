const container=document.querySelector("#container")
console.log(1)
 for(let i=0;i<256;i++){
 const div=document.createElement("div")
 div.addEventListener("mouseenter", (e)=>{ e.target.style.backgroundColor ='black'})
 container.appendChild(div)
 div.style.width="40px";
 div.style.height="40px";
 
 div.textContent=i+1;
 }

 div.addEventListener("mouseenter",)


