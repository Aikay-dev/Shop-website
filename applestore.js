fetch("./storage.json")
  .then((response) => response.json())
  .then((data) => {
    let datafromlocal;
    if (localStorage.getItem("jsonData")) {
      data = localStorage.getItem("jsonData");
      datafromlocal = JSON.parse(data);
      console.log(datafromlocal.samsung);
    } else {
      datafromlocal = data;
      console.log(datafromlocal);
    }

    let iphonestore = [];

    for (let i = 0; i < datafromlocal.iphones.length; i++) {
      iphonestore.push(datafromlocal.iphones[i]);
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
          <p class="addcart">ADD TO CART<i class="fa-solid fa-cart-plus"></i></p>
      </div>
      </div>`;

      document.querySelector(".appfullsec").innerHTML += boiler;
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
    });
  })

  .catch((error) => {
    console.error("Error:", error);
  });
