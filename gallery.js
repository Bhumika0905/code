
    let btns=document.querySelectorAll(".menu-options");
let images=document.querySelectorAll(".item");

    btns.forEach((button)=>{
        button.addEventListener("click",(e)=>{
            e.preventDefault()
            const filter=e.target.dataset.filter

            images.forEach((items)=>{
                if (filter === "all"){
                    items.style.display="block"
                }else{
                    if(items.classList.contains(filter)){
                        items.style.display="block"
                    }
                    else{
                        items.style.display="none"
                    }
                }
            
            })
        })
    })
;