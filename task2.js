const LINK="https://coding-week-2024-api.onrender.com/api/data";

fetch(LINK).then(function(res){
    return res.json();
}).then(function(data){

    for(let i=0;i<4;i++){
        document.querySelector(`.btn${i}`).innerText = data[i].type;
        document.querySelector(`.text${i}`).innerText = data[i].headline;
        document.querySelector(`.th${i}`).innerText = data[i].author;
        document.querySelector(`.date${i}`).innerText = data[i].date;
    }

    document.querySelector(`#d0`).style.backgroundImage ="url(" + data[0].image + ")";
    document.querySelector(`#d1`).style.backgroundImage ="url(" + data[1].image + ")";
    document.querySelector(`#li1`).style.backgroundImage ="url(" + data[2].image + ")";
    document.querySelector(`#li2`).style.backgroundImage ="url(" + data[3].image + ")";

    for(let i=4;i<10;i++){
        document.querySelector(`#image${i}`).src = data[i].image;
        document.querySelector(`#head${i}`).innerText=data[i].headline;
        document.querySelector(`.date${i}`).innerText=data[i].date;
    }

    document.querySelector(`#d0`).onmouseover=()=>{
        document.querySelector(`#detail`).style.backgroundColor="rgb(8, 199, 247)";
        document.querySelector(`#detail`).style.border= "2px solid gold";
        document.querySelector(`#detail`).style.width= "700px";
        document.querySelector(`#heading1`).innerText=data[0].headline;
        document.querySelector(`#para`).innerText=data[0].content;
    }
    document.querySelector(`#d1`).onmouseover=()=>{
        document.querySelector(`#detail`).style.backgroundColor="rgb(8, 199, 247)";
        document.querySelector(`#detail`).style.border= "2px solid gold";
        document.querySelector(`#detail`).style.width= "700px";
        document.querySelector(`#heading1`).innerText=data[1].headline;
        document.querySelector(`#para`).innerText=data[1].content;
    }
    document.querySelector(`#li1`).onmouseover=()=>{
        document.querySelector(`#detail`).style.backgroundColor="rgb(8, 199, 247)";
        document.querySelector(`#detail`).style.border= "2px solid gold";
        document.querySelector(`#detail`).style.width= "700px";
        document.querySelector(`#heading1`).innerText=data[2].headline;
        document.querySelector(`#para`).innerText=data[2].content;
    }
    document.querySelector(`#li2`).onmouseover=()=>{
        document.querySelector(`#detail`).style.backgroundColor="rgb(8, 199, 247)";
        document.querySelector(`#detail`).style.border= "2px solid gold";
        document.querySelector(`#detail`).style.width= "700px";
        document.querySelector(`#heading1`).innerText=data[3].headline;
        document.querySelector(`#para`).innerText=data[3].content;
    }
    document.querySelector(`#latest4`).onmouseover=()=>{
        document.querySelector(`#detail`).style.backgroundColor="rgb(8, 199, 247)";
        document.querySelector(`#detail`).style.border= "2px solid gold";
        document.querySelector(`#detail`).style.width= "700px";
        document.querySelector(`#heading1`).innerText=data[4].headline;
        document.querySelector(`#para`).innerText=data[4].content;
    }
    document.querySelector(`#latest5`).onmouseover=()=>{
        document.querySelector(`#detail`).style.backgroundColor="rgb(8, 199, 247)";
        document.querySelector(`#detail`).style.border= "2px solid gold";
        document.querySelector(`#detail`).style.width= "700px";
        document.querySelector(`#heading1`).innerText=data[5].headline;
        document.querySelector(`#para`).innerText=data[5].content;
    }
    document.querySelector(`#latest6`).onmouseover=()=>{
        document.querySelector(`#detail`).style.backgroundColor="rgb(8, 199, 247)";
        document.querySelector(`#detail`).style.border= "2px solid gold";
        document.querySelector(`#detail`).style.width= "700px";
        document.querySelector(`#heading1`).innerText=data[6].headline;
        document.querySelector(`#para`).innerText=data[6].content;
    }
    document.querySelector(`#latest7`).onmouseover=()=>{
        document.querySelector(`#detail`).style.backgroundColor="rgb(8, 199, 247)";
        document.querySelector(`#detail`).style.border= "2px solid gold";
        document.querySelector(`#detail`).style.width= "700px";
        document.querySelector(`#heading1`).innerText=data[7].headline;
        document.querySelector(`#para`).innerText=data[7].content;
    }
    document.querySelector(`#latest8`).onmouseover=()=>{
        document.querySelector(`#detail`).style.backgroundColor="rgb(8, 199, 247)";
        document.querySelector(`#detail`).style.border= "2px solid gold";
        document.querySelector(`#detail`).style.width= "700px";
        document.querySelector(`#heading1`).innerText=data[8].headline;
        document.querySelector(`#para`).innerText=data[8].content;
    }
    document.querySelector(`#latest9`).onmouseover=()=>{
        document.querySelector(`#detail`).style.backgroundColor="rgb(8, 199, 247)";
        document.querySelector(`#detail`).style.border= "2px solid gold";
        document.querySelector(`#detail`).style.width= "700px";
        document.querySelector(`#heading1`).innerText=data[9].headline;
        document.querySelector(`#para`).innerText=data[9].content;
    }
   
});