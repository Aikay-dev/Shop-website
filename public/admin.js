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



firebase.initializeApp(firebaseConfig);

  /* checks if a user is authenticated */
  firebase.auth().onAuthStateChanged(function(user){
    if(user && user.email == "emmanese2020@gmail.com"){
        window.location.href = "./product-management.html"
    }
  })

const emailAuthProvider = firebase.auth.EmailAuthProvider;

const form = document.querySelector(".formcont");
let formbut = document.querySelector(".forbut").innerHTML
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".forbut").innerHTML = "Authorizing"
  let email = form.email.value;
  let password = form.password.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.href = "product-management.html";
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
      let boxes = document.querySelector(".filform");
      let boxes2 = document.querySelector(".ha");
      boxes.classList.add("wrongpass");
      boxes2.classList.add("wrongpass");
      document.querySelector(".forbut").innerHTML = "Login"
    });
});