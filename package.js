fetch("./storage.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.iphones)

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

                                    let str = pimg;
                                    let numberOfLetters = 12;
                                    str = str.split('');
                                    str.splice(0, numberOfLetters);
                                    str = str.join('');
                                    console.log(str);

                               var pack = [
                                    str,
                                    pname,
                                    pprice
                                                                     
                               ]
                               console.log(pack)
                               data.iphones.push(pack)
                               console.log(data)
                               localStorage.setItem("jsonData", JSON.stringify(data));
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

        })

  .catch((error) => {
    console.error("Error:", error);
  });

let productName = document.querySelector("#inpi1")
let price = document.querySelector("#inpi2")
let category = document.querySelector("#inpi3")
let description = document.querySelector("#inpi4")
let image = document.querySelector("#inpi5")


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