const cartbut = document.querySelectorAll('.addcart');
let arrconv = Array.from(cartbut)
arrconv.forEach(function(elem) { 
    elem.addEventListener("click", async function(){
        this.classList.toggle("green");
        if(this.classList.contains("green")){
            let red = document.querySelector(".confirm");
            red.classList.toggle("dropdown");
            await new Promise((resolve) => setTimeout(resolve, 3000));
            red.classList.toggle("dropdown");

        }else{
            let green = document.querySelector(".confirmout");
            green.classList.toggle("dropdown");
            await new Promise((resolve) => setTimeout(resolve, 3000));
            green.classList.toggle("dropdown");
        }
    })
});

