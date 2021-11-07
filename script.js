const image1 = document.querySelector('.image1');
const price = document.querySelectorAll('.price p');
const shirts = document.querySelectorAll('.shirts');
const shoppingAmt = document.querySelector('.shoppingAmt');
const productsEl = document.querySelector('.products');

let products = [
    {
        id: 0,
        name: 'Gotcha',
        price: 45.99,
        inCart: 0,
        image: "https://ae01.alicdn.com/kf/H96c197e46e40444bbbe9d327820f79c9S/Skull-T-shirt-Men-Skeleton-T-shirt-Punk-Rock-Tshirt-Gun-T-shirts-3d-Print-T.jpg_q50.jpg"
    },
    {
        id: 1,
        name: 'Cheeze',
        price: 42.99,
        inCart: 0,
        image: "https://ae01.alicdn.com/kf/HTB1NHYEcRyWBuNkSmFPq6xguVXay/New-T-shirt-Men-Summer-British-Style-Mens-Fashion-3D-Printed-skull-T-shirt-Casual-Short.jpg" 
    },
    {
        id: 2,
        name: 'Kingz',
        price: 53.99,
        inCart: 0,
        image: "https://images-na.ssl-images-amazon.com/images/I/71Xowsld8JL._AC_UX385_.jpg"
    },
    {
        id: 3,
        name: 'Devil Smoke',
        price: 50.99,
        inCart: 0,
        image: "https://ae01.alicdn.com/kf/H60a9affe26e74941afe0ab9e89af28853/2020-hot-new-3D-t-shirt-design-skull-men-s-summer-short-sleeve-fashion-trend-simple.jpg"
    }
]

const renderProducts = () => {
    products.forEach((product) => {
        productsEl.innerHTML += `
        <div class="productsContainer">
            <div class="shirts">
                <img src=${product.image} alt="">
                <div class="price" onclick="addToCart(${product.id})">
                    <p>${product.name}</p>
                    <p class="productPrice">$${product.price}</p>
                </div>
            </div>
        </div>
        `
    })
}

renderProducts()

//Add to cart array
let cart = []

const addToCart = (id) => {
    const item =  products.find((product) => product.id === id);
    cart.push(item)
    console.log(item)
}


// for(let i = 0; i < price.length; i++) {
//     price[i].addEventListener('click', () => {
//         cartNumbers(products[i]);
//         totalCost(products[i])
//     })
// }



// const cartLoad = () => {
//     let productAmt = localStorage.getItem('cartNumbers');
//     if(productAmt) {
//         shoppingAmt.innerHTML = productAmt;
//     }
// }

// const cartNumbers = (products) => {
//     let productAmt = localStorage.getItem('cartNumbers');
//     productAmt = parseInt(productAmt); 
//     if(productAmt) {
//         localStorage.setItem('cartNumbers', productAmt + 1);
//         shoppingAmt.innerHTML = productAmt + 1;
//     } else {
//     localStorage.setItem('cartNumbers', 1);
//     shoppingAmt.innerHTML = productAmt = 1;
//     }

//     setItems(products)
// }

// const setItems = (products) => {
//     let cartItems = localStorage.getItem('productAmt');
//     cartItems = JSON.parse(cartItems)
//     if(cartItems != null) {
//         if(cartItems[products.name] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 products
//             }
//         }
//         cartItems[products.name].inCart += 1;

//     } else {
//         products.inCart = 1;
//         cartItems = {
//         products
//     }
    
//     }
//     localStorage.setItem('productAmt', JSON.stringify(cartItems))
// }

// const totalCost = (product) => {
//     let cartCost = localStorage.getItem('totalCost')
//     console.log("The total price is:", cartCost )
//     localStorage.setItem("totalCost", product.price)
// }

// cartLoad();