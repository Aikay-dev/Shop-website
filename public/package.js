      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
      import { getStorage} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js"
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyBEgf5tB55aeJSLYv50DjT38XRuZiAdrxE",
        authDomain: "shop-site-269eb.firebaseapp.com",
        databaseURL: "https://shop-site-269eb-default-rtdb.firebaseio.com",
        projectId: "shop-site-269eb",
        storageBucket: "shop-site-269eb.appspot.com",
        messagingSenderId: "139391464564",
        appId: "1:139391464564:web:2be388f749b78b8c04cd21",
        measurementId: "G-CLNF0CJQEJ"
      };
    
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      import {getDatabase, ref, set, child, update, remove}
      from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
      console.log(firebase);
      let form = document.querySelector(".picform")

      function insertData(){
        set(ref(db, "phones/" + form.category.value), {
          Name: form.name.value,
          price: form.price.value,
          image: form.filename.value
          
        })
        .then(() => {
          console.log(form.name.value);
          console.log(form.price.value);
          console.log(form.filename.value);
        })
        .catch((err) => {
          console.log(err.message);
        })
      }

      

      form.addEventListener('submit', (e) => {
        e.preventDefault()
        insertData()
      })





/* const hamburger = document.querySelector(".hamburger");
const navflow = document.querySelector(".navul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navflow.classList.toggle("navulba");
  navflow.classList.toggle("navulba>a");
});

fetch("./storage.json")
  .then((response) => response.json())
  .then((data) => {
    let dataFromLocal = localStorage.getItem("jsonData");
    if (dataFromLocal) {
      data = JSON.parse(dataFromLocal);
    } else {
      data;
    }
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
 */