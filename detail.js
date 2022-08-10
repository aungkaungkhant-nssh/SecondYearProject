

let name = window.location.search.split("=")[1];

let detailProduct = products.find((p)=>p.name === name);


document.querySelector('.detail').innerHTML=`
<div class="card animate__animated animate__fadeInDown">
<div class="d-flex align-items-top justify-content-between" style="padding: 2rem;">
    <div style="margin-right: 1.4rem;">
          <img src=${detailProduct.image} alt="" style="width:200px;height: 230px;border-radius:10px;">
    </div>
    <div>
        <div style="width: 80%;">
            <div style="margin-bottom: 1rem;">
                <span style="font-weight: bolder;">Name - </span>
                <span style="color: #ada5a5;font-weight: normal;">${detailProduct.name}</span>
            </div>
            <div style="margin-bottom: 1rem;">
                <span  style="font-weight: bolder;">Price - </span>
                <span style="color: #ada5a5;font-weight: normal;">${detailProduct.price}$</span>
            </div>
            <div style="margin-bottom: 1rem;">
                <span  style="font-weight: bolder;">Alcohol - </span>
                <span style="color: #ada5a5 ;font-weight: normal;">${detailProduct.alcohol} %</span>
            </div>
            <div style="margin-bottom: 1rem;">
                <span style="font-weight: bolder;">Country - </span>
                <span style="color: #ada5a5 ;font-weight: normal;">${detailProduct.country}</span>
            </div>
            <div>
                <span style="font-weight: bolder;">Description - </span>
                <span style="color: #ada5a5 ;font-weight: normal;">
                    ${detailProduct.description}
                </span>
            </div>
        </div>
     
    </div>
  
</div>
<button class="btn btn-block mt-2 btn-primary addCart" data-id=${detailProduct.id}>
    <i class="fa-solid fa-cart-arrow-down" style="margin-right: 5px;"></i>
    Add To Cart
</button>
</div>

`
document.querySelector(".addCart").addEventListener("click",(e)=>{
    if(!userAuth()) return window.location.href = "login.html"
    let cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    let c = [...cartItems];
    let id = e.target.getAttribute("data-id");
    let cart= products.find((p)=>p.id === Number(id));
    let existItem= c.find((c)=> c.id === Number(id));
    if(existItem){
        existItem.qty+=1;
    }else{
        c.push({...cart,qty:1})
    }
    let cartTotalElement =   document.querySelector(".cart .nav-link").nextElementSibling;
    cartTotalElement.classList.add('cart-count');
    cartTotalElement.innerHTML = c.length;
    localStorage.setItem("cartItems",JSON.stringify(c));
})