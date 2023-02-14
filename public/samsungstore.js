const hamburger = document.querySelector(".hamburger");
const navflow = document.querySelector(".navul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navflow.classList.toggle("navulba");
  navflow.classList.toggle("navulba>a");
});

const firebaseConfig = {
  apiKey: "AIzaSyBEgf5tB55aeJSLYv50DjT38XRuZiAdrxE",
  authDomain: "shop-site-269eb.firebaseapp.com",
  databaseURL: "https://shop-site-269eb-default-rtdb.firebaseio.com",
  projectId: "shop-site-269eb",
  storageBucket: "shop-site-269eb.appspot.com",
  messagingSenderId: "139391464564",
  appId: "1:139391464564:web:2be388f749b78b8c04cd21",
  measurementId: "G-CLNF0CJQEJ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();

/* Getting samsung data from database */
const samRefdata = database.ref("samsung");
const snapshot = await samRefdata.once("value");
let samdata = snapshot.val();
console.log(samdata);

/* Shuffle using fisher yates method */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
shuffle(samdata);

/* Reading from array and inserting into inner html */
for (let i = 0; i < samdata.length; i++) {
  let appimage = samdata[i][0];
  let appprice = samdata[i][1];
  let appname = samdata[i][2];

  let boiler = `<div class="appphones">
  <img src="${appimage}">
  <div class="prdet">
      <p>${appname}</p>
      <p class="price">
          <span>₦ </span><span class="money">${appprice}</span>
      </p>
      <p class="addcart" data-value = "${appimage},${appname},${appprice}" >ADD TO CART<i class="fa-solid fa-cart-plus"></i></p>
  </div>
  </div>`;

  document.querySelector(".samfullsec").innerHTML += boiler;
}


const cartbut = document.querySelectorAll(".addcart");
    let arrconv = Array.from(cartbut);
    arrconv.forEach(function (elem) {
      elem.addEventListener("click", async function () {
        this.classList.toggle("green");
        
        if (this.classList.contains("green")) {

          let red = document.querySelector(".confirm");
          red.classList.toggle("dropdown");
          await new Promise((resolve) => setTimeout(resolve, 3000));
          red.classList.toggle("dropdown");
        } else {
          let green = document.querySelector(".confirmout");
          green.classList.toggle("dropdown");
          await new Promise((resolve) => setTimeout(resolve, 3000));
          green.classList.toggle("dropdown");
        }
      });
    })








































/* fetch("./storage.json")
  .then((response) => response.json())
  .then((data) => {
    let datafromlocal;
    if (localStorage.getItem("jsonData")) {
      data = localStorage.getItem("jsonData");
      datafromlocal = JSON.parse(data);
    } else {
      datafromlocal = data;
    } */

    /* Reading samsung from json FOR HOME PAGE*/

/*     let samsungstore = [];
    for (let i = 0; i < datafromlocal.samsung.length; i++) {
      samsungstore.push(datafromlocal.samsung[i]);
    }

    function fisherYatesShuffleb(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    let shuffisamsung = fisherYatesShuffleb(samsungstore);

    for (let i = 0; i < samsungstore.length; i++) {
      let appimage = samsungstore[i][0];
      let appname = samsungstore[i][1];
      let appprice = samsungstore[i][2];

      let boiler = `<div class="appphones">
      <img src="./${appimage}">
      <div class="prdet">
          <p>${appname}</p>
          <p class="price">
              <span>₦</span><span class="money">${appprice}</span>
          </p>
          <p class="addcart" data-value = "${appimage},${appname},${appprice}">ADD TO CART<i class="fa-solid fa-cart-plus" value = "hello"></i></p>
      </div>
      </div>`;

      document.querySelector(".samfullsec").innerHTML += boiler;
    }

    let cartstore = [];

    const cartbut = document.querySelectorAll(".addcart");
    let defdataset;
    let dataFromLocal = localStorage.getItem("cartData");
    let arrconv = Array.from(cartbut);
    arrconv.forEach(function (elem) {
      elem.addEventListener("click", async function () {
        this.classList.toggle("green");
        let firstdata = this.dataset.value;
        let newdata = firstdata.split(",");
        defdataset = newdata;
        if (this.classList.contains("green")) {
          if (dataFromLocal === null) {
            const found = cartstore.find((element) => element == defdataset);
            cartstore.push(defdataset);
            localStorage.setItem("cartData", JSON.stringify(cartstore));
          } else {
            const found = cartstore.find((element) => element == defdataset);
            cartstore.push(defdataset);
            localStorage.setItem("cartData", JSON.stringify(cartstore));
          }

          let red = document.querySelector(".confirm");
          red.classList.toggle("dropdown");
          await new Promise((resolve) => setTimeout(resolve, 3000));
          red.classList.toggle("dropdown");
        } else {
          let index = cartstore.indexOf(defdataset);
          cartstore.splice(index, 1);
          localStorage.setItem("cartData", JSON.stringify(cartstore));
          let green = document.querySelector(".confirmout");
          green.classList.toggle("dropdown");
          await new Promise((resolve) => setTimeout(resolve, 3000));
          green.classList.toggle("dropdown");
        }
      });
    });
  })

  .catch((error) => {
    console.error("Error:", error);
  }); */
