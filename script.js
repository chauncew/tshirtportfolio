const image1 = document.querySelector('.image1');
const price = document.querySelectorAll('.price p');
const shirts = document.querySelectorAll('.shirts');
const shoppingAmt = document.querySelector('.shoppingAmt');
const productsEl = document.querySelector('.products');
const cartItemsEl = document.querySelector('.cartItems');
const total = document.querySelector('.dollarTotal');
const shoppingCart = document.querySelector('.cart');
const cartWrapper = document.querySelector('.cartWrapper');
const closeCart = document.querySelector('.closeCart');


let products = [
    {
        id: 0,
        name: 'Gotcha',
        price: 45.99,
        inCart: 0,
        inStock: 10,
        image: "https://ae01.alicdn.com/kf/H96c197e46e40444bbbe9d327820f79c9S/Skull-T-shirt-Men-Skeleton-T-shirt-Punk-Rock-Tshirt-Gun-T-shirts-3d-Print-T.jpg_q50.jpg",        
    },
    {
        id: 1,
        name: 'Cheeze',
        price: 42.99,
        inCart: 0,
        inStock: 10,
        image: "https://ae01.alicdn.com/kf/HTB1NHYEcRyWBuNkSmFPq6xguVXay/New-T-shirt-Men-Summer-British-Style-Mens-Fashion-3D-Printed-skull-T-shirt-Casual-Short.jpg" 
    },
    {
        id: 2,
        name: 'Kingz',
        price: 53.99,
        inCart: 0,
        inStock: 10,
        image: "https://images-na.ssl-images-amazon.com/images/I/71Xowsld8JL._AC_UX385_.jpg"
    },
    {
        id: 3,
        name: 'Devil Smoke',
        price: 50.99,
        inCart: 0,
        inStock: 10,
        image: "https://ae01.alicdn.com/kf/H60a9affe26e74941afe0ab9e89af28853/2020-hot-new-3D-t-shirt-design-skull-men-s-summer-short-sleeve-fashion-trend-simple.jpg"
    },
    {
        id: 4,
        name: 'Broken',
        price: 39.99,
        inCart: 0,
        inStock: 10,
        image: src="images/brokenSkull.jpg"
    },
    {
        id: 5,
        name: 'Ace',
        price: 56.99,
        inCart: 0,
        inStock: 10,
        image: src="images/AceInASkull.jpg"
    },
    {
        id: 6,
        name: 'Scream',
        price: 53.99,
        inCart: 0,
        inStock: 10,
        image: src="images/ScreemSkull.jpg"
    },
    {
        id: 7,
        name: 'Red Eye',
        price: 41.99,
        inCart: 0,
        inStock: 10,
        image: src="images/redEyeSkulljpg.jpg"
    }
]

//This function will show the cart
shoppingCart.addEventListener('click', () => {
    cartWrapper.classList.toggle('cartWrapperActive')
})

closeCart.addEventListener('click', () => {
    cartWrapper.classList.remove('cartWrapperActive')
})

const renderProducts = () => {
    products.forEach((product) => {
        productsEl.innerHTML += `
            <div class="shirts">
                <img src=${product.image} alt="">
                <div class="price" onclick="addToCart(${product.id})">
                    <p>${product.name}</p>
                    <p class="productPrice">$${product.price}</p>
                    <h4 class="addToCart">Add To Cart</h4>
                </div>
            </div>
        `
    })
}

renderProducts()


//Add to cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
// updateCart();

const addToCart = (id) => {
    if(cart.some((item) => item.id === id)) {
        changeUnits("add", id)
    } else {
        const item = products.find((product) => product.id === id)
    cart.push({
        ...item, 
        numberOfUnits: 1
    })

    }
    updateCart()
}

 
// This function will update the cart
const updateCart = () => {
    renderCartItems()
    renderSubtotal()

    //This will save items to local storage
    // localStorage.setItem("CART", JSON.stringify(cart));
}


//This function will calculate and render the total price of items
const renderSubtotal = () => {
    let totalPrice = 0, totalItems = 0;
    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    })
    total.innerHTML = `$<span>${totalPrice}</span>`;
    shoppingAmt.innerHTML = totalItems;
}

//This function will update the cart items
const renderCartItems = () => {
    cartItemsEl.innerHTML = "" //This will clear the cart and not duplicate cart item
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
    <div class="cartItem">
        <div class="itemInfo">
            <img src="${item.image}" onclick="removeItem(${item.id})" alt="">
            <h4>${item.name}</h4>
            <div class="unitPrice">
                <small>$</small>${item.price}
            </div>
            <div class="itemUnits">
                <div class="minus" onClick="changeUnits('minus', ${item.id})">-</div>
                <div class="units">${item.numberOfUnits}</div>
                <div class="add" onClick="changeUnits('add', ${item.id})">+</div>
            </div>
        </div>
    </div>
`
    })
}


//This function will remove items from the cart
const removeItem = (id) => {
    cart = cart.filter((item) => (
        item.id !== id
    ))
    updateCart()
}



//This function will change the number of units add or subtracted
const changeUnits = (action, id) => {
  cart = cart.map((item) => {
      let numberOfUnits = item.numberOfUnits
      if(item.id === id) {
        if(action === "minus" && numberOfUnits > 1) {
            numberOfUnits --
        }else if(action === "add" && numberOfUnits < item.inStock) {
            numberOfUnits ++
        }
      }
        return {
            ...item,
            numberOfUnits,
        }
    })
    updateCart()
}