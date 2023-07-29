document.querySelector('.btn-mob').addEventListener('click',function (e) {

    if(document.querySelector('.collapse1').style.display=='none'){
        document.querySelector('.collapse1').style.display='block';
    }
    else
    {
        document.querySelector('.collapse1').style.display='none';
    };
})


if(screen.width<767){
    let nodeList=document.querySelectorAll('header a');
    nodeList.forEach(i=>{
    i.addEventListener('click',function(e){
        document.querySelector('.collapse1').style.display='none';
    })
})
}

document.querySelectorAll('.slide').forEach(i=>{
    i.addEventListener('click',function(e){
        document.querySelectorAll('.slide').forEach(j=>{ j.classList.remove("active")});             
        this.classList.add("active");
    })
})

function scrolling(){
    if(window.scrollY>200){
        document.querySelector('.btn').style="opacity:1;";
    }
    else
    document.querySelector('.btn').style="opacity:0;";
}

window.addEventListener("scroll", scrolling);

document.querySelector('.btn').addEventListener('click',function(){
    window.scrollTo(top);
})
