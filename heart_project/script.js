const bodyE = document.querySelector("body")
bodyE.addEventListener("mousemove",(event)=>{

    const xpos= event.offsetX;//x axis location 
    const ypos =event.offsetY;//y axis location
    const spanEl = document.createElement("span");// to create another span
    spanEl.style.left = xpos + "px"; //for position of span
    spanEl.style.top = ypos + "px";//for position of span
    bodyE.appendChild(spanEl);
    const size = Math.random()*100;//random sizes 
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyE.appendChild(spanEl);//removing the them after some time 
    setTimeout(()=>{
        spanEl.remove();

    },1000);
});