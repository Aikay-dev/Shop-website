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

/* Getting iphone data from database */
const iphRefdata = database.ref("iphones");
const snapshot = await iphRefdata.once("value");
let iphdata = snapshot.val();

/* Shuffle using fisher yates method */

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
shuffle(iphdata);

/* Reading from array and inserting into inner html */
for (let i = 0; i < iphdata.length; i++) {
  let appimage = iphdata[i][0];
  let appprice = iphdata[i][1];
  let appname = iphdata[i][2];

  let boiler = `<div class="appphones">
  <div class ="imgdiv">
    <img src="${appimage}">
  </div>
  <div class="prdet">
      <p class = "cat">category: iphone</p>
      <div class = "bookndname">
      <p class = "cat2">${appname}</p>
      <i class="bookhold"><i class="fa-regular fa-bookmark bookndicon"></i></i>
      </div>
      <p class="price">
          <span>₦ </span><span class="money">${appprice}</span>
      </p>
      <p class="addcart" data-value = "${appimage}''${appname}''${appprice}" >Add to cart</p>
  </div>
  </div>`;

  document.querySelector(".appfullsec").innerHTML += boiler;
}

let cartstore = [];
let defdataset;
let arr;
let dataFromLocal = localStorage.getItem("cartData");
const cartbut = document.querySelectorAll(".addcart");
let arrconv = Array.from(cartbut);
arrconv.forEach(function (elem) {
  elem.addEventListener("click", async function () {
    this.classList.toggle("green");
    defdataset = this.getAttribute("data-value");
    arr = defdataset.split("''");

    if (this.classList.contains("green")) {
      this.innerHTML = "Added to cart"
      if (dataFromLocal === null) {
        cartstore.push(arr);
        localStorage.setItem("cartData", JSON.stringify(cartstore));
      } else {
        const jsonString = localStorage.getItem("cartData");
        const myData = JSON.parse(jsonString);
        myData.push(arr);
        localStorage.setItem("cartData", JSON.stringify(myData));
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));
    } else {
      this.innerHTML = "Add to cart"
      const jsonString = localStorage.getItem("cartData");
      const myData = JSON.parse(jsonString);
      const index = myData.findIndex((arr) => arr[0] === arr[0]);
      if (index == -1) {
      } else {
        myData.splice(index, 1);
      }
      localStorage.setItem("cartData", JSON.stringify(myData));
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  });
});

/* wish list */

document.querySelectorAll(".bookhold").forEach((e) => {
  e.addEventListener('click', () => {
    
    if(e.classList.contains("animate__bounce")){
      e.style.color = "none"
      e.classList.remove("animate__animated");
      e.classList.remove("animate__bounce");
      e.innerHTML = `<i class="fa-regular fa-bookmark bookndicon"></i>`
    }else{
    e.style.color = 'green'
    e.innerHTML = `<i class="fa-solid fa-bookmark"></i>`
    e.classList.add("animate__animated");
    e.classList.add("animate__bounce");
    }
  })
})