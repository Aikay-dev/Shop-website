import { MAINSTORAGE } from "./store.js"




/* function bla(){
console.log("happy")
}

window.bla = bla
export {bla} */

let productName = document.querySelector("#inpi1")
let price = document.querySelector("#inpi2")
let category = document.querySelector("#inpi3")
let description = document.querySelector("#inpi4")
let image = document.querySelector("#inpi5")

export function sa(){
let fillform = document.querySelector(".picform")
fillform.addEventListener('submit', (event) => {
    event.preventDefault();
    if(productName.value != ""){
        if(price.value != ""){
            if(category.value != ""){
                if(description.value != ""){
                    if(image.value != ""){
                            let pname = productName.value
                            let pprice = price.value
                            let pcat = category.value
                            let pdesc = description.value
                            let pimg = image.value
                       var pack = [
                            pname,
                            pprice,
                            pcat,
                            pdesc,
                            pimg
                       ]
                       MAINSTORAGE.push(pack)
                        console.log(MAINSTORAGE)
                    }else{
                        alert("fill in the blanks")
                    }
                }else{
                    alert("fill in the blanks")
                }
            }else{
                alert("fill in the blanks")
            }
        }else{
            alert("fill in the blanks")
        }
    }else{
        alert("fill in the blanks")
    }
})
}

window.sa = sa

/* PREVENT FORM FROM RELOADING PAGE */
/* let fillform = document.querySelector(".picform")
fillform.addEventListener('submit', (event) => {
    event.preventDefault();

    if(productName.value != ""){
        if(price.value != ""){
            if(category.value != ""){
                if(description.value != ""){
                    if(image.value != ""){
                        final ()
                    }else{
                        alert("fill in the blanks")
                    }
                }else{
                    alert("fill in the blanks")
                }
            }else{
                alert("fill in the blanks")
            }
        }else{
            alert("fill in the blanks")
        }
    }else{
        alert("fill in the blanks")
    }
}) */


/* BUNDLE UP */

/* function final(){
    var pname = productName.value
    let pprice = price.value
    let pcat = category.value
    let pdesc = description.value
    let pimg = image.value
} */