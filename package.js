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
      if (isFormValid()) {
        let pname = productName.value;
        let pprice = price.value;
        let pcat = category.value;
        let pdesc = description.value;
        let pimg = image.value;

        let str = pimg.substring(12);

        let pack = [str, pname, pprice];
        addProductToData(pcat, pack);
        localStorage.setItem("jsonData", JSON.stringify(data));
        showConfirmation();
      } else {
        alert("fill in the blanks");
      }
    });

    function isFormValid() {
      return (
        productName.value != "" &&
        price.value != "" &&
        category.value != "" &&
        description.value != "" &&
        image.value != ""
      );
    }

    function addProductToData(category, pack) {
      if (category === "samsung") {
        data.samsung.push(pack);
      } else if (category === "iphone") {
        data.iphones.push(pack);
      }
    }

    function showConfirmation() {
      let confam = document.querySelector(".confirm");
      confam.classList.add("dropdown");
    }
  })

  .catch((error) => {
    console.error("Error:", error);
  });

let productName = document.querySelector("#inpi1");
let price = document.querySelector("#inpi2");
let category = document.querySelector("#inpi3");
let description = document.querySelector("#inpi4");
let image = document.querySelector("#inpi5");
