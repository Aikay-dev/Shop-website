fetch("./storage.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let dataFromLocal = localStorage.getItem("jsonData");
    console.log(dataFromLocal);
    if (dataFromLocal) {
      data = JSON.parse(dataFromLocal);
    } else {
      data;
    }
    console.log(data);
    let fillform = document.querySelector(".picform");
    fillform.addEventListener("submit", (event) => {
      event.preventDefault();
      if (productName.value != "") {
        if (price.value != "") {
          if (category.value != "") {
            if (category.value == "samsung") {
              console.log("we are in sam");
              if (description.value != "") {
                if (image.value != "") {
                  let pname = productName.value;
                  let pprice = price.value;
                  let pcat = category.value;
                  let pdesc = description.value;
                  let pimg = image.value;

                  let str = pimg;
                  let numberOfLetters = 12;
                  str = str.split("");
                  str.splice(0, numberOfLetters);
                  str = str.join("");
                  console.log(str);

                  var pack = [str, pname, pprice];
                  console.log(pack);
                  data.samsung.push(pack);
                  console.log(data);
                  localStorage.setItem("jsonData", JSON.stringify(data));
                  /* DROPDOWN FOR CONFIRMING SAMSUNG */
                  let confam = document.querySelector(".confirm");
                  confam.classList.add("dropdown");
                } else {
                  alert("fill in the blanks");
                }
              } else {
                alert("fill in the blanks");
              }
            } else if (category.value == "iphone") {
              console.log("we are in iph");
              if (description.value != "") {
                if (image.value != "") {
                  let pname = productName.value;
                  let pprice = price.value;
                  let pcat = category.value;
                  let pdesc = description.value;
                  let pimg = image.value;

                  let str = pimg;
                  let numberOfLetters = 12;
                  str = str.split("");
                  str.splice(0, numberOfLetters);
                  str = str.join("");
                  console.log(str);

                  var pack = [str, pname, pprice];
                  console.log(pack);
                  data.iphones.push(pack);
                  console.log(data);
                  localStorage.setItem("jsonData", JSON.stringify(data));
                  /* DROPDOWN FOR CONFIRMING IPHONE */
                  let confam = document.querySelector(".confirm");
                  confam.classList.add("dropdown");
                } else {
                  alert("fill in the blanks");
                }
              } else {
                alert("fill in the blanks");
              }
            }
          } else {
            alert("fill in the blanks");
          }
        } else {
          alert("fill in the blanks");
        }
      } else {
        alert("fill in the blanks");
      }
    });
  })

  .catch((error) => {
    console.error("Error:", error);
  });

let productName = document.querySelector("#inpi1");
let price = document.querySelector("#inpi2");
let category = document.querySelector("#inpi3");
let description = document.querySelector("#inpi4");
let image = document.querySelector("#inpi5");
