const productsContainer = document.querySelector(".products");
productsContainer.innerHTML = renderProducts(products);


//show Detail
document.querySelectorAll('.details').forEach((d)=>{
    d.addEventListener("click",(e)=>{
        let productName = e.target.getAttribute("data-name")    
          window.location.href = `detail.html?name=${productName}`;
    })
})

//filter Categoires
let categoriesButton = document.querySelectorAll('.select-category');
categoriesButton.forEach((c)=>{
    c.addEventListener("click",(e)=>{
        categoriesButton.forEach((cb)=>{
            cb.classList.remove("active")
        })
        c.classList.add("active");
        let category  =e.target.getAttribute("data-category");
        if(category === "all"){
             productsContainer.innerHTML = renderProducts(products)
        }else{
            let filterProducts = products.filter((p)=>p.category === category);
            productsContainer.innerHTML = renderProducts(filterProducts);
        }
        
        document.querySelectorAll('.details').forEach((d)=>{
            d.addEventListener("click",(e)=>{
                let productName = e.target.getAttribute("data-name")    
                  window.location.href = `detail.html?name=${productName}`;
            })
        })
        addCartItem();
    })
})

//add To Cart
function addCartItem(){
    let addToCartButton = document.querySelectorAll(".addToCart");
    addToCartButton.forEach((cartBtn)=>{
        cartBtn.addEventListener(("click"),(e)=>{
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
    })
}
addCartItem()
//render products to products Container
function renderProducts (data){
    return  data.map((product)=>(
          `
         <div class="card text-center animate__animated animate__fadeInLeft" >
             <img src="${product.image}" style="width:157px;height: 200px;border-radius:10px;">
             <div class="text-center mt-2">
                 <h4>${product.name}</h4>
                 <p class="mt-1 price">${product.price} $</p>
                 <div class="d-flex justify-content-between mt-1">
                         <button class="mt-1 btn btn-primary btn-sm details" data-name=${product.name}>
                             <i class="fa-solid fa-eye"></i>
                             Details
                         </button>
                    
                     <button class="mt-1 btn btn-primary btn-sm addToCart" data-id=${product.id}>
                         <i class="fa-solid fa-cart-arrow-down"></i>
                         Add To Cart
                     </button>
                 </div>
                 
             </div>
         </div>
         `
     ))
}


