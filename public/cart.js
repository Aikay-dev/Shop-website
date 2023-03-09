const hamburger = document.querySelector(".hamburger");
const navflow = document.querySelector(".navul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navflow.classList.toggle("navulba");
  navflow.classList.toggle("navulba>a");
});

let dataFromLocal = localStorage.getItem("cartData");
let finaldata = JSON.parse(dataFromLocal);
let boiler;
let appimage;
let appname;
let appprice;

let tester = document.querySelector(".cpage");
let lastp = document.querySelector(".totalsec");
let thetop = document.querySelector(".surrcart");

if (localStorage.getItem("cartData") === null || finaldata == "") {
  tester.classList.add("forcpage");
  lastp.classList.add("remcart2");
  thetop.classList.add("remcart2");
} else if (localStorage.getItem("cartData") != null && finaldata == "") {
  tester.classList.add("forcpage");
  lastp.classList.add("remcart2");
} else if (localStorage.getItem("cartData") != null && finaldata != "") {
  /* LOOPING THE DATA THROUGH A BOILER PLATE */
  for (let i = 0; i < finaldata.length; i++) {
    let appimage = finaldata[i][0];
    let appname = finaldata[i][1];
    let appprice = finaldata[i][2];

    boiler = `<div class="cartphones" data-value ="${appimage}">
    <div class ="cartimgh">
        <img src="${appimage}" height = "60%">
    </div>
    <div class="cartdesc">
        <div class = "deschol">
            <div class = "cnamecont"><p class = "cartpname">${appname}</p></div>
            <div class = "cpricecont"><p class="priceca">
            <span>₦</span><span class="money" id = "defcash">${appprice}</span>
            </p>
            </div>
            <div class = "cinpcont">
            <input class ="cartnum" type = "number" value = "1"></input>
            </div>
            <div class = "cumlcont">
            <p class="tprice">
                <span>₦</span><span class="money" id = "cumlcash">${appprice}</span>
            </p>
            </div>
            
        </div>
        <div class = "ex"><i class="fa-regular fa-circle-xmark hidex"></i></div>
    </div>
    </div>`;

    document.querySelector(".cpage").innerHTML += boiler;
  }
}

let clearer = document.querySelector("#clearall");
let cartedit = document.querySelector(".classif");
clearer.addEventListener("click", () => {
  cartedit.classList.add("navul");
});

let clbt = document.querySelector("#clearall");
const cphones = document.querySelectorAll(".cartphones");
const cphnew = Array.from(cphones);
let target = document.querySelector(".cartphones");
let thelast = document.querySelector(".totalsec");

clbt.addEventListener("click", async function () {
  cphones.forEach((d) => d.classList.add("remcart"));
  await new Promise((resolve) => setTimeout(resolve, 500));
  cphones.forEach((d) => d.remove());
  target.remove();
  tester.classList.add("forcpage");
  thelast.classList.add("remcart2");
  thetop.classList.add("remcart2");
  finaldata = [];
  localStorage.setItem("cartData", JSON.stringify(finaldata));
});
let cartbut = document.querySelectorAll(".hidex");
let culfirst = document.querySelectorAll("#cumlcash");
let defdataset;
let arrconv = Array.from(cartbut);
let cartbox = document.querySelector(".cpage");
arrconv.forEach(function (elem) {
  elem.addEventListener("click", async function () {
    let exclose = elem.closest(".cartdesc");

    let subtcash = exclose.querySelector("#cumlcash").innerHTML;
    const defnum = parseInt(subtcash.replace(/,/g, ""));
    let totfex = document.querySelector(".totalcash").innerHTML;
    const defnum2 = parseInt(totfex.replace(/,/g, ""));
    let finalcalc = defnum2 - defnum;
    let readytot = finalcalc.toLocaleString();
    document.querySelector(".totalcash").innerHTML = readytot;
    let cansubt = document.querySelector(".subt").innerHTML;
    const defnum3 = parseInt(cansubt.replace(/,/g, ""));
    let subcalc = defnum3 - defnum;
    let readysub = subcalc.toLocaleString();
    document.querySelector(".subt").innerHTML = readysub;
    let shipdel = document.querySelector(".shipper").innerHTML;
    const defnum4 = parseInt(shipdel.replace(/,/g, ""));
    let delnew = defnum4 - 1300;
    document.querySelector(".shipper").innerHTML = delnew.toLocaleString();

    defdataset = this.dataset.value;

    const parent = document.querySelector(".cartsec");
    const child = parent.querySelectorAll(".cartphones");

    let childleng = child.length;
    if (childleng == 1) {
      elem.closest(".cartphones").classList.add("remcart");
      await new Promise((resolve) => setTimeout(resolve, 500));
      elem.closest(".cartphones").remove();
      tester.classList.add("forcpage");
      lastp.classList.add("remcart2");
      let dat2del = this.closest(".cartphones").dataset.value;
      for (let i = 0; i < finaldata.length; i++) {
        let innerArray = finaldata[i];
        if (innerArray.indexOf(dat2del) !== -1) {
          finaldata.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("cartData", JSON.stringify(finaldata));
    } else if (childleng > 1) {
      elem.closest(".cartphones").classList.add("remcart");
      await new Promise((resolve) => setTimeout(resolve, 500));
      elem.closest(".cartphones").remove();
      childleng -= 1;
      let dat2del = this.closest(".cartphones").dataset.value;
      for (let i = 0; i < finaldata.length; i++) {
        let innerArray = finaldata[i];
        if (innerArray.indexOf(dat2del) !== -1) {
          finaldata.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("cartData", JSON.stringify(finaldata));
    }
  });
});

const cartwhole = document.querySelectorAll(".cartphones");
let numconv = Array.from(cartwhole);
let subt = document.querySelector(".subt").innerHTML;
let numbubt = +subt;
let allmon = document.querySelectorAll("#cumlcash");
let allmonconv = Array.from(allmon);
let subdarr = [];
let ship = document.querySelector(".shipper").innerHTML;

function cartstart() {
  numconv.forEach(function (elem) {
    const defcash = elem.querySelector(".money").innerHTML;
    const defnum = parseInt(defcash.replace(/,/g, ""));
    const defval = elem.querySelector(".cartnum").value;
    let defvalnum = +defval;

    let helpcuml = parseInt(defnum * defvalnum).toLocaleString();
    elem.querySelector("#cumlcash").innerHTML = helpcuml;
  });

  for (let i = 0; i < allmonconv.length; i++) {
    let firstval = allmonconv[i].innerHTML;
    const defnum = parseInt(firstval.replace(/,/g, ""));
    subdarr.push(defnum);
  }

  let sum = 0;
  for (let i = 0; i < subdarr.length; i++) {
    sum += subdarr[i];
  }
  document.querySelector(".subt").innerHTML = sum.toLocaleString();

  document.querySelector(".shipper").innerHTML = parseInt(
    finaldata.length * 1300
  ).toLocaleString();

  document.querySelector(".shipper").value =
    document.querySelector(".shipper").innerHTML;

  document.querySelector(".subt").value =
    document.querySelector(".subt").innerHTML;

  let subtv = document.querySelector(".subt").value;
  let shipv = document.querySelector(".shipper").value;
  const defnum = parseInt(subtv.replace(/,/g, ""));
  const defnum2 = parseInt(shipv.replace(/,/g, ""));

  document.querySelector(".totalcash").innerHTML = parseInt(
    defnum + defnum2
  ).toLocaleString();
}

cartstart();

/* listen for change in cart */
numconv.forEach(function (elem) {
  elem.addEventListener("change", function () {
    let allmon = document.querySelectorAll("#cumlcash");
    let allmonconv = Array.from(allmon);
    let subdarr = [];
    let ship = document.querySelector(".shipper").innerHTML;
    const defval = elem.querySelector(".cartnum").value;
    const defcash = elem.querySelector("#defcash").innerHTML;
    const defcashnum = parseInt(defcash.replace(/,/g, ""));
    let defvalnum = +defval;
    let precalc = defcashnum * defvalnum;
    elem.querySelector("#cumlcash").innerHTML = precalc.toLocaleString();
    let defnum;
    for (let i = 0; i < allmonconv.length; i++) {
      let firstval = allmonconv[i].innerHTML;
      defnum = parseInt(firstval.replace(/,/g, ""));
      subdarr.push(defnum);
    }

    let sum = 0;
    for (let i = 0; i < subdarr.length; i++) {
      sum += subdarr[i];
    }
    document.querySelector(".subt").innerHTML = sum.toLocaleString();
    let totcash = document.querySelector(".totalcash").innerHTML;
    let defnum3 = parseInt(totcash.replace(/,/g, ""));
    let subredo = document.querySelector(".subt").innerHTML;
    let defnum4 = parseInt(subredo.replace(/,/g, ""));
    let shipper = document.querySelector(".shipper").innerHTML;
    let defnum5 = parseInt(shipper.replace(/,/g, ""));
    let chnfinal = defnum5 + defnum4;
    let finalchanger = chnfinal.toLocaleString();
    document.querySelector(".totalcash").innerHTML = finalchanger;
  });
});

const cartcheck = document.querySelector(".cartcheck");
const bought = document.querySelector(".bought");
cartcheck.addEventListener("click", () => {
  bought.style.display = "block";
  const parentElement = document.querySelector(".bought");
  parentElement.addEventListener("click", function (event) {
    if (event.target.matches(".bought::after")) {
      bought.style.display = "none";
    } else {
      bought.style.display = "none";
    }
  });
});

let coupbod = document.querySelector(".coupbod");
let coupbutt = document.querySelector(".coupbutt");

coupbutt.addEventListener("click", () => {
  if (coupbod.value === "starthub") {
    document.querySelector(".totalcash").innerHTML = "1,000";
  } else {
    coupbod.style.border = "1px solid red";
  }
});
