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
console.log(iphdata);

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
      <p class="addcart" data-value = "${appimage},${appname},${appprice}" >ADD TO CART<i class="fa-solid fa-cart-plus"></i></p>
  </div>
  </div>`;

  document.querySelector(".prdt").innerHTML += boiler;
}


/* Getting samsung data from database */
const samRefdata = database.ref("samsung");
const snapshotsam = await samRefdata.once("value");
let samdata = snapshotsam.val();
console.log(samdata);

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
      <p class="addcart" data-value = "${appimage},${appname},${appprice}" >ADD TO CART<i class="fa-solid fa-cart-plus"></i></p>
  </div>
  </div>`;

  document.querySelector(".prdt").innerHTML += boiler;
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




















































/* let localdataraw = localStorage.getItem("jsonData");
let localdata = JSON.parse(localdataraw);

if (localdata === null) {
  fetch("./storage.json")
    .then((response) => response.json())
    .then((data) => { */

      /* READING FROM IPHONE */

     /*  let iphonestore = data.iphones; */

      /* RANDOMIZING THE IPHONE STORAGE FOR HOMEPAGE */

      /* function fisherYatesShuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      fisherYatesShuffle(iphonestore);

      for (let i = 0; i < iphonestore.length; i++) {
        let appimage = iphonestore[i][0];
        let appname = iphonestore[i][1];
        let appprice = iphonestore[i][2];

        let boiler = `<div class="appphones">
      <img src="./${appimage}">
      <div class="prdet">
          <p>${appname}</p>
          <p class="price">
              <span>₦</span><span class="money">${appprice}</span>
          </p>
          <p class="delcart" data-value = "${appimage}" >DELETE PRODUCT<i class="fa-solid fa-cart-plus"></i></p>
      </div>
      </div>`;

        document.querySelector(".prdt").innerHTML += boiler;
      }

      let samsungstore = data.samsung;

      function fisherYatesShuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      } */

      /* RANDOMIZE SAMSUNG */
      /* fisherYatesShuffle(samsungstore);

      for (let i = 0; i < samsungstore.length; i++) {
        let appimage = samsungstore[i][0];
        let appname = samsungstore[i][1];
        let appprice = samsungstore[i][2];

        let boiler = `<div class="samphones" >
      <img src="./${appimage}">
      <div class="prdet">
          <p>${appname}</p>
          <p class="price">
              <span>₦</span><span class="money">${appprice}</span>
          </p>
          <p class="delcart" data-value = "${appimage}" >DELETE PRODUCT<i class="fa-solid fa-cart-plus"></i></p>
      </div>
      </div>`;

        document.querySelector(".prdt").innerHTML += boiler;
      }
 */
     /*  const cartbut = document.querySelectorAll(".delcart"); */
      /*  let dataFromLocal = localStorage.getItem("cartData"); */
     /*  let arrconv = Array.from(cartbut);
      arrconv.forEach(function (elem) {
        elem.addEventListener("click", async function () {
          this.classList.toggle("red");
          if (this.classList.contains("red")) {
            let iphpush = iphonestore;
            let sampush = samsungstore;

            if (this.closest(".appphones") != null) {
              let convarr = this.closest(".delcart").dataset.value;

              for (let i = 0; i < iphonestore.length; i++) {
                let subArray = iphonestore[i];
                if (subArray.includes(convarr)) {
                  iphonestore.splice(i, 1);
                  break;
                }
              }
              let mainstore = {
                iphones: iphpush,
                samsung: sampush,
              };

              localStorage.setItem("jsonData", JSON.stringify(mainstore));

              this.closest(".appphones").remove();
              return iphonestore;
            } else {
              let convarr = this.closest(".delcart").dataset.value;

              for (let i = 0; i < samsungstore.length; i++) {
                let subArray = samsungstore[i];
                if (subArray.includes(convarr)) {
                  samsungstore.splice(i, 1);
                  break;
                }
              }

              let mainstore = {
                iphones: iphpush,
                samsung: sampush,
              };
              localStorage.setItem("jsonData", JSON.stringify(mainstore));
              this.closest(".samphones").remove();

              return samsungstore;
            }
          }
        });
      });
    })

    .catch((error) => {
      console.error("Error:", error);
    });
} else {

  let iphonestore = localdata.iphones; */

  /* RANDOMIZING THE IPHONE STORAGE FOR HOMEPAGE */

  /* function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  fisherYatesShuffle(iphonestore);

  for (let i = 0; i < iphonestore.length; i++) {
    let appimage = iphonestore[i][0];
    let appname = iphonestore[i][1];
    let appprice = iphonestore[i][2];

    let boiler = `<div class="appphones">
          <img src="./${appimage}">
          <div class="prdet">
              <p>${appname}</p>
              <p class="price">
                  <span>₦</span><span class="money">${appprice}</span>
              </p>
              <p class="delcart" data-value = "${appimage}" >DELETE PRODUCT<i class="fa-solid fa-cart-plus"></i></p>
          </div>
          </div>`;

    document.querySelector(".prdt").innerHTML += boiler;
  }

 */
  /* GETTING DATA FOR SAMSUNG PHONES */

  /* let samsungstore = localdata.samsung; */

  /* RANDOMIZING THE IPHONE STORAGE FOR HOMEPAGE */

  /* function fisherYatesShufflesam(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  fisherYatesShufflesam(samsungstore);

  for (let i = 0; i < samsungstore.length; i++) {
    let appimage = samsungstore[i][0];
    let appname = samsungstore[i][1];
    let appprice = samsungstore[i][2];

    let boiler = `<div class="samphones">
          <img src="./${appimage}">
          <div class="prdet">
              <p>${appname}</p>
              <p class="price">
                  <span>₦</span><span class="money">${appprice}</span>
              </p>
              <p class="delcart" data-value = "${appimage}" >DELETE PRODUCT<i class="fa-solid fa-cart-plus"></i></p>
          </div>
          </div>`;

    document.querySelector(".prdt").innerHTML += boiler;
  }


  const cartbut = document.querySelectorAll(".delcart");
  let arrconv = Array.from(cartbut);
  arrconv.forEach(function (elem) {
    elem.addEventListener("click", async function () {
      this.classList.toggle("red");
      if (this.classList.contains("red")) {
        let iphpush = iphonestore;
        let sampush = samsungstore;

        if (this.closest(".appphones") != null) {
          let convarr = this.closest(".delcart").dataset.value;

          for (let i = 0; i < iphonestore.length; i++) {
            let subArray = iphonestore[i];
            if (subArray.includes(convarr)) {
              iphonestore.splice(i, 1);
              break;
            }
          }
          let mainstore = {
            iphones: iphpush,
            samsung: sampush,
          };

          localStorage.setItem("jsonData", JSON.stringify(mainstore));

          this.closest(".appphones").remove();
          return iphonestore;
        } else {
          let convarr = this.closest(".delcart").dataset.value;

          for (let i = 0; i < samsungstore.length; i++) {
            let subArray = samsungstore[i];
            if (subArray.includes(convarr)) {
              samsungstore.splice(i, 1);
              break;
            }
          }

          let mainstore = {
            iphones: iphpush,
            samsung: sampush,
          };
          localStorage.setItem("jsonData", JSON.stringify(mainstore));
          this.closest(".samphones").remove();

          return samsungstore;
        }
      }
    });
  });
}
 */