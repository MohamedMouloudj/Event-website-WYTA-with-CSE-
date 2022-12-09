const UnderLine=document.querySelectorAll("nav a");
UnderLine.forEach((UnderLine)=>{
    UnderLine.addEventListener("click", ()=>{
        document.querySelector(".add").classList.remove("add");
        UnderLine.classList.add("add");
    })
});
