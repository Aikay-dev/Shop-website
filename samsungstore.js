fetch("./storage.json")
  .then((response) => response.json())
  .then((data) => {
    /* Reading samsung from json FOR HOME PAGE*/

    let samsungstore = [];
    for (let i = 0; i < data.samsung.length; i++) {
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
          <p class="addcart"><i class="fa-solid fa-cart-plus"></i></p>
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
    });
  })

  .catch((error) => {
    console.error("Error:", error);
  });
