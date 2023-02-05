let localdataraw = localStorage.getItem("jsonData");
let localdata = JSON.parse(localdataraw)
console.log(fetch("./storage.json"))


if(localdata === null){
    fetch("./storage.json")
    .then((response) => response.json())
    .then((data) => {
    console.log(data)

    

        /* Reading iphones from json
        let iphonestore = [];

        for (let i = 0; i < data.iphones.length; i++) {
          iphonestore.push(data.iphones[i]);
        }
    
        RANDOMIZING THE IPHONE STORAGE FOR HOMEPAGE
    
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
              <p class="delcart" data-value = "${appimage},${appname},${appprice}" >DELETE PRODUCT<i class="fa-solid fa-cart-plus"></i></p>
          </div>
          </div>`;
    
          document.querySelector(".prdt").innerHTML += boiler;
        }

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
          <p class="delcart" data-value = "${appimage},${appname},${appprice}">DELETE PRODUCT<i class="fa-solid fa-cart-plus" value = "hello"></i></p>
      </div>
      </div>`;

      document.querySelector(".prdt").innerHTML += boiler;
    }

    console.log(samsungstore)
    let cartstore = []

    const cartbut = document.querySelectorAll(".delcart");
    let defdataset;
    let dataFromLocal = localStorage.getItem("cartData");
    let arrconv = Array.from(cartbut);
    arrconv.forEach(function (elem) {
      elem.addEventListener("click", async function () {
        this.classList.toggle("red");
        let firstdata = this.dataset.value;
        let newdata = firstdata.split(",");
        console.log(newdata);
        defdataset = newdata;
        console.log(this.dataset.value);
        if (this.classList.contains("red")) {
            const found = cartstore.find((element) => element == defdataset);
            console.log(found);
            console.log(defdataset)
            cartstore.push(defdataset);

            for (let i = 0; i < samsungstore.length; i++) {
                
                if (JSON.stringify(samsungstore[i]) === JSON.stringify(defdataset)) {
                    samsungstore.splice(i, 1);
                  break;
                }
              }

              localStorage.setItem("jsonData", JSON.stringify(samsungstore));

              this.closest(".appphones").remove();
              

              console.log(samsungstore)

            localStorage.setItem("jsonData", JSON.stringify(cartstore));
            console.log(cartstore);
          

          let red = document.querySelector(".confirmout");
          red.classList.toggle("dropdown");
          await new Promise((resolve) => setTimeout(resolve, 3000));
          red.classList.toggle("dropdown");
        }
      });
    });
 */

    /* READING FROM IPHONE */
    
    let iphonestore = data.iphones;
    console.log(iphonestore)

    /* RANDOMIZING THE IPHONE STORAGE FOR HOMEPAGE */

    function fisherYatesShuffle(array) {
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
    console.log(samsungstore)

    function fisherYatesShuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    /* RANDOMIZE SAMSUNG */
    fisherYatesShuffle(samsungstore);

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


    


    const cartbut = document.querySelectorAll(".delcart");
   /*  let dataFromLocal = localStorage.getItem("cartData"); */
    let arrconv = Array.from(cartbut);
    arrconv.forEach(function (elem) {
      elem.addEventListener("click", async function () {
        this.classList.toggle("red");
        if (this.classList.contains("red")) {
          let iphpush = iphonestore
          let sampush = samsungstore

          if(this.closest(".appphones") != null){
            console.log(iphonestore);
            let convarr = this.closest(".delcart").dataset.value
            console.log(convarr);

            for (let i = 0; i < iphonestore.length; i++) {

              let subArray = iphonestore[i];
              if (subArray.includes(convarr)) {
                iphonestore.splice(i, 1);
                break;
              }
            }
            let mainstore = {
              iphones: iphpush,
              samsung: sampush
            }
              
            localStorage.setItem("jsonData", JSON.stringify(mainstore));
            
            this.closest(".appphones").remove();
            console.log(mainstore)
            return iphonestore;

            

          }else{
            console.log(samsungstore)
            let convarr = this.closest(".delcart").dataset.value
            
            console.log(convarr);
            console.log(samsungstore);

              for (let i = 0; i < samsungstore.length; i++) {
                let subArray = samsungstore[i];
                if (subArray.includes(convarr)) {
                  samsungstore.splice(i, 1);
                  break;
                }
              }
              

              let mainstore = {
                iphones: iphpush,
                samsung: sampush
              }
              localStorage.setItem("jsonData", JSON.stringify(mainstore));
              this.closest(".samphones").remove();
              
              console.log(mainstore)
              return samsungstore;


          }
        }
      });
    });




  })

.catch((error) => {
    console.error("Error:", error);
});

}else{
  console.log(localdata);

    let iphonestore = localdata.iphones;
    
        /* RANDOMIZING THE IPHONE STORAGE FOR HOMEPAGE */
    
        function fisherYatesShuffle(array) {
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


    console.log(iphonestore)
  
    /* GETTING DATA FOR SAMSUNG PHONES */

    let samsungstore = localdata.samsung;
    
        /* RANDOMIZING THE IPHONE STORAGE FOR HOMEPAGE */
    
        function fisherYatesShufflesam(array) {
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


    console.log(samsungstore)

    const cartbut = document.querySelectorAll(".delcart");
     let arrconv = Array.from(cartbut);
     arrconv.forEach(function (elem) {
       elem.addEventListener("click", async function () {
         this.classList.toggle("red");
         if (this.classList.contains("red")) {
           let iphpush = iphonestore
           let sampush = samsungstore
 
           if(this.closest(".appphones") != null){
             console.log(iphonestore);
             let convarr = this.closest(".delcart").dataset.value
             console.log(convarr);
 
             for (let i = 0; i < iphonestore.length; i++) {
 
               let subArray = iphonestore[i];
               if (subArray.includes(convarr)) {
                 iphonestore.splice(i, 1);
                 break;

               }


             }
             let mainstore = {
               iphones: iphpush,
               samsung: sampush
             }
               
             localStorage.setItem("jsonData", JSON.stringify(mainstore));
             
             this.closest(".appphones").remove();
             console.log(convarr)
             console.log("this si");
             return iphonestore;
 
             
              
           }else{
             console.log(samsungstore)
             let convarr = this.closest(".delcart").dataset.value
             
             console.log(convarr);
             console.log(samsungstore);
 
               for (let i = 0; i < samsungstore.length; i++) {
                 let subArray = samsungstore[i];
                 if (subArray.includes(convarr)) {
                   samsungstore.splice(i, 1);
                   break;
                 }else{
                  console.log("no work");
                 }
               }
               
 
               let mainstore = {
                 iphones: iphpush,
                 samsung: sampush
               }
               localStorage.setItem("jsonData", JSON.stringify(mainstore));
               this.closest(".samphones").remove();
               
               console.log(convarr)
               return samsungstore;
               
 
             
 
           }
         }
       });
     });
 

    /* const cartbut = document.querySelectorAll(".delcart");
    let defdataset;
    let dataFromLocal = localStorage.getItem("cartData");
    let arrconv = Array.from(cartbut);
    arrconv.forEach(function (elem) {
      elem.addEventListener("click", async function () {
        this.classList.toggle("red");
        let firstdata = this.dataset.value;
        let newdata = firstdata.split(",");
        console.log(newdata);
        defdataset = newdata;
        
        if (this.classList.contains("red")) {
            const found = cartstore.find((element) => element == defdataset);
            console.log(found);
            console.log(defdataset)
            cartstore.push(defdataset);

            for (let i = 0; i < samsungstore.length; i++) {
                
                if (JSON.stringify(samsungstore[i]) === JSON.stringify(defdataset)) {
                    samsungstore.splice(i, 1);
                  break;
                }
              }

              localStorage.setItem("jsonData", JSON.stringify(samsungstore));

              console.log(samsungstore)

            localStorage.setItem("jsonData", JSON.stringify(cartstore));
            console.log(cartstore);
            this.closest(".appphones").remove();
          

          let red = document.querySelector(".confirmout");
          red.classList.toggle("dropdown");
          await new Promise((resolve) => setTimeout(resolve, 3000));
          red.classList.toggle("dropdown");
        }
      });
    }); */

    

}

  