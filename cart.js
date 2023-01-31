let dataFromLocal = localStorage.getItem("cartData");
let finaldata = JSON.parse(dataFromLocal);
let boiler;

console.log(finaldata);
let tester = document.querySelector(".cpage");

if (localStorage.getItem("cartData") === null) {
  tester.classList.add("forcpage");
} else {
  for (let i = 0; i < finaldata.length; i++) {
    let appimage = finaldata[i][0];
    let appname = finaldata[i][1];
    let appprice = finaldata[i][2];

    boiler = `<div class="cartphones">
    <div class ="cartimgh">
        <img src="./${appimage}" height = "60%">
    </div>
    <div class="cartdesc">
        <div class = "deschol">
            <p class = "cartpname">${appname}</p>
            <p class="priceca">
                <span>₦</span><span class="money">1000</span>
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
    } else if (childleng > 1) {
      elem.closest(".cartphones").classList.add("remcart");
      await new Promise((resolve) => setTimeout(resolve, 500));
      elem.closest(".cartphones").remove();
      childleng -= 1;
      console.log(childleng);
    }
  });
});
