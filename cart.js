let cartItemsElement = document.querySelector('.cart-items');
let totalAmountElement = document.querySelector('.total-amount');
if(getCartItems().length===0){
    document.querySelector(".carts .card").style.display  ="none";
    document.querySelector(".cart-items").style.display  ="none";
    document.querySelector(".carts-container").innerHTML = `
        <div style="width:50%;margin:0px auto;text-align:center">
            <h4 style="color:#fff;">No Items Not Found</h4>
            <button  class="btn btn-primary" style="margin-top:20px" onclick="window.location.href='shop.html'">
                Continue To Shop
            </button>
        </div> `
}else{
    // order Button 
let orderButton = document.querySelector('.order');
orderButton.addEventListener("click",()=>{
    let name = window.prompt("You Name");
    let address = window.prompt("Your Address");
    let phone = window.prompt("You Phone");
    if(name && address && phone){
        Swal.fire(
        'Good job!',
        'Thank for you encouragment!',
        'success'
      ).then((result)=>{
            if(result.isConfirmed){
                localStorage.removeItem('cartItems');
                window.location.href="shop.html"
            }
      })
    }
    
})

}

cartItemsElement.innerHTML = `
<table>
    <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Action</th>
        </tr>
    </thead>
       
    <tbody>
            ${renderCartItems(getCartItems())} 
    </tbody>

</table>`;



/// increase Button;
let increaseButton = document.querySelectorAll(".increase");
increaseButton.forEach((btn)=>{
    btn.addEventListener(("click"),(e)=>{
        let id = e.target.getAttribute('data-id');
        let c = getCartItems();
        let existItem= c.find((c)=> c.id === Number(id));
        if(existItem){
            existItem.qty+=1;
        }
        getTotalAmount(c);
        e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].textContent=existItem.qty * existItem.price +"$"
        e.target.previousElementSibling.textContent= existItem.qty;
        localStorage.setItem("cartItems",JSON.stringify(c));
    })
})

///decrease Button;
let decreaseButton = document.querySelectorAll(".decrease");
decreaseButton.forEach((btn)=>{
    btn.addEventListener(("click"),(e)=>{  
        let id = e.target.getAttribute('data-id');
        let c = getCartItems();
        let existItem= c.find((c)=> c.id === Number(id));
        if(existItem){
            if(existItem.qty===1) return deleteCart(existItem.id)
            existItem.qty-=1;
        }
        getTotalAmount(c);
        e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0].textContent=existItem.qty * existItem.price +"$"
        e.target.nextElementSibling.textContent= existItem.qty;
        localStorage.setItem("cartItems",JSON.stringify(c));
    })
})


//deleteCartfunction
function deleteCart(id){
    let c = getCartItems();
    c = c.filter((c)=>c.id !==Number(id));
        if(c.length == 0){
            document.querySelector(".carts .card").style.display  ="none";
            document.querySelector(".cart-items").style.display  ="none";
            document.querySelector(".carts-container").innerHTML = `
                <div style="width:50%;margin:0px auto;text-align:center">
                    <h4 style="color:#fff;">No Items Not Found</h4>
                    <button  class="btn btn-primary" style="margin-top:20px" onclick="window.location.href='shop.html'">
                        Continue To Shop
                    </button>
                </div>   
            
            `
            cartTotalElement.classList.remove('cart-count');
            cartTotalElement.innerHTML = '';
        }else{
            cartTotalElement.innerHTML = c.length;
        }
        getTotalAmount(c);
        cartItemsElement.innerHTML= renderCartItems(c);
       
        localStorage.setItem("cartItems",JSON.stringify(c));
}

//rendercartItems
function renderCartItems (data){
     return data.map((c)=>(
        `
                <tr>
                    <td style="width: 150px;text-align:center;padding-top:1rem">
                        <a href=detail.html?name=${c.name}>
                            <img src=${c.image} alt="" style="width:50px;border-radius:50%;">
            
                        </a>
                    </td>
                    <td style="width: 150px;text-align:center">
                        <span class="product-name">${c.name}</span>
                    </td>
                    <td  style="width: 150px;text-align:center">
                        <div>
                            <button class="btn decrease" data-id=${c.id}>-</button>
                            <span style="color: #c6d3e7;">${c.qty}</span>
                            <button class="btn increase" data-id=${c.id}>+</button>
                        </div>
                    </td>
                    <td style="width: 150px;text-align:center">
                        <span class="price"> ${c.price } $</span>
                    </td>
                    <td style="width: 150px;text-align:center">
                        <span class="price" id="totalPrice">
                            ${c.price * c.qty} $
                        </span>
                    </td>
                    <td>
                        <button class="btn btn-danger deleteItem" data-id=${c.id} onclick={deleteCartHandler(this)}>
                            <i class="fa-solid fa-trash" data-id=${c.id}></i>
                        </button>
                    </td>
                </tr>
            
        `
        
    ))
}
//deleteCartHandler
function deleteCartHandler(btn){
       let id= btn.getAttribute('data-id');
       deleteCart(id);
}
/// Total Amount
getTotalAmount(getCartItems())
function getTotalAmount (items){
    
    let totalAmount = items.reduce((p,c)=>p+(c.qty*c.price),0).toFixed(2);
    if(items.length > 0){
        totalAmountElement.innerHTML = `Total Amount: <span style="color:green">${totalAmount} $</span>`

    }else{
        totalAmountElement.parentElement.style.display="none"
    }
     
}



