      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
      import { getStorage} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js"
      import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"

      /* project config */
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

  /* getting the storage */
  let storage = firebase.storage();
  let database = firebase.database();
  let form = document.querySelector(".picform")
  let iphdata;
  let iphlength;
  let sendImage;

   form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(form.name.value.length == 0 || form.price.value.length == 0 || form.filename.value.length == 0){
      alert("fill in the empty boxes")
    }else{
      if(form.category.value == "iphone"){
        let iphoneRefdata = database.ref('iphones');
        
        iphoneRefdata.once('value')
        .then(function(snapshot) {
          iphdata = snapshot.val();
          console.log(iphdata);
          iphlength = iphdata.length
          console.log(iphlength);

          let fileitem = form.filename.files[0];
          let filename = form.name.value;
          console.log(form.filename.files[0].type);
          console.log(iphdata);
          console.log(form.category.value == "iphone");

          let storageRef = storage.ref("images/" +filename);
          let uploadTask = storageRef.put(fileitem);

          uploadTask.snapshot.ref.getDownloadURL()
          .then(function(downloadURL) {
            console.log("File available at", downloadURL);

          let ref1 = database.ref('iphones');
          let ref2 = ref1.child(iphlength);

          ref2.set({
            0: downloadURL,
            1: form.price.value,
            2: form.name.value
          });

          })
 
          
          
        })



        

      }else{
        
      }
    }
   })
  
      





















/*       let refdata = database.ref('iphones');

      refdata.once('value').then(function(snapshot) {
      var data = snapshot.val();
      console.log(data);
});


      function insertData(){
        set(ref(db, "phones/" + form.category.value), {
          image: form.filename.value,
          Name: form.name.value,
          price: form.price.value
          
          
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


      form.addEventListener("submit", (e) => {
        e.preventDefault()
        let fileitem = form.filename.files[0];
        console.log(fileitem);
        let filename = form.filename.files[0].name;

        let storageRef = storage.ref("images/" +filename)
        let uploadTask = storageRef.put(fileitem)
      })

 */
        






















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