let dataFromLocal = localStorage.getItem("cartData");
let finaldata = JSON.parse(dataFromLocal);
let boiler;
let appimage
let appname
let appprice

console.log(finaldata);
let tester = document.querySelector(".cpage");

if (localStorage.getItem("cartData") === null) {
  tester.classList.add("forcpage");
} else {
  for (let i = 0; i < finaldata.length; i++) {
    let appimage = finaldata[i][0];
    let appname = finaldata[i][1];
    let appprice = finaldata[i][2];

    boiler = `<div class="cartphones" data-value ="${appimage}">
    <div class ="cartimgh">
        <img src="./${appimage}" height = "60%">
    </div>
    <div class="cartdesc">
        <div class = "deschol">
            <p class = "cartpname">${appname}</p>
            <p class="priceca">
                <span>₦</span><span class="money">${appprice}</span>
            </p>
            <input class ="cartnum" type = "number" value = "1"></input>
            <p class="tprice">
                <span>₦</span><span class="money">${appprice}</span>
            </p>
            
        </div>
        <div class = "ex"><i class="fa-regular fa-circle-xmark"></i></div>
    </div>
    </div>`;

    document.querySelector(".cpage").innerHTML += boiler;
  }
}

const cartbut = document.querySelectorAll(".ex");
let defdataset;
let arrconv = Array.from(cartbut);
let cartbox = document.querySelector(".cpage");
arrconv.forEach(function (elem) {
  elem.addEventListener("click", async function () {
    defdataset = this.dataset.value;

    const parent = document.querySelector(".cartsec");
    const child = parent.querySelectorAll(".cartphones");

    let childleng = child.length;
    if (childleng == 1) {
      elem.closest(".cartphones").classList.add("remcart");
      await new Promise((resolve) => setTimeout(resolve, 500));
      elem.closest(".cartphones").remove();
      tester.classList.add("forcpage");
      console.log(finaldata)
      let dat2del = this.closest(".cartphones").dataset.value
      for (let i = 0; i < finaldata.length; i++) {
        let innerArray = finaldata[i];
        if (innerArray.indexOf(dat2del) !== -1) {
            finaldata.splice(i, 1);
          break;
        }
      }
      console.log(finaldata)
      localStorage.setItem("cartData", JSON.stringify(finaldata));
    } else if (childleng > 1) {
      elem.closest(".cartphones").classList.add("remcart");
      await new Promise((resolve) => setTimeout(resolve, 500));
      elem.closest(".cartphones").remove();
      childleng -= 1;
      console.log(childleng);
      console.log(this.closest(".cartphones").dataset.value)
      let dat2del = this.closest(".cartphones").dataset.value
      for (let i = 0; i < finaldata.length; i++) {
        let innerArray = finaldata[i];
        if (innerArray.indexOf(dat2del) !== -1) {
            finaldata.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("cartData", JSON.stringify(finaldata));
      console.log(finaldata)
      /* let valueToRemove =  */
    }
  });
});
