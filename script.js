const image1 = document.querySelector('.image1');
const price = document.querySelectorAll('.price');
const shirts = document.querySelectorAll('.shirts');
const shoppingAmt = document.querySelector('.shoppingAmt');

let count = 0

let products = [
    {
        name: 'Gotcha',
        price: 45.99,
        inCart: 0
    },
    {
        name: 'Cheeze',
        price: 42.99,
        inCart: 0
    },
    {
        name: 'Kingz',
        price: 53.99,
        inCart: 0
    },
    {
        name: 'Devil Smoke',
        price: 50.99,
        inCart: 0
    },
]



for(let i = 0; i < price.length; i++) {
    price[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

// price.forEach((prices) => {
//     prices.addEventListener('click', () => {
//         cartNumbers(products)
//     })
// })

const cartLoad = () => {
    let productAmt = localStorage.getItem('cartNumbers');
    if(productAmt) {
        shoppingAmt.innerHTML = productAmt;
    }
}

const cartNumbers = (products) => {
    let productAmt = localStorage.getItem('cartNumbers');
    //The parseInt method will change the amount from a string to a number.
    productAmt = parseInt(productAmt); 
    if(productAmt) {
        localStorage.setItem('cartNumbers', productAmt + 1);
        shoppingAmt.innerHTML = productAmt + 1;
    } else {
    localStorage.setItem('cartNumbers', 1);
    shoppingAmt.innerHTML = productAmt = 1;
    }

    setItems(products)
}

const setItems = (products) => {
    let cartItems = localStorage.getItem('productAmt');
    cartItems = JSON.parse(cartItems)
    if(cartItems != null) {
        if(cartItems[products.name] == undefined) {
            cartItems = {
                ...cartItems,
                products
            }
        }
        // cartItems[products.name].inCart += 1;
    } else {
        products.inCart = 1;
        cartItems = {
        products
    }
    
    }
    localStorage.setItem('productAmt', JSON.stringify(cartItems))
}

const totalCost = (product) => {
    console.log("The product price is", product.price)
}

cartLoad();