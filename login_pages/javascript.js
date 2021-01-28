

function onclickbtn(){
    var btnregister=document.getElementById("inputbtnsid");
    var cardview=document.getElementById("cardviewid");
    var cardview2=document.getElementById("cardviewid2");

    cardview.style.transform="rotate(20deg)";
    cardview.style.top="780px";
    setTimeout(function(){
        cardview.style.transition="none";
        cardview.style.top="10%";
        cardview.style.transform="rotate(0deg)";
        cardview.style.zIndex=-2;
        cardview2.style.zIndex=0;

    },2000);   
    cardview.style.transition="all 2s";

}


function onclickbtn2(){
    var btnregister=document.getElementById("inputbtnsid2");
    var cardview=document.getElementById("cardviewid");
    var cardview2=document.getElementById("cardviewid2");

    cardview2.style.transform="rotate(20deg)";
    cardview2.style.top="780px";
    setTimeout(function(){
        cardview2.style.transition="none";
        cardview2.style.top="10%";
        cardview2.style.transform="rotate(0deg)";
        cardview2.style.zIndex=-2;
        cardview.style.zIndex=0;

    },2000);   
    cardview2.style.transition="all 2s";

}