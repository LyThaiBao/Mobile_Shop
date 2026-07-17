import {formatVietnameseMoney} from "./convertMoney.js"
export function renderProduct(products,addToCart,root_id){
    const containProduct = document.getElementById(root_id);
    const fragment = document.createDocumentFragment();
    const row = document.createElement('div');
    const classRow = ['row'];
    row.classList.add(...classRow);
   const htmlProduct = products.map((item, index) => {
    const columnWrapper = document.createElement('div');
    columnWrapper.classList.add('col-12', 'col-md-6', 'col-lg-3','mt-3');

    // ---- productCard----
    const productCard = document.createElement('section');
    productCard.classList.add('product_card', 'd-flex', 'flex-column', 'h-100');

    // ----- Thumb ------
    const containImg = document.createElement('div');
    containImg.classList.add('w-100', 'text-center');
    const img = document.createElement('img');
    img.classList.add('w-75');
    img.setAttribute('src', item.colors[0].imgs[0]);
    containImg.append(img);

    // ---- Desc ------
    const containDesc = document.createElement('div');
    containDesc.classList.add('containDesc');
    
    // ---- Title ----
    const title = document.createElement('h5');
    title.innerText = item.name;
    title.classList.add('product-title');
    
    // ---- Price ----
    const price = document.createElement('div');
    price.innerText = formatVietnameseMoney(item.variants[0].newPrice);
    
    // ---- Button ----
    const buyBtn = document.createElement('button');
    buyBtn.classList.add('buy_btn');
    buyBtn.innerText = '+ Thêm giỏ';
    buyBtn.addEventListener('click',()=>{
        addToCart(item);
    })

    // ----- Gộp các thành phần lại ----
    containDesc.append(title, price, buyBtn);
    productCard.append(containImg, containDesc);
    
    columnWrapper.append(productCard);

    return columnWrapper; 
});

    fragment.append(...htmlProduct);
    row.append(fragment);
    containProduct.append(row);

}

localStorage.setItem('username',JSON.stringify('Timmy'))