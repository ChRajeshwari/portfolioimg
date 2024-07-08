const btns=document.querySelectorAll(".buttons button");
const cards=document.querySelectorAll(".cards .card");




btns.forEach(button => button.addEventListener("click",function(e){
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");


    cards.forEach(card => {
        card.classList.add("hide");
        if((card.dataset.name === e.target.dataset.name)||(e.target.dataset.name==="all")){
            card.classList.remove("hide");
            console.log(this)

        }
    });
    
}));












/*const filtercards= e => {
    act.classList.remove("active");
    e.target.classList.add("active");


    cards.forEach(card => {
        card.classList.add("hide");
       if(card.data.name === e.target.data.name || e.target.data.name === "all"){
        card.classList.remove("hide");
       }
    });

};



btns.forEach( button=> button.addEventListener("click", filtercards));*/