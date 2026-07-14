import {products} from "../../data/products/products.js"
import {formatVietnameseMoney} from "../../utils/convertMoney.js"
function renderHighLightProduct(){
    const containProduct = document.getElementById('container_products');
    const hlProduct = products.slice(7,11);
    const fragment = document.createDocumentFragment();
    const row = document.createElement('div');
    const classRow = ['row'];
    row.classList.add(...classRow);
   const htmlProduct = hlProduct.map((item, index) => {
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

function  checkEmail(){
    const modal = new bootstrap.Modal(document.getElementById('notifyModal'));
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const boxEmail = document.getElementById("box_email");
    const btn = document.getElementById("trigger");
    const error = document.getElementById("email_error");
    btn.addEventListener('click',()=>{
       if(!boxEmail.value.trim()){
            error.innerText = "Không được để email trống";
            return;
       }
       if(!regex.test(boxEmail.value.trim())){
        error.innerText = "Email không hợp lệ!"
        return;
       }
           modal.show();
           boxEmail.value = error.innerText = ""; 
    })

}

checkEmail()
renderHighLightProduct();
