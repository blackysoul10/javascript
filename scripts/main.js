const Emailbutton = document.querySelector('.navbar-email');
const cartButtonMenu = document.querySelector('.navbar-shopping-cart');
const menuHamburguerButton = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const desktopMenu = document.querySelector('.desktop-menu');
const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');


// ADDEVENTLISTENER
Emailbutton.addEventListener('click', toggleDesktopMenu);
menuHamburguerButton.addEventListener('click', toggleMobileMenu);
cartButtonMenu.addEventListener('click', toggleAsideMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

//FUNCTIONS


//menu email Button
function toggleDesktopMenu() {
    const isshoppingCartContainer = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainer){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');


}



//menu hamburguer mobile
function toggleMobileMenu() {
    const IsshoppingCartContainer = shoppingCartContainer.classList.contains('inactive');

    if(!IsshoppingCartContainer){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside();
}

//menu carrito Aside
function toggleAsideMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
        if(!isProductDetailClosed){
            productDetailContainer.classList.add('inactive');
        }

    
    
}

//open details of product list

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}






const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 12000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computador',
    price: 12021212,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

//Funcion para renderizar la Lista de Productos
function renderProducts(arr){
    for(product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, image}
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
     
    
    
        const productInfoFigure = document.createElement('figure');
        const productimgCart = document.createElement('img');
        productimgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
    
        //append
        cardsContainer.appendChild(productCard);
        //append
        productCard.append(productImg, productInfo);
        //append
        productInfo.append(productInfoDiv, productInfoFigure)
        //append
        productInfoDiv.append(productPrice, productName);
        //append
        productInfoFigure.appendChild(productimgCart);
    
    }
}
//Llamando a la funcion y pasandole una lista
renderProducts(productList);