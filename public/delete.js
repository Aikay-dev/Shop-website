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
  <img src="${appimage}">
  <div class="prdet">
      <p>${appname}</p>
      <p class="price">
          <span>₦ </span><span class="money">${appprice}</span>
      </p>
      <p class="delcart" data-value = "${appimage}''${appprice}''${appname}" >REMOVE ITEM<i class="fa-solid fa-cart-plus"></i></p>
  </div>
  </div>`;

  document.querySelector(".prdt").innerHTML += boiler;
}

/* Getting samsung data from database */
const samRefdata = database.ref("samsung");
const snapshotsam = await samRefdata.once("value");
let samdata = snapshotsam.val();

/* Shuffle using fisher yates method */

function shuffle2(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
shuffle2(samdata);

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
      <p class="delcart" data-value = "${appimage}''${appprice}''${appname}" >REMOVE ITEM<i class="fa-solid fa-cart-plus"></i></p>
  </div>
  </div>`;

  document.querySelector(".prdt").innerHTML += boiler;
}

let arr;

const cartbut = document.querySelectorAll(".delcart");
let arrconv = Array.from(cartbut);
arrconv.forEach(function (elem) {
  elem.addEventListener("click", async () => {
    let green = document.querySelector(".confirmout");
    green.classList.toggle("dropdown");
    let cardd = elem.getAttribute("data-value");
    arr = cardd.split("''");
    /* const itemRef = firebase.database().ref('image/123'); */
    const databaseRef = firebase.database().ref();

    const concatenatedArray = iphdata.concat(samdata); // Concatenate the two arrays into one

    const index = concatenatedArray.findIndex((subArray) =>
      subArray.every((value, i) => value === arr[i])
    ); // Find the index of the subarray that matches the target array

    if (index !== -1) {
      if (index < iphdata.length) {
        iphdata.splice(index, 1); // Remove the subarray from the first array if it's found there
        const iphonesRef = firebase.database().ref("iphones");
        iphonesRef.set(iphdata);
        let dat2del = elem.closest(".appphones");
        dat2del.remove();
      } else {
        samdata.splice(index - iphdata.length, 1); // Remove the subarray from the second array if it's found there
        const samRef = firebase.database().ref("samsung");
        samRef.set(samdata);
        let dat2del = elem.closest(".appphones");
        dat2del.remove();
      }
    }
  });
});
