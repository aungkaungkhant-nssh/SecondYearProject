let cartItemsElement = document.querySelector('.cart-items table');
let totalAmountElement = document.querySelector('.total-amount');

cartItemsElement.innerHTML = renderCartItems(cartItems);


/// increase Button;
let increaseButton = document.querySelectorAll(".increase");
increaseButton.forEach((btn)=>{
    btn.addEventListener(("click"),(e)=>{
        
        let id = e.target.getAttribute('data-id');
        let c = [...cartItems];
        let existItem= c.find((c)=> c.id === Number(id));
        if(existItem){
            existItem.qty+=1;
        }
        getTotalAmount(c);
        e.target.previousElementSibling.textContent= existItem.qty;
        localStorage.setItem("cartItems",JSON.stringify(c));
    })
})

///decrease Button;
let decreaseButton = document.querySelectorAll(".decrease");
decreaseButton.forEach((btn)=>{
    btn.addEventListener(("click"),(e)=>{  
        let id = e.target.getAttribute('data-id');
        let c = [...cartItems];
        let existItem= c.find((c)=> c.id === Number(id));
        if(existItem){
            existItem.qty-=1;
        }
        getTotalAmount(c);
        e.target.nextElementSibling.textContent= existItem.qty;
        localStorage.setItem("cartItems",JSON.stringify(c));
    })
})

//delete Button
let deleteButton = document.querySelectorAll(".deleteItem");
deleteButton.forEach((btn)=>{
    btn.addEventListener(("click"),(e)=>{  
        let id = e.target.getAttribute('data-id');
        console.log(e.target)
        let c = [...cartItems];
        c = c.filter((c)=>c.id !==Number(id));
        getTotalAmount(c);
        cartItemsElement.innerHTML= renderCartItems(c);
        localStorage.setItem("cartItems",JSON.stringify(c));
    })
})
// order Button 
let orderButton = document.querySelector('.order');
orderButton.addEventListener("click",()=>{
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
})
function renderCartItems (data){
     return data.map((c)=>(
        `
        <tr>
            <td style="width: 150px;">
            <img src=${c.image} alt="" style="width:50px;">
            </td>
            <td style="width: 150px;">
                <span class="product-name">${c.name}</span>
            </td>
            <td  style="width: 150px;">
                <div>
                    <button class="btn decrease" data-id=${c.id}>-</button>
                    <span style="color: #c6d3e7;">${c.qty}</span>
                    <button class="btn increase" data-id=${c.id}>+</button>
                </div>
            </td>
            <td style="width: 150px;">
                <span class="price"> ${c.price } $</span>
            </td>
            
            <td>
                <button class="btn btn-danger deleteItem" data-id=${c.id}>
                    <i class="fa-solid fa-trash" data-id=${c.id}></i>
                </button>
            </td>
            </tr>
        `
    ))
}

/// Total Amount
getTotalAmount(cartItems)
function getTotalAmount (items){
    
    let totalAmount = items.reduce((p,c)=>p+(c.qty*c.price),0).toFixed(2);
    if(cartItems.length > 0){
        totalAmountElement.innerHTML = `Total Amount: <span style="color:green">${totalAmount} $</span>`

    }else{
        totalAmountElement.parentElement.style.display="none"
    }
     
}



