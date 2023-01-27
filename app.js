const storage = [`<div class="samphones">
<img src="./galaxy a10.avif" alt="" class="insidepic">
<div class="prdet">
    <p>Samsung galaxy a10</p>
    <p class="price">
        <span>₦</span><span class="money">1200</span>
    </p>
    <p class="addcart"><i class="fa-solid fa-cart-plus"></i></p>
</div>
</div>`, `<div class="samphones">
<img src="./galaxy a04.avif" alt="" class="insidepic">
<div class="prdet">
    <p>Galaxy a04</p>
    <p class="price">
        <span>₦</span><span class="money">1200</span>
    </p>
    <p class="addcart"><i class="fa-solid fa-cart-plus"></i></p>
</div>
</div>`, `<div class="samphones">
<img src="./galaxy a33.avif" alt="" class="insidepic">
<div class="prdet">
    <p>Samsung a33</p>
    <p class="price">
        <span>₦</span><span class="money">1200</span>
    </p>
    <p class="addcart"><i class="fa-solid fa-cart-plus"></i></p>
</div>
</div>`, `<div class="samphones">
<img src="./galacy s22.jpg" alt="" class="insidepic">
<div class="prdet">
    <p>Samsung galaxy S22</p>
    <p class="price">
        <span>₦</span><span class="money">1200</span>
    </p>
    <p class="addcart"><i class="fa-solid fa-cart-plus"></i></p>
</div>
</div>`, `<div class="samphones">
<img src="./a50.jpg" alt="" class="insidepic">
<div class="prdet">
    <p>Samsung galaxy a50</p>
    <p class="price">
        <span>₦</span><span class="money">1200</span>
    </p>
    <p class="addcart" ><i class="fa-solid fa-cart-plus"></i></p>
</div>
</div>`]


    function shuffleArray(storage) {
        let n = storage.length;
        for (let i = n - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [storage[i], storage[j]] = [storage[j], storage[i]];
        }
        return storage;
    }
    function* randomChoice(storage) {
        let shuffledArr = shuffleArray(storage);
        for (let element of shuffledArr) {
            yield element;
        }
    }
    
    for (let element of randomChoice(storage)) {
        document.querySelector(".samph").innerHTML += element;
    }


const appstorage = [`<div class="appphones">
<img src="./apple-iphone-14-pro-max-1.jpg" alt="" class="insidepic">
<div class="prdet">
    <p>Iphone 14 pro max</p>
    <p class="price">
        <span>₦</span><span class="money">1200</span>
    </p>
    <p class="addcart"><i class="fa-solid fa-cart-plus"></i></p>
</div>
</div>`, `<div class="appphones">
<img src="./iphone-13-2022-gallery-2_GEO_US-scaled.jpeg" alt="" class="insidepic">
<div class="prdet">
    <p>Iphone 13 Mini</p>
    <p class="price">
        <span>₦</span><span class="money">1200</span>
    </p>
    <p class="addcart"><i class="fa-solid fa-cart-plus"></i></p>
</div>
</div>`, `<div class="appphones">
<img src="./iphone-13-pro-max-web.webp" alt="" class="insidepic">
<div class="prdet">
    <p>Iphone 13 pro</p>
    <p class="price">
        <span>₦</span><span class="money">1200</span>
    </p>
    <p class="addcart"><i class="fa-solid fa-cart-plus"></i></p>
</div>
</div>`, `<div class="appphones">
<img src="./iphone12.jpeg" alt="" class="insidepic">
<div class="prdet">
    <p>Iphone 12 mini</p>
    <p class="price">
        <span>₦</span><span class="money">1200</span>
    </p>
    <p class="addcart"><i class="fa-solid fa-cart-plus"></i></p>
</div>
</div>`, `<div class="appphones">
<img src="./iphone11.webp" alt="" class="insidepic">
<div class="prdet">
    <p>Iphone 12 pro max</p>
    <p class="price">
        <span>₦</span><span class="money">1200</span>
    </p>
    <p class="addcart" ><i class="fa-solid fa-cart-plus"></i></p>
</div>
</div>`]

function shuffleArrayapp(appstorage) {
    let n = appstorage.length;
    for (let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [appstorage[i], appstorage[j]] = [appstorage[j], appstorage[i]];
    }
    return storage;
}
function* randomChoiceapp(appstorage) {
    let shuffledArr = shuffleArray(appstorage);
    for (let element of shuffledArr) {
        yield element;
    }
}

for (let element of randomChoiceapp(appstorage)) {
    document.querySelector(".appph").innerHTML += element;
}

const cartbut = document.querySelectorAll('.addcart');
let arrconv = Array.from(cartbut)
arrconv.forEach(function(elem) { 
    elem.addEventListener("click", async function(){
        this.classList.toggle("green");
        if(this.classList.contains("green")){
            let red = document.querySelector(".confirm");
            red.classList.toggle("dropdown");
            await new Promise((resolve) => setTimeout(resolve, 3000));
            red.classList.toggle("dropdown");

        }else{
            let green = document.querySelector(".confirmout");
            green.classList.toggle("dropdown");
            await new Promise((resolve) => setTimeout(resolve, 3000));
            green.classList.toggle("dropdown");
        }
    })
});