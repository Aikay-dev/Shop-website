const hamburger = document.querySelector(".hamburger");
const navflow = document.querySelector(".navul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navflow.classList.toggle("navulba");
  navflow.classList.toggle("navulba>a");
});

/* project config */
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

/* getting the storage */
let storage = firebase.storage();
let database = firebase.database();
let form = document.querySelector(".picform");
let iphdata;
let samdata;
let iphlength;
let samlength;
let sendImage;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    form.name.value.length == 0 ||
    form.price.value.length == 0 ||
    form.filename.value.length == 0
  ) {
    alert("fill in the empty boxes");
  } else {
    if (form.category.value == "iphone") {
      let iphRefdata = database.ref("iphones");

      iphRefdata.once("value").then(function (snapshot) {
        iphdata = snapshot.val();
        iphlength = iphdata.length;

        let fileitem = form.filename.files[0];
        let filename = form.name.value;
        console.log(form.filename.files[0].type);
        console.log(form.category.value == "iphone");

        let storageRef = storage.ref("images/" + filename);
        let uploadTask = storageRef.put(fileitem);

        async function getUrl() {
          await new Promise((resolve) => setTimeout(resolve, 3000));

          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File uploaded");

            let ref1 = database.ref("iphones");
            let ref2 = ref1.child(iphlength);

            ref2.set({
              0: downloadURL,
              1: form.price.value,
              2: form.name.value,
            });
            form.reset();
          });
        }

        getUrl();
      });
    } else {
      let samRefdata = database.ref("samsung");

      samRefdata.once("value").then(function (snapshot) {
        samdata = snapshot.val();
        samlength = samdata.length;

        let fileitem = form.filename.files[0];
        let filename = form.name.value;
        console.log(form.filename.files[0].type);
        console.log(form.category.value == "samsung");

        let storageRef = storage.ref("images/" + filename);
        let uploadTask = storageRef.put(fileitem);

        async function getUrl() {
          await new Promise((resolve) => setTimeout(resolve, 3000));

          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File available at");

            let ref1 = database.ref("samsung");
            let ref2 = ref1.child(samlength);

            ref2.set({
              0: downloadURL,
              1: form.price.value,
              2: form.name.value,
            });
            form.reset();
          });
        }

        getUrl();
      });
    }
  }
});
