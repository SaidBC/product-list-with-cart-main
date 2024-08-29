const desserts = [{
    fullName: 'Waffle with Berries',
    name: 'Waffle',
    price: '6.50',
    imageDesktop: './assets/images/image-waffle-desktop.jpg',
    imageTablet: './assets/images/image-waffle-tablet.jpg',
    imageMobile: './assets/images/image-waffle-mobile.jpg',
    imageThumbnail: './assets/images/image-waffle-thumbnail.jpg',
    id: 'uid-1',

}, {
    fullName: 'Vanilla Bean Crème Brûlée',
    name: 'Crème Brûlée',
    price: '7.00',
    imageDesktop: './assets/images/image-creme-brulee-desktop.jpg',
    imageTablet: './assets/images/image-creme-brulee-tablet.jpg',
    imageMobile: './assets/images/image-creme-brulee-mobile.jpg',
    imageThumbnail: './assets/images/image-creme-brulee-thumbnail.jpg',
    id: 'uid-2',

}, {
    fullName: 'Macaron Mix of Five',
    name: 'Macaron',
    price: '8.00',
    imageDesktop: './assets/images/image-macaron-desktop.jpg',
    imageTablet: './assets/images/image-macaron-tablet.jpg',
    imageMobile: './assets/images/image-macaron-mobile.jpg',
    imageThumbnail: './assets/images/image-macaron-thumbnail.jpg',
    id: 'uid-3',

}
    , {
    fullName: 'Classic Tiramisu',
    name: 'Tiramisu',
    price: '5.50',
    imageDesktop: './assets/images/image-tiramisu-desktop.jpg',
    imageTablet: './assets/images/image-tiramisu-tablet.jpg',
    imageMobile: './assets/images/image-tiramisu-mobile.jpg',
    imageThumbnail: './assets/images/image-tiramisu-thumbnail.jpg',
    id: 'uid-4',

}
    , {
    fullName: 'Pistachio Baklava',
    name: 'Baklava',
    price: '4.00',
    imageDesktop: './assets/images/image-baklava-desktop.jpg',
    imageTablet: './assets/images/image-baklava-tablet.jpg',
    imageMobile: './assets/images/image-baklava-mobile.jpg',
    imageThumbnail: './assets/images/image-baklava-thumbnail.jpg',
    id: 'uid-5',

}
    , {
    fullName: 'Lemon Meringue Pie',
    name: 'Pie',
    price: '5.00',
    imageDesktop: './assets/images/image-meringue-desktop.jpg',
    imageTablet: './assets/images/image-meringue-tablet.jpg',
    imageMobile: './assets/images/image-meringue-mobile.jpg',
    imageThumbnail: './assets/images/image-meringue-thumbnail.jpg',
    id: 'uid-6',

}
    , {
    fullName: 'Red Velvet Cake',
    name: 'Cake',
    price: '4.50',
    imageDesktop: './assets/images/image-cake-desktop.jpg',
    imageTablet: './assets/images/image-cake-tablet.jpg',
    imageMobile: './assets/images/image-cake-mobile.jpg',
    imageThumbnail: './assets/images/image-cake-thumbnail.jpg',
    id: 'uid-7',

}, {
    fullName: 'Salted Caramel Brownie',
    name: 'Brownie',
    price: '4.50',
    imageDesktop: './assets/images/image-brownie-desktop.jpg',
    imageTablet: './assets/images/image-brownie-tablet.jpg',
    imageMobile: './assets/images/image-brownie-mobile.jpg',
    imageThumbnail: './assets/images/image-brownie-thumbnail.jpg',
    id: 'uid-8',

}
    , {
    fullName: 'Vanilla Panna Cotta',
    name: 'Panna Cotta',
    price: '6.50',
    imageDesktop: './assets/images/image-panna-cotta-desktop.jpg',
    imageTablet: './assets/images/image-panna-cotta-tablet.jpg',
    imageMobile: './assets/images/image-panna-cotta-mobile.jpg',
    imageThumbnail: './assets/images/image-panna-cotta-thumbnail.jpg',
    id: 'uid-9',

}];
const productsContainer = document.querySelector('.products-container');
const cartContainer = document.querySelector('.your-cart');
const cartControl = document.querySelector('.your-cart .cart-control');
const cartQuantities = document.querySelector('.your-cart h2 .quantity');
const emptyCartImg = document.querySelector('.your-cart img')
const emptyCartNote = document.querySelector('.your-cart .note');
const totalPrice = document.querySelector('.total-price');
let totalPriceCounter = 0;
const productCart = [];
const confirmOrderBtn = document.querySelector('.confirm-order-btn')
const mainOrderConfirmedContainer = document.querySelector('.main-order-confirmed-container')
const confirmedProducts = document.querySelector('.confirmed-products')
const totalConfirmedPrice = document.querySelector('.total-confirmed-price')
const newOrderBtn = document.querySelector('.new-order-btn')
// adding all desserts
desserts.forEach((dessert) => {
    const product = document.createElement('div');
    product.classList.add('dessert-container');
    product.setAttribute('id', dessert.id)
    const addToCart_picture = document.createElement('div');
    addToCart_picture.classList.add('add-to-cart-and-picture-container');
    const dessertImages = document.createElement('picture');
    const dessertImg = document.createElement('img');
    const dessertDesktopImg = document.createElement('source');
    const dessertTabletImg = document.createElement('source');
    const dessertMobileImg = document.createElement('source');
    dessertDesktopImg.setAttribute('media', '(min-width:960px)')
    dessertTabletImg.setAttribute('media', '(min-width:760px)')
    dessertMobileImg.setAttribute('media', '(min-width:480px)')
    dessertDesktopImg.setAttribute('srcset', dessert.imageDesktop)
    dessertTabletImg.setAttribute('srcset', dessert.imageTablet)
    dessertMobileImg.setAttribute('srcset', dessert.imageMobile)
    dessertImg.setAttribute('src', dessert.imageDesktop)


    const addToCart = document.createElement('div')
    addToCart.classList.add('add-to-cart');
    const addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('add-to-cart-btn');
    addToCartBtn.textContent = 'Add to Cart';

    // dessert Details 
    const details = document.createElement('div');
    details.classList.add('details');
    const dessertName = document.createElement('h4')
    dessertName.textContent = dessert.name;
    const dessertFullName = document.createElement('h3')
    dessertFullName.textContent = dessert.fullName;
    const dessertPrice = document.createElement('span');
    dessertPrice.textContent = `$${dessert.price}`

    // append elements
    productsContainer.appendChild(product)
    product.appendChild(addToCart_picture)
    addToCart_picture.appendChild(dessertImages)
    dessertImages.appendChild(dessertDesktopImg)
    dessertImages.appendChild(dessertTabletImg)
    dessertImages.appendChild(dessertMobileImg)
    dessertImages.appendChild(dessertImg)

    addToCart_picture.appendChild(addToCart)
    addToCart.appendChild(addToCartBtn)

    product.appendChild(details)
    details.appendChild(dessertName)
    details.appendChild(dessertFullName)
    details.appendChild(dessertPrice)

    // PRODUCT QUANTITIES BUTTON //

    addToCartBtn.addEventListener('click', () => {
        let productQuantity = 0;
        const productQuantitySpan = document.createElement('span');
        const plusBtn = document.createElement('button');
        const minusBtn = document.createElement('button');
        productQuantitySpan.textContent = productQuantity;
        plusBtn.classList.add('plus-btn')
        minusBtn.classList.add('minus-btn')
        addToCartBtn.remove();
        product.classList.add('active')
        addToCart.appendChild(minusBtn)
        addToCart.appendChild(productQuantitySpan)
        addToCart.appendChild(plusBtn)

        // quatities counter 
        plusBtn.onclick = (e) => {
            if (+cartQuantities.textContent == 0) {
                cartContainer.classList.replace('empty', 'filled')
            }
            if (productQuantity < 100) {
                let productAvailablility = productCart.map((p, i) => p.fullname == e.target.parentNode.parentNode.parentNode.children[1].children[1].textContent).indexOf(true);
                productAvailablility = productAvailablility == -1 ? false : productAvailablility;
                productQuantitySpan.textContent = ++productQuantity;
                cartQuantities.textContent = +cartQuantities.textContent + 1;
                if (productAvailablility === false) {
                    productCart.push({ fullname: e.target.parentNode.parentNode.parentNode.children[1].children[1].textContent, price: e.target.parentNode.parentNode.parentNode.children[1].children[2].textContent.slice(1, -1), quantity: 1, uid: e.target.parentNode.parentNode.parentNode.id, })
                    const cartProduct = document.createElement('div');
                    const cartProductFullName = document.createElement('span');
                    const cartProductDetails = document.createElement('div');
                    const cartProductQuantities = document.createElement('span');
                    const cartProductPrice = document.createElement('span');
                    const cartProductTotalPrice = document.createElement('span');
                    const cartProductDeleteBtn = document.createElement('button');

                    cartProduct.setAttribute('data-index', productCart.length - 1)
                    cartControl.appendChild(cartProduct);
                    cartProductFullName.textContent = productCart.at(-1).fullname;
                    cartProductFullName.classList.add('cart-product-fullname')
                    cartProduct.classList.add('cart-product')
                    cartProduct.appendChild(cartProductFullName);
                    cartProductDetails.classList.add('cart-product-details')
                    cartProduct.appendChild(cartProductDetails)
                    cartProductQuantities.classList.add('cart-product-quantity')
                    cartProductQuantities.textContent = productCart.at(-1).quantity + 'x'
                    cartProductDetails.appendChild(cartProductQuantities)
                    cartProductPrice.classList.add('cart-product-price')
                    cartProductPrice.textContent = "@ " + productCart.at(-1).price;
                    cartProductDetails.appendChild(cartProductPrice);
                    cartProductTotalPrice.classList.add('cart-product-total-price')
                    cartProductTotalPrice.textContent = '$' + (productCart.at(-1).price * productCart.at(-1).quantity);
                    cartProductDetails.appendChild(cartProductTotalPrice)
                    cartProductDeleteBtn.classList.add('cart-product-delete-btn');
                    cartProductDeleteBtn.onclick = (ev) => {
                        // changing index of all product in cart
                        const cartProducts = document.querySelectorAll('.cart-product')
                        cartProducts.forEach((e, i) => e.setAttribute('data-index', i))
                        // remove product in cart
                        ev.currentTarget.parentNode.remove();
                        // unselect product and increase/decrease price
                        console.log(ev.currentTarget.parentNode.getAttribute('data-index'), +ev.currentTarget.parentNode.getAttribute('data-index') + 1)
                        console.log(productCart)
                        const selectedAddToCard = document.querySelector(`#${productCart[ev.currentTarget.parentNode.getAttribute('data-index')].uid}`).children[0].children[1]
                        cartQuantities.textContent = +cartQuantities.textContent - +selectedAddToCard.children[1].textContent;
                        selectedAddToCard.innerHTML = ''
                        document.querySelector(`#${productCart[ev.currentTarget.parentNode.getAttribute('data-index')].uid}`).classList.remove('active')
                        selectedAddToCard.appendChild(addToCartBtn)
                        productCart.splice(ev.currentTarget.parentNode.getAttribute('data-index'), 1)
                        // total order
                        totalPriceCounter -= (+ev.currentTarget.parentNode.children[1].children[2].textContent.slice(1))
                        totalPrice.textContent = "$" + totalPriceCounter
                        if (totalPriceCounter == 0) {
                            cartContainer.classList.replace('filled', 'empty')
                        }
                    }
                    cartProduct.appendChild(cartProductDeleteBtn)
                    // total order
                    totalPriceCounter += +productCart.at(-1).price;
                    totalPrice.textContent = "$" + totalPriceCounter

                } else {
                    productCart[productAvailablility].quantity += 1;
                    cartContainer.children[3].children[productAvailablility].children[1].children[0].textContent = productCart[productAvailablility].quantity + 'x';
                    cartContainer.children[3].children[productAvailablility].children[1].children[2].textContent = '$' + (productCart[productAvailablility].price * productCart[productAvailablility].quantity)
                    // total order
                    totalPriceCounter += +productCart[productAvailablility].price;
                    totalPrice.textContent = "$" + totalPriceCounter



                }
            }
        }
        minusBtn.onclick = (e) => {
            if (productQuantity > 0) {
                let productAvailablility = productCart.map((p, i) => p.fullname == e.target.parentNode.parentNode.parentNode.children[1].children[1].textContent).indexOf(true);
                productQuantitySpan.textContent = --productQuantity;
                cartQuantities.textContent = +cartQuantities.textContent - 1;

                if (productAvailablility === false) {
                    productCart.push({ fullname: e.target.parentNode.parentNode.parentNode.children[1].children[1].textContent, price: e.target.parentNode.parentNode.parentNode.children[1].children[2].textContent.slice(1, -1), quantity: 1 })
                } else {
                    productCart[productAvailablility].quantity -= 1;
                    cartContainer.children[3].children[productAvailablility].children[1].children[0].textContent = productCart[productAvailablility].quantity + 'x';
                    cartContainer.children[3].children[productAvailablility].children[1].children[2].textContent = '$' + (productCart[productAvailablility].price * productCart[productAvailablility].quantity)
                    // total order
                    totalPriceCounter -= +productCart[productAvailablility].price
                    totalPrice.textContent = "$" + totalPriceCounter
                    if (cartContainer.children[3].children[productAvailablility].children[1].children[0].textContent.slice(0, -1) == 0) {
                        cartContainer.children[3].children[productAvailablility].remove();
                        productCart.splice(productAvailablility, productAvailablility + 1)
                    }
                }
            }
            if (+cartQuantities.textContent == 0) {
                cartContainer.classList.replace('filled', 'empty')
            }
            if (productQuantity == 0) {
                addToCart.appendChild(addToCartBtn);
                minusBtn.remove();
                productQuantitySpan.remove();
                plusBtn.remove();
                product.classList.remove('active')
            }
        }
    })
})

confirmOrderBtn.onclick = (ev) => {
    mainOrderConfirmedContainer.classList.remove('unconfirmed');
    productCart.forEach((e) => {
        const productThumbnailImg = desserts.filter(ele => ele.id == e.uid)[0].imageThumbnail;
        const confirmedProduct = document.createElement('div');
        confirmedProduct.classList.add('confirmed-product');
        const confirmedProductImage = document.createElement('img');
        const confirmedProductDetails = document.createElement('div');
        confirmedProductDetails.classList.add('confirmed-product-details')
        const confirmedProductFullName = document.createElement('b');
        const confirmedProductQuantityAndPrice = document.createElement('div');
        confirmedProductQuantityAndPrice.classList.add('confirmed-product-quantity-and-price')

        const confirmedProductQuantity = document.createElement('span');
        const confirmedProductPrice = document.createElement('span')
        const confirmedProductTotalPrice = document.createElement('div')
        confirmedProductTotalPrice.classList.add('confirmed-product-total-price')

        // setup variation;
        confirmedProductImage.setAttribute('src', productThumbnailImg);
        confirmedProductFullName.textContent = e.fullname;
        confirmedProductQuantity.textContent = e.quantity + 'x';
        confirmedProductPrice.textContent = '$' + e.price
        confirmedProductTotalPrice.textContent = '$' + (e.quantity * e.price);

        // append elements :
        confirmedProducts.appendChild(confirmedProduct);
        confirmedProduct.appendChild(confirmedProductImage)
        confirmedProduct.appendChild(confirmedProductDetails)
        confirmedProductDetails.appendChild(confirmedProductFullName)
        confirmedProductDetails.appendChild(confirmedProductQuantityAndPrice)
        confirmedProductQuantityAndPrice.appendChild(confirmedProductQuantity)
        confirmedProductQuantityAndPrice.appendChild(confirmedProductPrice)
        confirmedProduct.appendChild(confirmedProductTotalPrice)


    })
    totalConfirmedPrice.textContent = '$' + totalPriceCounter;

}

newOrderBtn.onclick = () => {
    mainOrderConfirmedContainer.classList.add('unconfirmed');
    confirmedProducts.innerHTML = '';
}