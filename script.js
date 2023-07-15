document.querySelector('.btn-mob').addEventListener('click',function (e) {
    if(document.querySelector('.collapse1').style.display=='none'){
        document.querySelector('.collapse1').style.display='block';
    }
    else
    {
        document.querySelector('.collapse1').style.display='none';
    };
})


let nodeList=document.querySelectorAll('header a');
nodeList.forEach(i=>{
    i.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector('.collapse1').style.display='none';
    })
})

document.querySelectorAll('.slide').forEach(i=>{
    i.addEventListener('click',function(e){
        document.querySelectorAll('.slide').forEach(j=>{ j.classList.remove("active")});             
        this.classList.add("active");
    })
})


// let slide=document.querySelector(".slide");
        // slide.addEventListener("click",function(){
        //     slide.setAttribute("class","active");
        // })