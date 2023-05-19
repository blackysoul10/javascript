const Emailbutton = document.querySelector('.navbar-email');
const cartButtonMenu = document.querySelector('.navbar-shopping-cart');
const menuHamburguerButton = document.querySelector('.menu');


const mobileMenu = document.querySelector('.mobile-menu');
const Aside = document.querySelector('.product-detail')
const desktopMenu = document.querySelector('.desktop-menu');

const cardsContainer = document.querySelector('.cards-container');


// ADDEVENTLISTENER
Emailbutton.addEventListener('click', toggleDesktopMenu);
menuHamburguerButton.addEventListener('click', toggleMobileMenu);
cartButtonMenu.addEventListener('click', toggleAsideMenu);


//FUNCTIONS


//menu email Button
function toggleDesktopMenu() {
    const isAsideClosed = Aside.classList.contains('inactive');

    if(!isAsideClosed){
        Aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');


}



//menu hamburguer mobile
function toggleMobileMenu() {
    const IsAsideClosed = Aside.classList.contains('inactive');

    if(!IsAsideClosed){
        Aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

//menu carrito Aside
function toggleAsideMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    Aside.classList.toggle('inactive');
    
    
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


function renderProducts(arr){
    for(product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, image}
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
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

renderProducts(productList);