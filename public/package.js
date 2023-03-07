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

/* checks if a user is authenticated */
firebase.auth().onAuthStateChanged(function (user) {
  if (user && user.email == "emmanese2020@gmail.com") {
    console.log("current user:", user);
  } else {
    window.location.href = "./admin-auth.html";
  }
});

/* getting the storage */
const storage = firebase.storage();
const database = firebase.database();
const form = document.querySelector(".picform");
let iphdata;
let samdata;
let iphlength;
let samlength;
let sendImage;
const dropdown = document.querySelector(".confirm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (
    form.name.value.length == 0 ||
    form.price.value.length == 0 ||
    form.filename.value.length == 0
  ) {
    alert("fill in the empty boxes");
  } else {
    document.querySelector(
      ".subbut"
    ).innerHTML = `<svg viewBox="25 25 50 50" class="svg">
    <circle r="20" cy="50" cx="50"></circle>
  </svg>`;
    let strform = form.price.value;
    let pricefinal = strform.toLocaleString();
    if (form.category.value == "iphone") {
      const iphRefdata = database.ref("iphones");

      try {
        const snapshot = await iphRefdata.once("value");
        iphdata = snapshot.val();
        iphlength = iphdata ? iphdata.length : 0;

        const fileitem = form.filename.files[0];
        const filename = form.name.value;

        const storageRef = storage.ref("images/" + filename);
        const uploadTask = storageRef.put(fileitem);

        await uploadTask;
        const downloadURL = await storageRef.getDownloadURL();

        const ref1 = database.ref("iphones");
        const ref2 = ref1.child(iphlength);

        ref2.set({
          0: downloadURL,
          1: pricefinal,
          2: form.name.value,
        });
        form.reset();
        document.querySelector(".subbut").innerHTML = "Submit";
      } catch (error) {
        console.error(error);
        alert("Failed to upload the image");
      }
    } else {
      const samRefdata = database.ref("samsung");

      try {
        const snapshot = await samRefdata.once("value");
        samdata = snapshot.val();
        samlength = samdata ? samdata.length : 0;

        const fileitem = form.filename.files[0];
        const filename = form.name.value;

        const storageRef = storage.ref("images/" + filename);
        const uploadTask = storageRef.put(fileitem);

        await uploadTask;
        const downloadURL = await storageRef.getDownloadURL();

        const ref1 = database.ref("samsung");
        const ref2 = ref1.child(samlength);

        ref2.set({
          0: downloadURL,
          1: pricefinal,
          2: form.name.value,
        });

        document.querySelector(".confirm").classList.add("dropdown");
        await new Promise((resolve) => setTimeout(resolve, 2500));
        document.querySelector(".confirm").classList.remove("dropdown");

        form.reset();
      } catch (error) {
        console.error(error);
        alert("Failed to upload the image");
      }
    }
  }
});
