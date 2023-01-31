fetch("./storage.json")
  .then((response) => response.json())
  .then((data) => {
    /* Reading iphones from json */
    let iphonestore = [];

    for (let i = 0; i < 5; i++) {
      iphonestore.push(data.iphones[i]);
    }

    /* RANDOMIZING THE IPHONE STORAGE FOR HOMEPAGE */

    function fisherYatesShuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    let shuffiphone = fisherYatesShuffle(iphonestore);

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
          <p class="addcart" data-value = "${appimage},${appname},${appprice}" >ADD TO CART<i class="fa-solid fa-cart-plus"></i></p>
      </div>
      </div>`;

      document.querySelector(".appph").innerHTML += boiler;
    }

    /* Reading samsung from json FOR HOME PAGE*/

    let samsungstore = [];
    for (let i = 0; i < 5; i++) {
      samsungstore.push(data.samsung[i]);
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

      document.querySelector(".samph").innerHTML += boiler;
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
        console.log(newdata);
        defdataset = newdata;
        console.log(this.dataset.value);
        if (this.classList.contains("green")) {
          if (dataFromLocal === null) {
            const found = cartstore.find((element) => element == defdataset);
            console.log(found);
            cartstore.push(defdataset);
            localStorage.setItem("cartData", JSON.stringify(cartstore));
            console.log(cartstore);
          } else {
            const found = cartstore.find((element) => element == defdataset);
            console.log(found);
            cartstore.push(defdataset);
            localStorage.setItem("cartData", JSON.stringify(cartstore));
            console.log(cartstore);
          }

          let red = document.querySelector(".confirm");
          red.classList.toggle("dropdown");
          await new Promise((resolve) => setTimeout(resolve, 3000));
          red.classList.toggle("dropdown");
        } else {
          let index = cartstore.indexOf(defdataset);
          cartstore.splice(index, 1);
          console.log(cartstore);
          localStorage.setItem("cartData", JSON.stringify(cartstore));
          console.log(this.dataset.value);
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
  });
